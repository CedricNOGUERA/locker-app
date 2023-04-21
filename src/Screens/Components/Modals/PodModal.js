import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const PodModal = ({ podModalData }) => {
  const { modalVisible, setModalVisible, deliveryPoint, setSelectedStore, bookingLocker, setSelectedOrderCity, } =
    podModalData;

  return (
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
            <Text style={styles.title}>Sélectionnez un point de livraison</Text>
          </View>
          {bookingLocker?.map((pos) => (
            <TouchableOpacity
              key={Math.random()}
              style={styles.buttonModal}
              onPress={() => {
                setModalVisible(!modalVisible);
                setSelectedOrderCity(`${pos.city}`);
              }}
            >
              <Text style={styles.textModal}>{pos?.location}</Text>
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
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  title: {
    color: "#787878",
    backgroundColor: "white",
    marginHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    textAlign: "center",
    fontWeight: "900",
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

export default PodModal;
