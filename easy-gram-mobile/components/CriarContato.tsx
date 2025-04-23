import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import Feather from 'react-native-vector-icons/Feather';
import { enviroment } from '../env/enviroment';
import { Grupos } from '@/interfaces/grupos';


export default function CriarContato({ onClose }: any) {  
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [grupo, setGrupo] = useState<Grupos>();

  const salvarContato = async () => {
    try {
      await axios.post(enviroment.API_URL + '/contatos', { nome, telefone, email, grupo });
      alert('Contato salvo com sucesso!');      
    } catch (err) {
      alert('Erro ao salvar');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name="users" size={28} color="#fff" style={styles.icon} />
      </View>

      <Text style={styles.titulo}>Novo contato</Text>

      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Telefone" value={telefone} onChangeText={setTelefone} />
      <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} />
      {/* TROCAR POR UM SELECT de grupos */}
      {/* <TextInput style={styles.input} placeholder="Grupo" value={grupo} onChangeText={setGrupo} /> */}

      <TouchableOpacity style={styles.cancelar} onPress={onClose}>
        <Text style={styles.cancelarTexto}>Cancelar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.salvar} onPress={salvarContato}>
        <Text style={styles.salvarTexto}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 25,
    margin: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 4
  },
  iconContainer: {
    backgroundColor: '#00C897',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  icon: {
    fontSize: 30,
    color: '#fff'
  },
  titulo: {
    fontSize: 22,
    marginBottom: 25,
    fontWeight: 'bold',
    color: '#333'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#F8F8F8'
  },
  cancelar: {
    width: '100%',
    backgroundColor: '#E8E8E8',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10
  },
  cancelarTexto: {
    color: '#333',
    fontSize: 16
  },
  salvar: {
    width: '100%',
    backgroundColor: '#00C897',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center'
  },
  salvarTexto: {
    color: '#fff',
    fontSize: 16
  }
});
