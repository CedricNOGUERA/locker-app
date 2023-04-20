import { Text, View, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import IconFont from 'react-native-vector-icons/FontAwesome5'
import { useState, useEffect } from 'react'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import QRCode from 'react-native-qrcode-svg'
import LogoutModal from '../Screens/Components/Modals/LogoutModal'

export default function GlobalHeader({ headerData, tilteHeader }) {
  const { navigation, isLogged, setIsLogged, filteredUserData, setFilteredUserData, updateStatus, setSelectedOrder, selectedOrder } =
    headerData

  const [modalVisible, setModalVisible] = useState(false)
  const [modalLogoutVisible, setModalLogoutVisible] = useState(false)
  const [modalAuthVisible, setModalAuthVisible] = useState(false)
  const [selectedValue, setSelectedValue] = useState('option1')

  useEffect(() => {
    if (isLogged === false) {
      navigation.navigate('Auth')
    }
  }, [])

  return (
    <View style={styles.headerCont}>
      <View style={styles.leftBlock}>
        <Text style={{ marginHorizontal: 10, padding: 0 }}>
          <IconMCI name='truck-fast-outline' size={24} color='#00caed' />
        </Text>
        <Text
          style={{
            textAlign: 'left',
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
          {tilteHeader}
        </Text>
      </View>
      <TouchableOpacity
        style={{ flexDirection: 'row', marginLeft: 10, alignItems: 'center' }}
        onPress={() => setModalVisible(true)}
      >
        <View>
          <Image
            source={require('../assets/images/farerata.png')}
            style={{ resizeMode: 'contain', width: 32, height: 32 }}
          />
        </View>
        <Text style={{ paddingHorizontal: 25, color: 'white' }}>
          {filteredUserData.firstName}
        </Text>
      </TouchableOpacity>

      {/* Menu */}
      <Modal
        style={{
          borderWidth: 1,
        }}
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: 40,
              }}
            >
              <Text style={styles.modalText}>Cédric - Media Nui</Text>
              <TouchableOpacity
                style={[styles.butto, styles.buttonCance]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={{ fontSize: 20, color: '#fff' }}>
                  <Feather name='x-circle' size={24} color='#fff'></Feather>
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-around',
                width: '100%',
              }}
            >
              <Text
                style={{ marginBottom: 40, height: 24, fontSize: 20, color: '#fff' }}
                onPress={() => {
                  setModalAuthVisible(true)
                  setModalVisible(false)
                }}
              >
                <IconMCI name='qrcode' size={24} color='#fff'></IconMCI> identification
              </Text>
              <Text style={{ marginBottom: 120, height: 24, fontSize: 20, color: '#fff' }}>
                <IconMCI name='file-document-edit-outline' size={24} color='#fff'></IconMCI>{' '}
                Nouvelle commande
              </Text>
              <Text style={{ marginBottom: 20, height: 24, fontSize: 20, color: '#fff' }}>
                <TouchableOpacity
                  style={{ flexDirection: 'row', marginLeft: 10, alignItems: 'center' }}
                  onPress={() => {
                    setModalLogoutVisible(true)
                  }}
                >
                  <Text style={{ marginBottom: 20, height: 24, fontSize: 20, color: '#fff' }}>
                    <IconMCI name='logout' size={24} color='#fff'></IconMCI> Déconnexion
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
      </Modal>

      {/* Authentification */}
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

                marginBottom: 40,
              }}
            >
              <Text style={styles.modalText}>Authentification</Text>
              <TouchableOpacity
                style={[styles.butto, styles.buttonCance]}
                onPress={() => setModalAuthVisible(false)}
              >
                <Text style={{ fontSize: 20, color: '#fff' }}>
                  <Feather name='x-circle' size={24} color='#fff'></Feather>
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 0.5,
                marginHorizontal: 15,
                paddingVertical: 5,
              }}
            >
              <Text style={styles?.qrcodeDirection}>Haut du qrcode</Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '50%',
                  marginHorizontal: '25%',
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
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedOrder(null)
                    // updateStatus(selectedOrder?.id)
                  }}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 25,
                  }}
                >
                  <QRCode value={selectedOrder?.orderNum} size={220} />
                </TouchableOpacity>
              </View>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#db9302',
                    fontWeight: 'bold',
                  }}
                >
                  Respectez le sens du qrcode lors du scan
                </Text>
                <View
                 style={styles.maunalEntry}
                >
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
                    {selectedOrder?.orderNum}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* Confirm logout */}
      
      <LogoutModal modalLogoutVisible={modalLogoutVisible} setModalLogoutVisible={setModalLogoutVisible} setIsLogged={setIsLogged} />
    </View>
  )
}

const styles = StyleSheet.create({
  headerCont: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#a1a1a1',
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: '#000',
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
    flexDirection: 'row',
    height: 50,
    borderRightWidth: 1,
    borderRightColor: '#fff',
    paddingLeft: 10,
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgrounColor: '#a1a1a1',
    marginTop: 22,
  },
  modalView: {
    // flexDirection: "row",
    width: '80%',
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
  modalAuth: {
    width: '80%',
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
  qrcodeDirection: {
    textAlign: "center",
    color: "#db2d02",
    fontWeight: "bold",
  },
  maunalEntry: {
    
    backgroundColor: "#898989",
    borderRadius: 50,
    height: 50,
    marginVertical: 20,
    marginHorizontal: 15,
    paddingVertical: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonCancel: {
    backgroundColor: '#FFC300',
  },
  buttonConfirm: {
    backgroundColor: '#00caed',
    // backgroundColor: "#2196F3",
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    color: '#00caed',
    fontWeight: 'bold',
  },
})
