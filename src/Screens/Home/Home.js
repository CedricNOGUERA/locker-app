import {
  View,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import GlobalFooter from "../../Footer/GlobalFooter";
import GlobalHeader from "../../Header/GlobalHeader";
import { useEffect, useState } from "react";
import PodModal from "../Components/Modals/PodModal";
import OrderList from "../Components/OrderList/OrderList";
import ScanPage from "../Components/ScanPage/ScanPage";
import { _searchWithRegex } from "../../utils/functions";
import OrdersService from "../../services/Orders/OrdersService";
import BookingSlotservice from "../../services/BookingSlot/BookingSlotservice";

export default function Home({ navigation, AppStates }) {
  /********************************
  * Props
  *******************************/
  const {
    selectedStore,
    setSelectedStore,
    deliveryPoint,
    orderData,
    setOrderData,
    isLogged,
    setIsLogged,
    filteredUserData,
   setFilteredUserData,
   token, setToken,
   test, setTest,
   allSlot, setAllSlot,
   selectedOrderCity, setSelectedOrderCity,
   modalVisible, setModalVisible
  } = AppStates;
  
  /********************************
  * States
  *******************************/
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalStoreVisible, setModalStoreVisible] = useState(false);
  
  const [searchOrder, setSearchOrder] = useState("");
  const [filteredData, setFilteredData] = useState("");
  const bookingLocker =  allSlot?.["hydra:member"] && allSlot?.["hydra:member"]?.map((locker) => locker?.slot?.temperatureZone?.locker)

  /********************************
  * useEffect
  *******************************/

  useEffect(() => {
   
  getallOrders(token)
  getBookingAllSlot(token)
  }, []);

  useEffect(() => {
   if(isLogged === false){
    navigation.navigate("Auth")
  }
  }, [isLogged]);
  
  useEffect(() => {
    setSelectedOrderCity(
      allSlot?.['hydra:member']
        ? allSlot?.['hydra:member'][0]?.slot?.temperatureZone?.locker?.city
        : ''
    )
    setSelectedStore(
      allSlot?.['hydra:member']
        ? allSlot?.['hydra:member'][0]?.slot?.temperatureZone?.locker?.location
        : ''
    )
  }, [])






  useEffect(() => {
    _searchWithRegex(searchOrder, orderfilterByStore, setFilteredData);
  }, [searchOrder]);

  

  /********************************
   * filtered orderData by store & order status
  *******************************/

 const orderfilterByStore = orderData?.filter(
    (cde) => cde.location === selectedStore && cde.status === "inProgress"
  );
const orderfilterByStoreTest = test["hydra:member"] && test["hydra:member"]?.filter((order) => order.status === "created"
 && order?.bookingSlot?.slot?.temperatureZone?.locker?.city === selectedOrderCity
 )

//  console.log(selectedOrderCity)

  const getallOrders = (token) => {
    OrdersService.allOrders(token).then((response) => {
      // setIsLoading(false)
      setTest(response.data)
    })
  }

  const getBookingAllSlot = (token) => {
    BookingSlotservice.allSlot(token).then((response) => {
      setAllSlot(response.data)
    })
  }




  
  /********************************
   * Regex search bar -> use function '_searchWithRegex' in useEffect
  *******************************/
 const handleSearch = (text) => {
   setSearchOrder(text);
};


  /********************************
   * Modal point of delivery
   *******************************/
  
  const handleShowPodModal = () => {
    setSearchOrder("");
    setModalStoreVisible(!modalStoreVisible);
  };

  /********************************
   * Change order status
   *******************************/
  console.log(test)
  const updateStatus = (id) => {
    let data = {
      status: 'operin',
    }

    let config = {
      method: 'patch',
      maxBodyLength: Infinity,
      url: 'http://192.168.1.250:8000/api/orders/' + id,
      // url: process.env.REACT_APP_END_POINT + 'orders/' + id,
      headers: {
        'Content-Type': 'application/merge-patch+json',
        Authorization: 'Bearer ' + token,
      },
      data: data,
    }

    axios
      .request(config)
      .then((response) => {
        console.log(response.data)
        getallOrders(token)
        getBookingAllSlot(token)
        setSelectedOrder(null)
      })
      .catch((error) => {
        console.log(error)
      })
  };

  console.log(process.env)
  
  /********************************
   * Components props
   *******************************/
  
  const searchbarData = {
    handleShowPodModal,
    handleSearch,
    searchOrder,
    setSearchOrder,
    setModalStoreVisible,
    modalStoreVisible,
    selectedOrderCity,
    allSlot,
  };
  const podModalData = {
    modalStoreVisible,
    setModalStoreVisible,
    setSelectedStore,
    bookingLocker,
    setSelectedOrderCity,
  };
  const orderListData = {
    searchbarData,
    orderfilterByStore,
    orderfilterByStoreTest,
    filteredData,
    setSelectedOrder,
    searchOrder,
  };
  const scanPageData = { updateStatus, setSelectedOrder, selectedOrder };
  const headerData = {
    navigation,
    isLogged,
    setIsLogged,
    filteredUserData,
    setFilteredUserData,
    updateStatus,
    setSelectedOrder,
    selectedOrder,
    modalVisible,
    setModalVisible,
  }
  
 
  return (
    <View style={styles.screen}>
      <GlobalHeader headerData={headerData} tilteHeader={'A livrer'} icon="truck-fast-outline" />
      <StatusBar style='light' animation={true} backgroundColor={'#898989'} />
      <View style={styles.body}>
        {!selectedOrder && selectedOrder === null ? (
          <OrderList orderListData={orderListData} />
        ) : (
          <ScanPage scanPageData={scanPageData} />
        )}
      </View>
      <PodModal podModalData={podModalData} />
      <GlobalFooter AppStates={AppStates} test={test} navigation={navigation} filteredUserData={filteredUserData} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  
  body: {
    flex: 8,
    width: "100%",
    paddingTop: 15,
    overFlowy: "auto",
  },

 
  
});
