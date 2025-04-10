import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Cadastro from './(tabs)/cadastro_screen';
import EditarContato from './(tabs)/EditarContato';
import LoginScreen from './(tabs)/Login';
import NovoContato from './(tabs)/NovoContato';
import NewContactscreen from './(tabs)/NewContactscreen';
import contatos from './(tabs)/Contatos';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="NovoContato" component={NovoContato} />
      <Stack.Screen name="NC" component={NewContactscreen} />
      <Stack.Screen name="EditarContato" component={EditarContato} />
      <Stack.Screen name="Contatos" component={contatos} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
