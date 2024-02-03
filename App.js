import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp"  component={SignUpScreen} options={{ headerShown: false }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;