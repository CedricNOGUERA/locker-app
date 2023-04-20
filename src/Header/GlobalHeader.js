import { Text, View, StyleSheet, TouchableOpacity, Image, Modal } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import IconFont from "react-native-vector-icons/FontAwesome5";
import { useState, useEffect } from "react";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";


export default function GlobalHeader({ headerData, tilteHeader }) {
  const { navigation, isLogged, setIsLogged, filteredUserData, setFilteredUserData } = headerData;

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (isLogged === false) {
      navigation.navigate("Auth");
    }
  }, []);

  return (
    <View style={styles.headerCont}>
      <View style={styles.leftBlock}>
        <Text style={{ marginHorizontal: 10, padding: 0 }}>
          <IconMCI name="truck-fast-outline" size={24} color="#00caed" />
        </Text>
        <Text
          style={{
            textAlign: "left",
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {tilteHeader}
        </Text>
      </View>

      <TouchableOpacity
        style={{ flexDirection: "row", marginLeft: 10, alignItems: "center" }}
        onPress={() => setModalVisible(true)}
      >
        <View>
          <Image
            source={require("../assets/images/farerata.png")}
            style={{ resizeMode: "contain", width: 32, height: 32 }}
          />
        </View>
        <Text style={{ paddingHorizontal: 25, color: "white" }}>{filteredUserData.firstName}</Text>
      </TouchableOpacity>
      
      <Modal
        style={{
          borderWidth: 1,
        }}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Voulez-vous vous déconnecter ?</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                width: "80%",
              }}
            >
              <TouchableOpacity
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Annuler</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setIsLogged(false);
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Confirmer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  leftBlock: {
    flex: 1,
    flexDirection: "row",
    height: 50,
    borderRightWidth: 1,
    borderRightColor: "#fff",
    paddingLeft: 10,
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "80%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#FFC300",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
