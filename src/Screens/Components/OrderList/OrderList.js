import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import Searchbar from "../Searchbar/Searchbar";
import Icon from "react-native-vector-icons/AntDesign";

const OrderList = ({ orderListData }) => {
  const {
    searchbarData,
    orderfilterByStore,
    orderfilterByStoreTest,
    filteredData,
    setSelectedOrder,
    searchOrder,
    allSlot,
  } = orderListData;


  const tempZone = orderfilterByStoreTest?.bookingSlot?.slot?.temperatureZone["@id"] === "/api/temperature_zones/5" ? "dry" : orderfilterByStoreTest?.bookingSlot?.slot?.temperatureZone["@id"] === "/api/temperature_zones/4" ? "organic-food"  : (orderfilterByStoreTest?.bookingSlot?.slot?.temperatureZone["@id"] === "/api/temperature_zones/3"  || orderfilterByStoreTest?.bookingSlot?.slot?.temperatureZone["@id"] === "/api/temperature_zones/1") ? "winter" : ""

  // const [deduplicate, setDeduplicate] = React.useState([])

  // const bookingLocker = allSlot?.['hydra:member']?.map(
  //   (locker) => locker?.slot?.temperatureZone?.locker
  // )

  // const newObject = []

  // React.useEffect(() => {
  //   unique()
  // }, [allSlot])

  // const unique = () => {
  //   for (var i = 0; i < bookingLocker?.length; i++) {
  //     newObject?.push(bookingLocker[i].location)
  //   }
  //   setDeduplicate(newObject)
  // }

  // var uniqueTab = Array.from(new Set(deduplicate))
  // console.log(orderfilterByStoreTest)


  return (
    <ScrollView>
      <Searchbar searchbarData={searchbarData} />

      {orderfilterByStoreTest?.length > 0 ? (
        filteredData?.length > 0 ? (
          filteredData?.map((cde, indx) => (
            <View key={indx} style={styles.orderCont}>
              <View style={{ flexDirection: "row" }}>
                  <Image
                    key={Math.random()}
                    source={{
                      uri: `https://img.icons8.com/color/512/${cde?.bookingSlot?.slot?.temperatureZone?.keyTemp === "FRESH" || cde?.bookingSlot.slot.temperatureZone?.myKey === "C" ? "organic-food" : (cde?.bookingSlot.slot.temperatureZone?.keyTemp === "FREEZE" || cde?.bookingSlot.slot.temperatureZone?.myKey === "F") ? "winter"  : (cde?.bookingSlot.slot.temperatureZone?.keyTemp === "NORMAL" || cde?.bookingSlot.slot.temperatureZone?.myKey === "CA") ? "dry" : ""}.png`,
                    }}
                    style={{ width: 36, height: 36 }}
                  />
              </View>

              <Text style={{ marginLeft: 20, height: 24 }}>
                {cde?.barcode}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setSelectedOrder(cde);
                }}
              >
                <Text style={{ marginLeft: 20, height: 24 }}>
                  <Icon name="qrcode" size={24} color="#5d5d5d"></Icon>
                </Text>
              </TouchableOpacity>
            </View>
          ))
        ) : filteredData?.length === 0 && searchOrder?.length > 2 ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/images/no-order.png")}
              style={{ resizeMode: "contain", width: 240, height: 240 }}
            />
            <Text style={{ textAlign: "center" }}>Aucune commande trouvée</Text>
          </View>
        ) : (
          orderfilterByStoreTest?.map((cde, indx) => (
            <View key={indx} style={styles.orderCont}>
              <View>
                {/* {cde?.temp?.map((temps) => ( */}
                <Image
                    key={Math.random()}
                    source={{
                      uri: `https://img.icons8.com/color/512/${cde?.bookingSlot?.slot?.temperatureZone?.keyTemp === "FRESH" || cde?.bookingSlot.slot.temperatureZone?.myKey === "C" ? "organic-food" : (cde?.bookingSlot.slot.temperatureZone?.keyTemp === "FREEZE" || cde?.bookingSlot.slot.temperatureZone?.myKey === "F") ? "winter"  : (cde?.bookingSlot.slot.temperatureZone?.keyTemp === "NORMAL" || cde?.bookingSlot.slot.temperatureZone?.myKey === "CA") ? "dry" : ""}.png`,

                    }}
                    style={{ width: 36, height: 36 }}
                  />
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
                {cde?.barcode}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setSelectedOrder(cde);
                }}
              >
                <Text style={{ 
                  alignText: 'right',
                   height: 25   }}>
                  <Icon name="qrcode" size={24} color="#5d5d5d"></Icon>
                </Text>
              </TouchableOpacity>
            </View>
          ))
        )
      ) : (
        <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/images/no-order.png")}
              style={{ resizeMode: "contain", width: 240, height: 240 }}
            />
          <Text style={{ textAlign: "center" }}>
            Aucune commande dans cette section
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  orderCont: {
    flexDirection: "row",
    height: 50,
    margin: 15,
    marginTop: 0,
    // padding: 20,
    backgroundColor: "#fff",
    borderRadius: 50,
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

export default OrderList;
