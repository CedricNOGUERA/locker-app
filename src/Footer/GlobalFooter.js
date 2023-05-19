import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconMatCom from "react-native-vector-icons/MaterialCommunityIcons";
import IconFeat from "react-native-vector-icons/Feather";
import IconAntD from "react-native-vector-icons/AntDesign";
import IconFont from "react-native-vector-icons/FontAwesome5";
import React from "react";
import QRCode from "react-native-qrcode-svg";

export default function GlobalFooter({ navigation, AppStates, test, filteredUserData }) {

  const {orderData, selectedStore} = AppStates


  // const retrieve = orderData?.filter((order) => order.status === "toRetrieve" && order.location === selectedStore)
  // const delivered = orderData?.filter((order) => order.status === "delivered" && order.location === selectedStore)
  
  const progress = test["hydra:member"] && test["hydra:member"]?.filter((order) => order.status === "created" && order.bookingSlot.slot.temperatureZone.locker.location === selectedStore)
  const delivered = test["hydra:member"] && test["hydra:member"]?.filter((order) => order.status === "operin" && order.bookingSlot.slot.temperatureZone.locker.location === selectedStore)
  const retrieve = test["hydra:member"] && test["hydra:member"]?.filter((order) => order.status === "overtime" && order.bookingSlot.slot.temperatureZone.locker.location === selectedStore)
  const [modalAuthVisible, setModalAuthVisible] = React.useState(false)

  return (
    <View style={styles.footerCont}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.itemFooter}
      >
        <Text>
          {" "}
          <IconMatCom name="home" size={35} color="#00caed"></IconMatCom>
        </Text>
        <Text style={styles.textItems}>Accueil</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.itemFooter}
      >
        <Text>
          {" "}
          <IconMatCom name="truck-fast" size={31} color="#00caed"></IconMatCom>
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
        <Text style={styles.textItems}>A livrer</Text>
      </TouchableOpacity>
    
      <TouchableOpacity
        onPress={() => navigation.navigate("NewOrder")}
        style={styles.itemFooter}
      >
        <Text style={styles.itemFooterN}   onPress={() => navigation.navigate("NewOrder")}>
          {" "}
          <IconAntD name="pluscircle" size={70} color="#00caed" ></IconAntD>
         
        </Text>
        <Text style={styles.textItems}></Text>
      </TouchableOpacity>
    
      <TouchableOpacity
        onPress={() => navigation?.navigate("ToRetrieve")}
        style={styles.itemFooter}
      >
        <Text>
          <IconEntypo name="upload" size={31} color="#00caed"></IconEntypo>
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
      <TouchableOpacity
        onPress={() => setModalAuthVisible(true)}
        style={styles.itemFooter}
      >
        <Text>
          {" "}
          <IconFeat name="user" size={35} color="#00caed"></IconFeat>
         
        </Text>
        <Text style={styles.textItems}>Auth</Text>
      </TouchableOpacity>
      <Modal
        style={{
          borderWidth: 1,
        }}
        animationType='slide'
        transparent={true}
        visible={modalAuthVisible}
        onRequestClose={() => {
          setModalAuthVisible(!modalAuthVisible)
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgrounColor: '#a1a1a1',
            marginTop: 22,
          }}
        >
          <View style={styles.modalAuth}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',

                marginBottom: 5,
              }}
            >
              <Text style={styles.modalText}>
                Authentification de {filteredUserData?.firstName}
              </Text>
              <TouchableOpacity
                style={[styles.butto, styles.buttonCance]}
                onPress={() => setModalAuthVisible(false)}
              >
                <Text style={{ fontSize: 20, color: '#fff' }}>
                  <IconFeat name='x-circle' size={24} color='#fff'></IconFeat>
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 0.5,
                marginHorizontal: 15,
                paddingVertical: 0,
              }}
            >
              <Text style={styles?.qrcodeDirection}>Haut du qrcode</Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '50%',
                  marginHorizontal: '25%',
                  marginBottom: 20,
                  textAlign: 'center',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                <Text>
                  {' '}
                  <IconFont name='arrow-up' size={24} color='#db2d02'></IconFont>
                </Text>

                <Text>
                  <IconFont name='arrow-up' size={24} color='#db2d02'></IconFont>
                </Text>

                <Text>
                  <IconFont name='arrow-up' size={24} color='#db2d02'></IconFont>
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 25,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setSelectedOrder(null)
                    // updateStatus(selectedOrder?.id)
                  }}
                >
                  <QRCode value={`${filteredUserData?.id}`} size={280} />
                </TouchableOpacity>
              </View>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#db9302',
                    fontWeight: 'bold',
                    marginTop: 15,
                  }}
                >
                  Respectez le sens du qrcode lors du scan
                </Text>
                <View style={styles.maunalEntry}>
                  <Text style={{ color: '#fff', textAlign: 'center' }}>
                    Saisie manuelle du qrcode
                  </Text>
                  <Text
                    style={{
                      color: '#00caed',
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}
                  >
                    {filteredUserData?.id}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
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
    width:'20%',
  },
  itemFooterN: {
    alignItems: "center",
    // width:"20%",
    position: "absolute",
    // right: "50%",
    bottom: 28,
    // marginBottom: 15,
  },
  badge: {
    fontSize: 10,
    fontWeight: '300',
    color: "#fff",
  },
  textItems: {
    color: "white", 
    fontSize: 12
  },
  modalAuth: {
    width: '100%',
    height: '80%',
    margin: 20,
    backgroundColor: 'gray',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    color: '#00caed',
    fontWeight: 'bold',
  },
  qrcodeDirection: {
    textAlign: 'center',
    color: '#db2d02',
    fontWeight: 'bold',
  },
  maunalEntry: {
    backgroundColor: '#898989',
    borderRadius: 50,
    height: 50,
    marginVertical: 20,
    marginHorizontal: 15,
    paddingVertical: 5,
  },
});
