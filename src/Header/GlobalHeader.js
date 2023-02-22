import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'



export default function GlobalHeader({ navigation, AppStates, tilteHeader }) {



  return (
    <View style={styles.headerCont}>
      <View style={styles.rightBlock}>
        <Text style={{ padding: 0 }}>
          <Icon name="ios-rocket" size={32} color="#00caed"></Icon>
        </Text>
        <Text style={{ color: "white" }}>{tilteHeader}</Text>
      </View>
      <Text style={{ paddingHorizontal: 25, color: "white" }}>Log out</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerCont: {
    flex: 1,
    flexDirection: "row", 
    backgroundColor: "#a1a1a1",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  rightBlock: {
    flex: 2,
    flexDirection: "row",
    height: 50,
    borderRightWidth: 1,
    borderRightColor: "#fff",
    paddingLeft: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
});