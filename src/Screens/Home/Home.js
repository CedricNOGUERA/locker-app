import {
  View,
  StyleSheet,
} from "react-native";
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
  }, [allSlot])






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

 console.log(selectedOrderCity)

  const getallOrders = (token) => {
    OrdersService.allOrders(token).then((response) => {
      // setIsLoading(false)
      setTest(response.data)
      console.log(response.data)
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
  const updateStatus = (id) => {
    const indx = orderData?.findIndex((order) => order.id === id);
    const filteredOrder = orderData?.filter((order) => order.id === id);
    
    const newTab = [...orderData];
    const newStatus = {
      id: filteredOrder[0].id,
      location: filteredOrder[0].location,
      orderNum: filteredOrder[0].orderNum,
      temp: filteredOrder[0].temp,
      numbContainer: filteredOrder[0].numbContainer,
      firstNameCustom: filteredOrder[0].firstNameCustom,
      LastNameCustom: filteredOrder[0].LastNameCustom,
      detailOrder: filteredOrder[0].detailOrder,
      status: "operin",
    };
    newTab[indx] = newStatus;
    setOrderData(newTab);
  };

  
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
  };
  const podModalData = {
    modalStoreVisible,
    setModalStoreVisible,
    deliveryPoint,
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
      <GlobalHeader headerData={headerData} tilteHeader={'Commande en cours'} />
      <StatusBar style='light' animation={true} backgroundColor={'#a1a1a1'} />
      <View style={styles.body}>
        {!selectedOrder && selectedOrder === null ? (
          <OrderList orderListData={orderListData} />
        ) : (
          <ScanPage scanPageData={scanPageData} />
        )}
      </View>
      <PodModal podModalData={podModalData} />
      <GlobalFooter AppStates={AppStates} test={test} navigation={navigation} />
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
