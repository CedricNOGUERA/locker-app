import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Modal,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GlobalFooter from "../../Footer/GlobalFooter";
import GlobalHeader from "../../Header/GlobalHeader";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/AntDesign";
import { useState } from "react";
import IconFont from "react-native-vector-icons/FontAwesome5";

export default function Note({ navigation, AppStates }) {
  const { allNotes, setNote, commandes, selectedStore, setSelectedStore } =
    AppStates;

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderFilterByRegex, setOrderFilterByRegex] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = (note) => {
    console.log(note);
    setNote(note);
    navigation.navigate("Note");
  };

  const orderfilterByStore = commandes?.filter(
    (cde) => cde.location === selectedStore && cde.status === "toRetrieve"
  );

 
  const _searchWithRegex = (searchOrder, orderfilterByStore, setOrderFilterByRegex ) => {
    function escapeRegExp(str) {
      return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    const escapedSearchOrder = escapeRegExp(searchOrder);
    console.log(orderfilterByStore.filter((order) => {
      if (escapedSearchOrder.length > 2) {
        return order.orderNum?.match(new RegExp(escapedSearchOrder, "i"));
      }
      return undefined;
      
      
    }))
    setOrderFilterByRegex(orderfilterByStore.filter((order) => {
      if (escapedSearchOrder.length > 2) {
        return order.orderNum?.match(new RegExp(escapedSearchOrder, "i"));
      }
      return undefined;
      
      
    }))
  }

  return (
    <View style={styles.screen}>
      <GlobalHeader tilteHeader={"Commande à récupérer"} />

      <StatusBar style="light" animation={true} backgroundColor={"#a9a9a9"} />

      <View style={styles.body}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#898989",
            borderRadius: 50,
            height: 40,
            marginBottom: 20,
            marginHorizontal: 15,
            paddingVertical: 5,
          }}
        >
          <View style={{ flex: 1 }}>
            <TextInput
              style={{
                height: 30,
                marginLeft: 5,
                borderRadius: 50,
                backgroundColor: "white",
              }}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder=" N°Commandesss"
              keyboardType="ascii-capable"
            />
          </View>
          <View
            style={{
              flex: 0.7,
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 15,
            }}
          >
            <View>
              <Text>
                {" "}
                <IconFont name="store" size={16} color="#00caed"></IconFont>
              </Text>
            </View>
            <View
              style={{
                paddingLeft: 20,
                width: 150,
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Text
                  style={{
                    color: "#fff",
                    justifyContent: "flex-end",
                    alignItem: "center",
                  }}
                >
                  {" "}
                  {selectedStore}{" "}
                  <IconFont
                    name="chevron-down"
                    size={8}
                    color="#fff"
                  ></IconFont>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView>
          {selectedOrder === null ? (
            orderfilterByStore?.map((cde, indx) => {
              return (
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
                  <TouchableOpacity onPress={() => setSelectedOrder(cde)}>
                    <Text style={{ marginLeft: 20, height: 24 }}>
                      <Icon name="qrcode" size={24} color="#5d5d5d"></Icon>
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })
          ) : (
            <View style={styles.orderCont}>
              <View style={{ flexDirection: "row" }}>
                {selectedOrder[0]?.temp?.map((temps) => (
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
                {selectedOrder[0]?.orderNum}
              </Text>
              <TouchableOpacity
                onPress={() => setSelectedOrder(selectedOrder[0]?.orderNum)}
              >
                <Text style={{ marginLeft: 20, height: 24 }}>
                  <Icon name="qrcode" size={24} color="#5d5d5d"></Icon>
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </View>
      <Modal
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
            <TouchableOpacity
              style={styles.buttonModal}
              onPress={() => {
                setModalVisible(!modalVisible);
                setSelectedStore("Punaauia");
              }}
            >
              <Text style={styles.textModal}>Punaauia</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonModal}
              onPress={() => {
                setModalVisible(!modalVisible);
                setSelectedStore("Arue");
              }}
            >
              <Text style={styles.textModal}>Arue</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonModal}
              onPress={() => {
                setModalVisible(!modalVisible);
                setSelectedStore("Faa'a");
              }}
            >
              <Text style={styles.textModal}>Faa'a</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonModal}
              onPress={() => {
                setModalVisible(!modalVisible);
                setSelectedStore("Taravao");
              }}
            >
              <Text style={styles.textModal}>Taravao</Text>
            </TouchableOpacity>

            <Pressable
              style={[
                { marginTop: 35 },
                styles.button,
                styles.buttonClose,
                styles.modalText,
              ]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Annuler</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <GlobalFooter AppStates={AppStates} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  orderCont: {
    flexDirection: "row",
    height: 50,
    margin: 15,
    marginTop: 0,
    padding: 20,
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
  body: {
    flex: 8,
    width: "100%",
    paddingTop: 15,
    overFlowy: "auto",
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
    backgroundColor: "#fff",
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
    elevation: 7,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#3c74a7",
    color: "#fff",
    fontWeight: "bold",
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
    width: "100%",
    textAlign: "center",
  },
  buttonModal: {
    width: "100%",
    backgroundColor: "#3c74a7",
    borderRadius: 20,
    marginBottom: 15,
    padding: 10,
  },
  textModal: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});
