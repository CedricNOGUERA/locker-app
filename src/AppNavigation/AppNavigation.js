import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home/Home';
import Note from '../Screens/Note/Note';
import CreateNote from '../Screens/CreateNote/CreateNote';

const Stack = createNativeStackNavigator();

export default function AppNavigation({ AppStates }) {

 

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {(props) => <Home {...props} AppStates={AppStates} />}
        </Stack.Screen>

        <Stack.Screen name="Note" options={{headerShown: false}}>
          {(props) => <Note {...props} AppStates={AppStates} />}
        </Stack.Screen>

        <Stack.Screen name="CreateNote" options={{headerShown: false}}>
          {(props) => <CreateNote {...props} AppStates={AppStates} />}
        </Stack.Screen>
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
