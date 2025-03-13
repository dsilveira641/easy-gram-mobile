import React, { useState } from 'react';
import { View, FlatList, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, FAB } from 'react-native-paper';

const gruposData = [
  { id: '1', nome: 'Clientes VIP', data: '10/09/2023' },
  { id: '2', nome: 'Clientes Satisfeitos', data: '10/09/2023' },
];

const GruposScreen = () => {
  const [search, setSearch] = useState('');
  const [grupos, setGrupos] = useState(gruposData);

  const filtrarGrupos = (texto: string) => {
    setSearch(texto);
    if (texto === '') {
      setGrupos(gruposData);
    } else {
      setGrupos(gruposData.filter((grupo) => 
        grupo.nome.toLowerCase().includes(texto.toLowerCase())
      ));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image size={40} source={{ uri: 'https://i.pravatar.cc/300' }} />
        <Text style={styles.userName}>Carolin Perkins</Text>
      </View>

      <Text style={styles.title}>Grupos</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar"
        value={search}
        onChangeText={filtrarGrupos}
      />

      <FlatList
        data={grupos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.groupItem}>
            <Text style={styles.groupName}>{item.nome}</Text>
            <Text style={styles.groupDate}>{item.data}</Text>
          </View>
        )}
      />

      <FAB style={styles.fab} icon="plus" onPress={() => console.log('Adicionar Grupo')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  userName: { marginLeft: 10, fontSize: 16, fontWeight: 'bold' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  searchInput: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  groupItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginBottom: 8,
  },
  groupName: { fontSize: 16, fontWeight: '500' },
  groupDate: { fontSize: 14, color: '#888' },
  fab: { position: 'absolute', right: 20, bottom: 20, backgroundColor: '#008f68' },
});

export default GruposScreen;
