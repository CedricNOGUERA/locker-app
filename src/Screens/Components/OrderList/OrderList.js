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
    filteredData,
    setSelectedOrder,
    searchOrder,
  } = orderListData;

  return (
    <ScrollView>
      <Searchbar searchbarData={searchbarData} />

      {orderfilterByStore.length > 0 ? (
        filteredData.length > 0 ? (
          filteredData?.map((cde, indx) => (
            <View key={indx} style={styles.orderCont}>
              <View style={{ flexDirection: "row" }}>
                {cde?.temp?.map((temps) => (
                  <Image
                    key={Math.random()}
                    source={{
                      uri: `https://img.icons8.com/officel/512/${temps.icon}.png`,
                    }}
                    style={{ width: 32, height: 32 }}
                  />
                ))}
              </View>

              <Text style={{ marginLeft: 20, height: 24 }}>
                {cde?.orderNum}
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
          orderfilterByStore?.map((cde, indx) => (
            <View key={indx} style={styles.orderCont}>
              <View style={{ flexDirection: "row", width: 50 }}>
                {cde?.temp?.map((temps) => (
                  <Image
                    key={Math.random()}
                    source={{
                      uri: `https://img.icons8.com/color/512/${temps.icon}.png`,
                    }}
                    style={{ width: 32, height: 32 }}
                  />
                ))}
              </View>

              <Text
                style={{
                  textAlign: "center",
                  width: 150,
                  marginLeft: 20,
                  height: 24,
                }}
              >
                {cde?.orderNum}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setSelectedOrder(cde);
                }}
              >
                <Text style={{ marginLeft: 20, height: 25 }}>
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
