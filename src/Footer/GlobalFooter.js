import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import IconEntypo from "react-native-vector-icons/Entypo";

export default function GlobalFooter({ navigation, AppStates }) {

  const {orderData, selectedStore} = AppStates


  const retrieve = orderData?.filter((order) => order.status === "toRetrieve" && order.location === selectedStore)
  const progress = orderData?.filter((order) => order.status === "inProgress" && order.location === selectedStore)
  const delivered = orderData?.filter((order) => order.status === "delivered" && order.location === selectedStore)


  return (
    <View style={styles.footerCont}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.itemFooter}
      >
        <Text>
          {" "}
          <IconEntypo name="clipboard" size={24} color="#00caed"></IconEntypo>
          {progress?.length > 0 && (
            <View
              style={{
                backgroundColor: "#f00",
                borderRadius: 50,
                paddingHorizontal: 5,
              }}
            >
              <Text style={styles.badge}>{progress?.length}</Text>
            </View>
          )}
        </Text>
        <Text style={styles.textItems}>En cours</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation?.navigate("Delivered")}
        style={styles.itemFooter}
      >
        <Text>
          <IconEntypo name="download" size={24} color="#00caed"></IconEntypo>
          {delivered?.length > 0 && (
            <View
              style={{
                backgroundColor: "#f00",
                borderRadius: 50,
                paddingHorizontal: 5,
              }}
            >
              <Text style={styles.badge}>{delivered?.length}</Text>
            </View>
          )}
        </Text>
        <Text style={styles.textItems}>Déposées</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation?.navigate("ToRetrieve")}
        style={styles.itemFooter}
      >
        <Text>
          <IconEntypo name="upload" size={24} color="#00caed"></IconEntypo>
          {retrieve?.length > 0 && (
            <View
              style={{
                backgroundColor: "#f00",
                borderRadius: 50,
                paddingHorizontal: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "300",
                  color: "#fff",
                }}
              >
                {retrieve?.length}
              </Text>
            </View>
          )}
        </Text>

        <Text style={{ color: "white", fontSize: 12, }}>A récupérer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footerCont: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#898989",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#a0a0a0",
    // paddingLeft: 20
    paddingHorizontal: 15,
  },
  itemFooter: {
    alignItems: "center",
  },
  badge: {
    fontSize: 10,
    fontWeight: '300',
    color: "#fff",
  },
  textItems: {
    color: "white", 
    fontSize: 12
  }
});
