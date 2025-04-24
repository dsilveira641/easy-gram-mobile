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
import SideBar from '../../components/sideBar';
import { useRouter } from 'expo-router';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity
        style={styles.menuButton}
        onPress={() => setMenuAberto(!menuAberto)}
      >
        <Text style={styles.menuButtonText}>☰</Text>
      </TouchableOpacity>

      {menuAberto && <SideBar />} */}

      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/favicon.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logo}>Easy ZAP</Text>
      </View>

      <Text style={styles.loginTitle}>Login</Text>
      <Text style={styles.instruction}>
        Preencha os campos abaixo para acessar sua conta.
      </Text>

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
            style={[styles.input, { flex: 1 }]}
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

      <TouchableOpacity
        style={styles.forgotPasswordButton}
        onPress={() => router.push('/(tabs)/RecupSenha')}
      >
        <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
  logoContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  logoImage: {
    width: 64,
    height: 64,
    marginBottom: 8,
  },
  logo: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  loginTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 30,
    color: '#333',
    marginLeft: 30,
  },
  instruction: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
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
