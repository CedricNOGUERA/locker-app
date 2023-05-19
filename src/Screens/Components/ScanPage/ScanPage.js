import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import IconFont from "react-native-vector-icons/FontAwesome5";
import TopBar from "./TopBar";

const ScanPage = ({ scanPageData }) => {
  const { updateStatus, setSelectedOrder, selectedOrder } = scanPageData;

  const topBarData = { setSelectedOrder, selectedOrder };


  return (
    <>

    <TopBar topBarData={topBarData} msg={"Présenter le QrCode au lockery"} />
    <ScrollView>

      <View
        style={{
          flex: 1,
          marginHorizontal: 15,
          paddingVertical: 5,
        }}
      >
        <Text style={styles.qrcodeDirection}>Haut du qrcode</Text>
        <View
          style={{
            flexDirection: "row",
            width: "50%",
            marginHorizontal: "25%",
            textAlign: 'center',
            justifyContent: "space-around",
            alignItems: 'center'
          }}
        >
          <Text>
            {" "}
            <IconFont name="arrow-up" size={24} color="#db2d02"></IconFont>
          </Text>

          <Text>
            <IconFont name="arrow-up" size={24} color="#db2d02"></IconFont>
          </Text>

          <Text>
            <IconFont name="arrow-up" size={24} color="#db2d02"></IconFont>
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => {
             setSelectedOrder(null)
            updateStatus(selectedOrder?.id)}}
            style={{ alignItems: 'center', justifyContent: 'center',
            paddingVertical: 25,
            }}
            >
            <QRCode value={selectedOrder.barcode} size={320}   />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              textAlign: "center",
              color: "#db9302",
              fontWeight: "bold",
            }}
          >
            Respectez le sens du qrcode lors du scan
          </Text>
        </View>
      </View>
      <View style={styles.maunalEntry}>
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
          {selectedOrder.barcode}
        </Text>
      </View>
    </ScrollView>
    </>

  );
};

const styles = StyleSheet.create({
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
});

export default ScanPage;
