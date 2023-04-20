import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native'


const LogoutModal = ({modalLogoutVisible, setModalLogoutVisible, setIsLogged }) => {
  return (
    <Modal
    style={{
      borderWidth: 1,
    }}
    animationType='slide'
    transparent={true}
    visible={modalLogoutVisible}
    onRequestClose={() => {
        setModalLogoutVisible(!modalLogoutVisible)
    }}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Voulez-vous vous déconnecter ?</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '80%',
          }}
        >
          <TouchableOpacity
            style={[styles.button, styles.buttonCancel]}
            onPress={() => setModalLogoutVisible(!modalLogoutVisible)}
          >
            <Text style={styles.textStyle}>Annuler</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonConfirm]}
            onPress={() => {
              setIsLogged(false)
              setModalLogoutVisible(!modalLogoutVisible)
            }}
          >
            <Text style={styles.textStyle}>Confirmer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
  )
}

const styles = StyleSheet.create({
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
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    color: '#00caed',
    fontWeight: 'bold',
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
})




export default LogoutModal
