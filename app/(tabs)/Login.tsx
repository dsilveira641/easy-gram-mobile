import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image
} from 'react-native';

import styles from '../styles/login-style'; // Importe o arquivo de estilos
import { useNavigation } from 'expo-router';
import Footer from '../../components/Footer.tsx';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigation = useNavigation<{ navigate: (screen: string) => void }>();

  return (
    <SafeAreaView style={styles.container}>
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
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Footer />
    </SafeAreaView>
  );
};

export default LoginScreen;