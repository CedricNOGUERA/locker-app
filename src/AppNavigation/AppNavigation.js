import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home/Home';
import ToRetrieve from '../Screens/ToRetrieve/ToRetrieve';
import Delivered from '../Screens/Delivered/Delivered';
import Auth from '../Screens/Auth/Auth';
import NewOrder from '../Screens/newOrder/NewOrder';
import DashBoard from '../Screens/DashBoard/DashBoard';

const Stack = createNativeStackNavigator();

export default function AppNavigation({ AppStates }) {

 

  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen name="Auth" options={{headerShown: false}}>
          {(props) => <Auth {...props} AppStates={AppStates} />}
        </Stack.Screen>
        
        <Stack.Screen name="DashBoard" options={{headerShown: false}}>
          {(props) => <DashBoard {...props} AppStates={AppStates} />}
        </Stack.Screen>
        
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {(props) => <Home {...props} AppStates={AppStates} />}
        </Stack.Screen>

        <Stack.Screen name="ToRetrieve" options={{headerShown: false}}>
          {(props) => <ToRetrieve {...props} AppStates={AppStates} />}
        </Stack.Screen>
        <Stack.Screen name="Delivered" options={{headerShown: false}}>
          {(props) => <Delivered {...props} AppStates={AppStates} />}
        </Stack.Screen>
        <Stack.Screen name="NewOrder" options={{headerShown: false}}>
          {(props) => <NewOrder {...props} AppStates={AppStates} />}
        </Stack.Screen>

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
