import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import GlobalHeader from '../../Header/GlobalHeader';
import { StatusBar } from 'expo-status-bar';
import GlobalFooter from '../../Footer/GlobalFooter';
import { useState } from 'react';

export default function DashBoard({ navigation, AppStates }){
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


  


    const headerData = {
        navigation,
        isLogged,
        setIsLogged,
        filteredUserData,
        setFilteredUserData,
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
     <Text>DashBoard</Text>
    </View>
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
