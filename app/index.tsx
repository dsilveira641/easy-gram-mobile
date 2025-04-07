import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Cadastro from './(tabs)/cadastro_screen';
import EditarContato from './(tabs)/EditarContato';
import LoginScreen from './(tabs)/Login';
import NovoContato from './(tabs)/NovoContato';
import Testes from './(tabs)/Teste';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="NovoContato" component={NovoContato} />
      <Stack.Screen name="EditarContato" component={EditarContato} />
      <Stack.Screen name="Teste" component={Testes} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
