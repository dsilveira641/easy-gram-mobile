import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'; 1
import Contatos from '../(tabs)/Contatos';
import CriarConta from '../(tabs)/CriarConta';
import CriarContato from '../(tabs)/CriarContato';
import EditarContato from '../(tabs)/EditarContato';
import Login from '../(tabs)/Login';
import RecupSenha from '../(tabs)/RecupSenha';
import Configuracoes from '../(tabs)/configuacoes';

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Feather.glyphMap = 'circle';

          switch (route.name) {
            case 'Contatos':
              iconName = 'users';
              break;
            case 'CriarConta':
              iconName = 'user-plus';
              break;
            case 'CriarContato':
              iconName = 'user-check';
              break;
            case 'EditarContato':
              iconName = 'edit-3';
              break;
            case 'Login':
              iconName = 'log-in';
              break;
            case 'RecupSenha':
              iconName = 'unlock';
              break;
            case 'Configuracoes':
              iconName = 'settings';
              break;
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00C897',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Contatos" component={Contatos} />
      <Tab.Screen name="CriarConta" component={CriarConta} />
      <Tab.Screen name="CriarContato" component={CriarContato} />
      <Tab.Screen name="EditarContato" component={EditarContato} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="RecupSenha" component={RecupSenha} />
      <Tab.Screen name="Configuracoes" component={Configuracoes} />
    </Tab.Navigator>
  );
}
