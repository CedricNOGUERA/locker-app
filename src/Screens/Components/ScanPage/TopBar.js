import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import IconFont from "react-native-vector-icons/FontAwesome5";

const TopBar = ({ topBarData }) => {
  const { setSelectedOrder, selectedOrder } = topBarData;

  return (
    <View style={styles.searchCont}>
      <View style={styles.goBackButtom}>
        <TouchableOpacity
          onPress={() => {
            setSelectedOrder(null);
          }}
        >
          <Text>
            {" "}
            <IconFont
              name="arrow-circle-left"
              size={24}
              color="#00caed"
            ></IconFont>
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 65,
          paddingHorizontal: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            # {selectedOrder.id}
          </Text>
        </View>

        <View style={styles.iconOrder}>
          {selectedOrder?.temp?.map((temps) => (
            <Image
              key={Math.random()}
              source={{
                uri: `https://img.icons8.com/officel/512/${temps.icon}.png`,
              }}
              style={{ width: 24, height: 24 }}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchCont: {
    flexDirection: "row",
    backgroundColor: "#898989",
    borderRadius: 50,
    height: 40,
    marginBottom: 20,
    marginHorizontal: 15,
    paddingVertical: 5,
  },
  goBackButtom: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
    marginRight: 15,
  },
  iconOrder: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    paddingHorizontal: 8,
  },
});

export default TopBar;
