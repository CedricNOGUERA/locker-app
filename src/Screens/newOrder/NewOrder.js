import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import GlobalHeader from '../../Header/GlobalHeader'
import { StatusBar } from 'expo-status-bar'
import OrderList from '../Components/OrderList/OrderList'
import ScanPage from '../Components/ScanPage/ScanPage'
import GlobalFooter from '../../Footer/GlobalFooter'
import TopBar from '../Components/ScanPage/TopBar'

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
  const topBarData = { };


  return (
    <View style={styles.screen}>
      <GlobalHeader
        headerData={headerData}
        tilteHeader={'Nouvelle Commande'}
        icon='cart-plus'
      />
      <StatusBar style='light' animation={true} backgroundColor={'#a1a1a1'} />
      <View style={styles.body}>
        <TopBar topBarData={topBarData} msg="Choississez un locker" />
        <View>
          {allSlot['hydra:member']?.map((locker, indx) =>
            locker?.active === true ? (
              <View key={Math.random()} style={styles.orderCont}>
              <View>
                {/* {cde?.temp?.map((temps) => ( */}
                {/* <Image
                    key={Math.random()}
                    source={{
                      uri: `https://img.icons8.com/color/512/${cde?.bookingSlot?.slot?.temperatureZone?.keyTemp === "FRESH" || cde?.bookingSlot.slot.temperatureZone?.myKey === "C" ? "organic-food" : (cde?.bookingSlot.slot.temperatureZone?.keyTemp === "FREEZE" || cde?.bookingSlot.slot.temperatureZone?.myKey === "F") ? "winter"  : (cde?.bookingSlot.slot.temperatureZone?.keyTemp === "NORMAL" || cde?.bookingSlot.slot.temperatureZone?.myKey === "CA") ? "dry" : ""}.png`,

                    }}
                    style={{ width: 36, height: 36 }}
                  /> */}
                {/* ))} */}
              </View>

              <Text
                style={{
                  textAlign: "center",
                  width: 150,
                  // marginLeft: 20,
                  height: 24,
                }}
              >
              {locker?.slot?.temperatureZone?.locker?.location?.toUpperCase()}
                {/* {cde?.barcode} */}
              </Text>
              <TouchableOpacity
                // onPress={() => {
                //   setSelectedOrder(cde);
                // }}
              >
                <Text style={{ 
                  alignText: 'right',
                   height: 25   }}>
                  {/* <Icon name="qrcode" size={24} color="#5d5d5d"></Icon> */}
                </Text>
              </TouchableOpacity>
            </View>
            ) : null
          )}
        </View>
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
  orderCont: {
    flexDirection: "row",
    height: 50,
    margin: 15,
    marginTop: 0,
    // padding: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    // borderRadius: 50,
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },

 
  
});


export default NewOrder

