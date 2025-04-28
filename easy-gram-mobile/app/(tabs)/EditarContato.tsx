import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { enviroment } from '../../env/enviroment.ts';

interface Contato {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  grupo: string;
}

export default function EditarContato({ onClose }) {
  const navigation = useNavigation();
  const [contato, setContato] = useState<Contato>({
    id: 1,
    nome: '',
    telefone: '',
    email: '',
    grupo: ''
  });

  useEffect(() => {
    axios.get(enviroment.API_URL + `/contatos/${contato.id}`)
      .then((res) => setContato(res.data))
      .catch(() => alert('Erro ao buscar o contato'));
  }, []);

  const atualizarContato = async () => {
    try {
      await axios.put(`http://localhost:3001/contatos/${contato.id}`, contato);
      alert('Contato atualizado!');
      navigation.goBack();
    } catch (err) {
      alert('Erro ao atualizar');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name="edit-3" size={28} color="#fff" style={styles.icon} />
      </View>

      <Text style={styles.title}>Editar Contato</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#999"
        value={contato.nome}
        onChangeText={(text) => setContato({ ...contato, nome: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        placeholderTextColor="#999"
        value={contato.telefone}
        onChangeText={(text) => setContato({ ...contato, telefone: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#999"
        value={contato.email}
        onChangeText={(text) => setContato({ ...contato, email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Grupo"
        placeholderTextColor="#999"
        value={contato.grupo}
        onChangeText={(text) => setContato({ ...contato, grupo: text })}
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
          <Text style={styles.cancelButtonText}>Fechar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={atualizarContato}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA500',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: 'center',
    marginBottom: 20,
  },
  icon: {
    textAlign: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24,
    textAlign: 'center'
  },
  input: {
    height: 48,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
    color: '#333',
  },
  buttonsContainer: {
    marginTop: 30,
  },
  cancelButton: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  cancelButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#00C897',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
