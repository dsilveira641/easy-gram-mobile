import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { enviroment } from '../../env/enviroment';

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
      <Text style={styles.titulo}>Editar contato</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={contato.nome}
        onChangeText={(text) => setContato({ ...contato, nome: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={contato.telefone}
        onChangeText={(text) => setContato({ ...contato, telefone: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={contato.email}
        onChangeText={(text) => setContato({ ...contato, email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Grupo"
        value={contato.grupo}
        onChangeText={(text) => setContato({ ...contato, grupo: text })}
      />

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.btnCancelar} onPress={onClose}>
          <Text style={styles.textCancelar}>Fechar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSalvar} onPress={atualizarContato}>
          <Text style={styles.textSalvar}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    height: '100%'
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA500',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
    alignSelf: 'center'
  },
  icon: {
    textAlign: 'center'
  },
  titulo: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#00C897',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15
  },
  botoes: {
    marginTop: 30
  },
  btnCancelar: {
    backgroundColor: '#E0E0E0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10
  },
  textCancelar: {
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold'
  },
  btnSalvar: {
    backgroundColor: '#00C897',
    padding: 12,
    borderRadius: 8
  },
  textSalvar: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  }
});
