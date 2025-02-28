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

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo / Título */}
      <Text style={styles.logo}>Easy ZAP</Text>
      

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

      {/* Esqueceu a senha */}
      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      {/* Botão de Login */}
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