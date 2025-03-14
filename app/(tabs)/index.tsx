import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login';
import cadastro from './cadastro_screen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="cadastro_screen" component={cadastro} />

    </Stack.Navigator>
  );
};

export default AppNavigator;