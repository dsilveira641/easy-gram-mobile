import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login';
import ListGrupos from './features/grupos/grupos-list';
import GruposScreen from './cadastro_screen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={GruposScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;