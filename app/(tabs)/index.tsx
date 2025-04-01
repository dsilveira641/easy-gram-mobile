import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ContactsScreen from './NovoContato';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={ContactsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;