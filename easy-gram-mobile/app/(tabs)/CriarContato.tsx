import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import { Feather } from '@expo/vector-icons';
import { enviroment } from '../../env/enviroment';

export default function Adicionar() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const salvarContato = async () => {
    if (!nome || !telefone || !email) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }

    setLoading(true);
    try {
      await axios.post(`${enviroment.API_URL}/contatos`, { nome, telefone, email });
      Alert.alert('Sucesso', 'Contato salvo com sucesso!');
      setNome('');
      setTelefone('');
      setEmail('');
    } catch (error) {
      console.error('Erro ao salvar contato:', error);
      Alert.alert('Erro', 'Não foi possível salvar o contato.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name="users" size={28} color="#fff" />
      </View>

      <Text style={styles.titulo}>Novo contato</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity
        style={[styles.salvar, loading && styles.salvarDisabled]}
        onPress={salvarContato}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.salvarTexto}>Salvar</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
    marginTop: 50,
    borderRadius: 12,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#00C897',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  titulo: {
    fontSize: 22,
    marginBottom: 25,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#F8F8F8',
  },
  salvar: {
    width: '100%',
    backgroundColor: '#00C897',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  salvarDisabled: {
    backgroundColor: '#00a67d',
  },
  salvarTexto: {
    color: '#fff',
    fontSize: 16,
  },
});
