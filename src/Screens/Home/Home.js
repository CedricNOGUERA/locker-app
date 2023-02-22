import {
  Animated,
  Easing,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Modal,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GlobalFooter from "../../Footer/GlobalFooter";
import GlobalHeader from "../../Header/GlobalHeader";
import Icon from "react-native-vector-icons/AntDesign";
import { useState, useEffect } from "react";
import IconFont from "react-native-vector-icons/FontAwesome5";
import QRCode from 'react-native-qrcode-svg';
import Searchbar from "../Components/Searchbar/Searchbar";

export default function Home({ navigation, AppStates }) {
  const {
    selectedStore,
    setSelectedStore,
    deliveryPoint,
    orderData, setOrderData
  } = AppStates;

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalQrcodeVisible, setModalQrcodeVisible] = useState(false);
  const [searchOrder, setSearchOrder] = useState("");
  const [orderFilterByRegex, setOrderFilterByRegex] = useState([]);
  const [orderFilterByStore, setOrderFilterByStore] = useState([]);




  const handleSearch = (text) => {
       setSearchOrder(text);
     }




  const orderfilterByStore = orderData?.filter(
    (cde) => cde.location === selectedStore && cde.status === "inProgress"
  );


 
  

  
  
  
  let regex;
  if (searchOrder?.length >= 3) {
    const escapedSearchOrder = searchOrder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    regex = new RegExp(`\\b${escapedSearchOrder}\\b`, 'i');
  }

  const filteredData = orderfilterByStore.filter((item) => {
    if (regex) {
      return regex.test(item.orderNum);
    } else {
      return true;
    }
  });
  
  const handleShowPosModal = () => {
    setSearchOrder("");
    setModalVisible(!modalVisible);
  }
  
  const searchbarData = {handleShowPosModal, handleSearch, searchOrder, setSearchOrder, setModalVisible, modalVisible, selectedStore }

  return (
    <View style={styles.screen}>
      <GlobalHeader tilteHeader={"Commande en cours"} />
      <StatusBar style="light" animation={true} backgroundColor={"#a9a9a9"} />

      <View style={styles.body}>
        {!selectedOrder && selectedOrder === null ? (
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
                <View>
                  <Text
                    style={{
                      flex: 1,
                      width: 140,
                      height: 140,
                      marginLeft: "19%",
                    }}
                  >
                    <Image
                      source={require("../../assets/images/no-order.png")}
                      style={{ resizeMode: "contain", width: 240, height: 240 }}
                    />
                  </Text>
                  <Text style={{ textAlign: "center", marginTop: 70 }}>
                    Aucune commande trouvée
                  </Text>
                </View>
              ) : (
                orderfilterByStore?.map((cde, indx) => (
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
              )
            ) : (
              <View>
                <Text>Rien</Text>
              </View>
            )}
          </ScrollView>
        ) : (
          <ScrollView>
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
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 5,
                  marginRight: 15,
                }}
              >
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
                  flexDirection: "row",
                }}
              >
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
              <View
                style={{
                  flex: 10,
                  paddingLeft: 20,
                  width: 150,
                  justifyContent: "center",
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
            </View>
            <View
              style={{
                flex: 1,
                marginHorizontal: 15,
                paddingVertical: 5,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#c00",
                  fontWeight: "bold",
                }}
              >
                Haut du qrcode
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "50%",
                  marginLeft: "25%",
                  justifyContent: "space-around",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  <IconFont name="arrow-up" size={24} color="#c00"></IconFont>
                </Text>

                <Text>
                  <IconFont name="arrow-up" size={24} color="#c00"></IconFont>
                </Text>

                <Text>
                  <IconFont name="arrow-up" size={24} color="#c00"></IconFont>
                </Text>
              </View>
              <View style={{ padding: "5%" }}>
                <QRCode value={selectedOrder.orderNum} size={320} />
              </View>
              <View>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#c00",
                    fontWeight: "bold",
                  }}
                >
                  Respectez le sens du qrcode lors du scan
                </Text>
              </View>
            </View>
            <View
              style={{
                // flexDirection: "row",
                backgroundColor: "#898989",
                borderRadius: 50,
                height: 50,
                marginBottom: 20,
                marginHorizontal: 15,
                paddingVertical: 5,
              }}
            >
              <Text style={{ color: "#fff", textAlign: "center" }}>
                Saisie manuelle du qrcode
              </Text>
              <Text
                style={{
                  color: "#00caed",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {selectedOrder.orderNum}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
      <Modal
        style={styles.centeredView2}
        animationType="slide"
        transparent={true}
        visible={modalQrcodeVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalQrcodeVisible(!modalQrcodeVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {deliveryPoint?.map((pos) => (
              <TouchableOpacity
                key={pos.id}
                style={styles.buttonModal}
                onPress={() => {
                  setModalQrcodeVisible(!modalQrcodeVisible);
                  setSelectedStore(`${pos.name}`);
                }}
              >
                <Text style={styles.textModal}>{pos.name}</Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={[
                { marginTop: 35 },
                styles.button,
                styles.buttonClose,
                styles.modalText,
              ]}
              onPress={() => setModalQrcodeVisible(!modalQrcodeVisible)}
            >
              <Text style={styles.textStyle}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
            <View>
              <Text
                style={{
                  color: "#42a1f5",
                  backgroundColor: "white",
                  marginHorizontal: 20,
                  paddingVertical: 20,
                  borderRadius: 10,
                  // width: '80%',
                  textAlign: "center",
                }}
              >
                Sélectionnez un point de livraison
              </Text>
            </View>
            {deliveryPoint?.map((pos) => (
              <TouchableOpacity
                key={pos.id}
                style={styles.buttonModal}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setSelectedStore(`${pos.name}`);
                }}
              >
                <Text style={styles.textModal}>{pos.name}</Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={[
                { marginTop: 35 },
                styles.button,
                styles.buttonClose,
                styles.modalText,
              ]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Annuler</Text>
            </TouchableOpacity>
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

  centeredView2: {
    // flex: 1,
    width: '100%',
    justifyContent: "center",
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
    // borderBottomWidth:1,
    // borderBottomColor: '#a5a5a5',
  },
  buttonModal: {
    width: "100%",
    height: 45,
    backgroundColor: "#3c74a7",
    borderRadius: 20,
    marginBottom: 25,
    padding: 10,
  },
  textModal: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});
