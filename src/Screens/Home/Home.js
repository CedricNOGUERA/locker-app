import {
  View,
  StyleSheet,
  // DrawerLayoutAndroid,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GlobalFooter from "../../Footer/GlobalFooter";
import GlobalHeader from "../../Header/GlobalHeader";
import { useEffect, useState } from "react";
import PodModal from "../Components/Modals/PodModal";
import OrderList from "../Components/OrderList/OrderList";
import ScanPage from "../Components/ScanPage/ScanPage";
import { _searchWithRegex } from "../../utils/functions";
import { SafeAreaView } from "react-native-safe-area-context";

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
   setFilteredUserData
  } = AppStates;
  
  /********************************
  * States
  *******************************/
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  
  const [searchOrder, setSearchOrder] = useState("");
  const [filteredData, setFilteredData] = useState("");
  
  /********************************
  * useEffect
  *******************************/

  useEffect(() => {
   if(isLogged === false){
    navigation.navigate("Auth")
  }
  }, [isLogged]);
  useEffect(() => {
    _searchWithRegex(searchOrder, orderfilterByStore, setFilteredData);
  }, [searchOrder]);

  

  /********************************
   * filtered orderData by store & order status
  *******************************/

 const orderfilterByStore = orderData?.filter(
    (cde) => cde.location === selectedStore && cde.status === "inProgress"
  );
  
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
    setModalVisible(!modalVisible);
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
      status: "delivered",
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
    setModalVisible,
    modalVisible,
    selectedStore,
  };
  const podModalData = {
    modalVisible,
    setModalVisible,
    deliveryPoint,
    setSelectedStore,
  };
  const orderListData = {
    searchbarData,
    orderfilterByStore,
    filteredData,
    setSelectedOrder,
    searchOrder,
  };
  const scanPageData = { updateStatus, setSelectedOrder, selectedOrder };
  const headerData = { navigation, isLogged, setIsLogged,filteredUserData, setFilteredUserData, updateStatus, setSelectedOrder, selectedOrder };
  
 
  return (
    <View style={styles.screen}>
      <GlobalHeader headerData={headerData} tilteHeader={"Commande en cours"} />
      <StatusBar style="light" animation={true} backgroundColor={"#a1a1a1"} />
      <View style={styles.body}>
        {!selectedOrder && selectedOrder === null ? (
          <>

          <OrderList orderListData={orderListData} />
          {/* <DrawerLayoutAndroid drawerBackgroundColor="rgba(0,0,0,0.5)" /> */}
          </>
        ) : (
          <ScanPage scanPageData={scanPageData} />
        )}
      </View>
      <PodModal podModalData={podModalData} />
      <GlobalFooter AppStates={AppStates} navigation={navigation} />
    </View>
  );
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
