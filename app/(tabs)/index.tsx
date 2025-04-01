import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;