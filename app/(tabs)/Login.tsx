import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image
} from 'react-native';
import SideBar from '../../components/sideBar'; // Importe o SideBar
import styles from '../styles/login-style'; // Importe o arquivo de estilos
import { useNavigation } from 'expo-router';
import api from '../../services/api'; // importa o serviço que criamos
import { Alert } from 'react-native'; // para exibir alertas
import { useRouter } from 'expo-router';

const router = useRouter();

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false); // Estado para controlar a visibilidade do menu
  const navigation = useNavigation<{ navigate: (screen: string) => void }>();

  const handleLogin = async () => {
    try {
      const response = await api.post('/auth/login', {
        email: email,
        senha: senha,
      });
  
      if (response.data && response.data.token) {
        Alert.alert('Login realizado com sucesso!');
        router.push('../../(tabs)/Contatos'); // Redirecionando para a rota correta
      } else {
        Alert.alert('Erro', 'Não foi possível autenticar. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro na requisição de login:', error);
      Alert.alert('Erro', 'E-mail ou senha inválidos');
    }
  };
  

  return (
    <SafeAreaView style={styles.container}>
      {/* Botão para abrir o menu lateral */}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => setMenuAberto(!menuAberto)}
      >
        <Text style={styles.menuButtonText}>☰</Text>
      </TouchableOpacity>

      {/* Renderize o menu lateral se estiver aberto */}
      {menuAberto && <SideBar />}

      {/* Logo / Título */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/favicon.png')} // Substitua pelo caminho correto do favicon
          style={styles.logoImage}
        />
        <Text style={styles.logo}>Easy ZAP</Text>
      </View>

      {/* Título da página de Login */}
      <Text style={styles.loginTitle}>Login</Text>
      <Text style={styles.instruction}>
        Preencha os campos abaixo para acessar sua conta.
      </Text>

      {/* Campos de texto */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]} // Flex para ocupar o espaço restante
            placeholder="Senha"
            placeholderTextColor="#999"
            secureTextEntry={!mostrarSenha}
            value={senha}
            onChangeText={setSenha}
          />
          <TouchableOpacity
            style={styles.showPasswordButton}
            onPress={() => setMostrarSenha(!mostrarSenha)}
          >
            <Text style={styles.showPasswordText}>
              {mostrarSenha ? '🔓' : '🔒'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Esqueceu a senha */}
      <TouchableOpacity 
        style={styles.forgotPasswordButton}
        onPress={() => navigation.navigate("RecupSenha")}>
        <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      {/* Botão de Login */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  menuButtonText: {
    fontSize: 24,
    color: '#333',
  },
  logo: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    alignSelf: 'center',
    marginBottom: 16,
  },
  loginTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 70,
    color: '#333',
    marginLeft: 30,
  },
  instruction: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  inputContainer: {
    marginTop: 24,
  },
  input: {
    backgroundColor: '#F5F5F5',
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    marginBottom: 16,
    color: '#333',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showPasswordButton: {
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: -20,
  },
  showPasswordText: {
    fontSize: 16,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    color: '#0095f6',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginRight: 10,
  },
  loginButton: {
    marginTop: 32,
    backgroundColor: '#0D7875',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
*/