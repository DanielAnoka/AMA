import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';
import HomePage from './screens/Home'
import ScanScreen from './screens/ScanScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp"  component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home"  component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="ScanScreen" component={ScanScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;