import React, { useEffect, useState } from 'react'
import {
  Image,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'
import IconAntd from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AsyncStorage } from 'react-native'
import AuthService from '../../services/Auth/AuthService'
import UserService from '../../services/UserService'
import { StatusBar } from 'expo-status-bar'

const Auth = ({ navigation, AppStates }) => {
  const { setFilteredUserData, filteredUserData, setIsLogged,token, setToken } = AppStates

  
  const [usersData, setUsersData] = useState([])
  const [userName, setUserName] = useState('')
  const [pass, setPass] = useState('')
  // const [token, setToken] = useState('')
  const [isError, setIsError] = useState(false)
  const [isLoadingAuth, setIsLoadingAuth] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (token && token?.length > 0) {
      setUserName('')
      setPass('')
      getMyData(token)
      setIsLogged(true)
      navigation.navigate('Home')

    }
  }, [token])


  const onChangeEmail = (text) => {
    setUserName(text)
  }
  const onChangePass = (text) => {
    setPass(text)
  }

  async function storeData(value) {
    try {
      await AsyncStorage.setItem('key', value)
      console.log('object')
    } catch (error) {
      console.log(error)
    }
  }
  const getMyData = () =>{
    UserService.me(token).then((response) => {
      setFilteredUserData(response.data)
    })

  }

  const authentification = () => {
    setIsLoadingAuth(true)
    AuthService.login(
      userName,
      pass,
      setToken,
      setIsError,
      // setMsgError,
      setIsLoadingAuth,
      // setCodeError
    )



    // if (Array.isArray(usersData)) {
    //   const filterUser = usersData?.filter(
    //     (user) => user?.username === userName && user?.pass === pass
    //   )

    //   if (filterUser && filterUser.length > 0) {
    //     setIsLogged(true)
    //     setIsError(false)
    //     setFilteredUserData(filterUser)
    //     storeData(filterUser)
    //     setUserName('')
    //     setPass('')
    //     navigation.navigate('Home')
    //   } else {
    //     setIsError(true)
    //     setIsLogged(false)
    //   }
    // } else {
    //   alert('c la hesss : ' + usersData.id)
    // }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.screen}
    >
      <StatusBar style='light' animation={true} backgroundColor={'#a5a5a5'} />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={{ width: 500, height: '100%' }}>
          <View style={styles.screen}>
            <View style={styles.container}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* <IconMCI name='truck-fast-outline' size={100} color='#fff' /> */}
                <Image
                  source={require('../../assets/images/logo512.png')}
                  style={{ resizeMode: 'contain', width: 100, height: 100 }}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 50,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}
                >
                  Locker
                </Text>
              </View>
              <View style={{ flex: 2, width: 320, marginTop: 25 }}>
                <View style={{ flexDirection: 'row', marginBottom: 25 }}>
                  <View
                    style={{
                      backgroundColor: '#b6b6b6',
                      height: 40,
                      padding: 5,
                    }}
                  >
                    <IconAntd name='user' size={28} color='#fff' />
                  </View>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={userName}
                    placeholder='Pseudo'
                    keyboardType='ascii-capable'
                  />
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                  <View
                    style={{
                      backgroundColor: '#b6b6b6',
                      height: 40,
                      padding: 5,
                    }}
                  >
                    <IconAntd name='lock1' size={28} color='#fff' />
                  </View>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangePass}
                    value={pass}
                    placeholder='Mot de passe'
                    keyboardType='ascii-capable'
                    secureTextEntry={isVisible}
                  />
                  <Ionicons
                    name={isVisible ? 'eye-sharp' : 'eye-off-sharp'}
                    size={28}
                    color='#b6b6b6'
                    style={{ position: 'absolute', right: 10, top: 5 }}
                    onPress={() => setIsVisible(!isVisible)}
                  />
                </View>

                {isError && (
                  <Text style={{ color: '#f00', width: 280 }}>
                    Vos données sont erronées, réessayez !!!
                  </Text>
                )}
                <TouchableOpacity style={styles.button} onPress={authentification}>
                  {isLoadingAuth ? (
                    <ActivityIndicator size="large" color='#fff' style={{fontSize: 28 }}/>
                  ) : (
                    <Text style={{ color: '#fff', fontSize: 28, fontWeight: 'bold' }}>
                      Valider
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'ios' ? '10%' : '15%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a5a5a5',
  },
  container: {
    // flex: 0.6,
    width: '80%',
    // backgroundColor: '#c9c9c9',
    backgroundColor: '#a5a5a5',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 280,
    backgroundColor: '#fff',
    padding: 10,
  },
  button: {
    flexDirection: 'row',
    // height: 40,
    height: 50,
    marginTop: 60,
    marginBottom: 20,
    paddingBottom: 5,
    backgroundColor: '#00caed',
    
    padding: 10,
    borderRadius: 30,
    justifyContent:'center'
  }
})

export default Auth
