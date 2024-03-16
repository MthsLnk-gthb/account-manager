import Home from '@/screens/Home';
import WelcomePage from '@/screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

const Stack = createStackNavigator();

type StackNavigation = {
  Welcome: undefined
  Login: undefined;
  Cadastro: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export default function StackComponent() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomePage}/>
          <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}