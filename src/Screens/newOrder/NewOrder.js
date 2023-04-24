import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import GlobalHeader from '../../Header/GlobalHeader'
import { StatusBar } from 'expo-status-bar'
import OrderList from '../Components/OrderList/OrderList'
import ScanPage from '../Components/ScanPage/ScanPage'
import GlobalFooter from '../../Footer/GlobalFooter'

const NewOrder = ({ navigation, AppStates }) => {

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





  const headerData = {
    navigation,
    isLogged,
    setIsLogged,
    filteredUserData,
    setFilteredUserData,
    selectedOrderCity,
    setSelectedOrderCity,
    modalVisible,
    setModalVisible,
  }


  return (
    <View style={styles.screen}>
      <GlobalHeader headerData={headerData} tilteHeader={'Nouvelle Commande'} />
      <StatusBar style='light' animation={true} backgroundColor={'#a1a1a1'} />
      <View style={styles.body}>
        <TouchableOpacity
          onPress={() => {
            navigation?.navigate('Home')
          }}
        >
          <Text>Home</Text>
        </TouchableOpacity>
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


export default NewOrder

