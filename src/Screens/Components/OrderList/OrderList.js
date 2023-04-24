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
  } = orderListData;


  const tempZone = orderfilterByStoreTest?.bookingSlot?.slot?.temperatureZone["@id"] === "/api/temperature_zones/5" ? "dry" : orderfilterByStoreTest?.bookingSlot?.slot?.temperatureZone["@id"] === "/api/temperature_zones/4" ? "organic-food"  : (orderfilterByStoreTest?.bookingSlot?.slot?.temperatureZone["@id"] === "/api/temperature_zones/3"  || orderfilterByStoreTest?.bookingSlot?.slot?.temperatureZone["@id"] === "/api/temperature_zones/1") ? "winter" : ""




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
                      uri: `https://img.icons8.com/officel/512/${cde?.bookingSlot?.slot?.temperatureZone["@id"] === "/api/temperature_zones/3" ? "dry" : cde?.bookingSlot?.slot?.temperatureZone["@id"] === "/api/temperature_zones/2" ? "organic-food"  : (cde?.bookingSlot?.slot?.temperatureZone["@id"] === "/api/temperature_zones/1") ? "winter" : ""}.png`,
                    }}
                    style={{ width: 32, height: 32 }}
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
                      uri: `https://img.icons8.com/officel/512/${cde?.bookingSlot?.slot?.temperatureZone["@id"] === "/api/temperature_zones/3" ? "dry" : cde?.bookingSlot?.slot?.temperatureZone["@id"] === "/api/temperature_zones/2" ? "organic-food"  : (cde?.bookingSlot?.slot?.temperatureZone["@id"] === "/api/temperature_zones/1") ? "winter" : "?"}.png`,
                    }}
                    style={{ width: 32, height: 32 }}
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
