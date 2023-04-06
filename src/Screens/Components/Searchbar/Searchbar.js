import React from 'react'
import { TextInput, TouchableOpacity, View , Text, StyleSheet} from 'react-native';
import IconFont from "react-native-vector-icons/FontAwesome5";


const Searchbar = ({searchbarData}) => {

  const {handleShowPodModal, searchOrder, selectedStore, handleSearch } = searchbarData

  return (
    <View style={styles.searchCont}>
      <View style={{ flex: 1 }}>
        <TextInput
          style={styles.Input}
          onChangeText={handleSearch}
          value={searchOrder}
          placeholder=" N° Commande"
          keyboardType="ascii-capable"
        />
      </View>
      <View style={{ flex: 0.1 }}></View>
      
      <TouchableOpacity style={styles.storeSelecter} onPress={() => {
              handleShowPodModal();
            }}>
        <View>
          <Text>
            <IconFont name="store" size={16} color="#00caed"></IconFont>
          </Text>
        </View>
        <View>
            <Text
              style={{
                color: "#595959",
                textAlign: "right",
              }}
            >
              {" "}
              {selectedStore}{" "}
              <IconFont name="chevron-down" size={8} color="#595959"></IconFont>
            </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
searchCont: {
  flexDirection: "row",
  backgroundColor: "#898989",
  borderRadius: 50,
  height: 40,
  marginBottom: 20,
  marginHorizontal: 15,
  paddingVertical: 5,
},
Input: {
  height: 30,
  marginLeft: 5,
  paddingLeft: 10,
  borderRadius: 50,
  backgroundColor: "white",
},
storeSelecter: {
  flex: 0.6,
  flexDirection: "row",
  borderRadius: 50,
  backgroundColor: '#fff',
  justifyContent: 'space-around',
  alignItems: "center",
  padding: 5,
  marginRight: 5,
  marginLetf: 15,
}





});



export default Searchbar