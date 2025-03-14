import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, FAB, IconButton } from 'react-native-paper';

const GruposScreen = () => {
  const [search, setSearch] = useState('');
  const [grupos, setGrupos] = useState([]);
  const [nomeGrupo, setNomeGrupo] = useState('');
  const [dataGrupo, setDataGrupo] = useState('');
  const [mostrarCampos, setMostrarCampos] = useState(false);

  const fetchGrupos = async () => {
    try {
      const response = await fetch('http://localhost:3000/grupos');
      const data = await response.json();
      setGrupos(data);
    } catch (error) {
      console.error('Erro ao buscar os grupos:', error);
    }
  };

  useEffect(() => {
    fetchGrupos();
  }, []);

  const filtrarGrupos = (texto) => {
    setSearch(texto);
    if (texto === '') {
      fetchGrupos();
    } else {
      setGrupos(grupos.filter((grupo) =>
        grupo.nome.toLowerCase().includes(texto.toLowerCase())
      ));
    }
  };

  const adicionarGrupo = async () => {
    if (nomeGrupo && dataGrupo) {
      try {
        const novoGrupo = { nome: nomeGrupo, data: dataGrupo };
        await fetch('http://localhost:3000/grupos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(novoGrupo),
        });
        fetchGrupos();
        setNomeGrupo('');
        setDataGrupo('');
        setMostrarCampos(false);
      } catch (error) {
        console.error('Erro ao adicionar o grupo:', error);
      }
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const removerGrupo = async (id) => {
    try {
      await fetch(`http://localhost:3000/grupos/${id}`, {
        method: 'DELETE',
      });
      fetchGrupos();
    } catch (error) {
      console.error('Erro ao remover o grupo:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cadastro de Grupos</Text>
        <View style={styles.userInfo}>
          <Avatar.Image size={40} source={{ uri: 'https://thispersondoesnotexist.com/' }} />
          <Text style={styles.userName}>Ivete Sangalo</Text>
        </View>
      </View>

      {grupos.length === 0 ? (
        <View style={styles.emptyContainer}>
          <IconButton icon="bookmark-outline" size={50} />
          <Text style={styles.emptyText}>
            Você ainda não possui nenhum grupo cadastrado! Que tal começar cadastrando um?
          </Text>
          <TouchableOpacity style={styles.newGroupButton} onPress={() => setMostrarCampos(true)}>
            <Text style={styles.newGroupText}>+ Novo grupo</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar"
            value={search}
            onChangeText={filtrarGrupos}
          />
          <FlatList
            data={grupos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.groupItem}>
                <Text style={styles.groupName}>{item.nome}</Text>
                <Text style={styles.groupDate}>{item.data}</Text>
                <IconButton icon="trash-can" size={20} onPress={() => removerGrupo(item.id)} />
              </View>
            )}
          />
        </>
      )}

      {mostrarCampos && (
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome do Grupo</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome do grupo"
              value={nomeGrupo}
              onChangeText={setNomeGrupo}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Data do Grupo</Text>
            <TextInput
              style={styles.input}
              placeholder="Data do grupo (DD/MM/YYYY)"
              value={dataGrupo}
              onChangeText={setDataGrupo}
            />
          </View>
        </View>
      )}

{(grupos.length > 0 || mostrarCampos) && (
  <>
    <FAB style={styles.fab} icon="plus" onPress={() => setMostrarCampos(true)} />
    <FAB style={[styles.fab, { bottom: 90 }]} icon="check" onPress={adicionarGrupo} />
  </>
)}

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6699CC',
    height: 60,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  title: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  userInfo: { flexDirection: 'row', alignItems: 'center' },
  userName: { marginLeft: 10, fontSize: 16, fontWeight: 'bold', color: '#fff' },
  searchInput: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  groupItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginBottom: 8,
  },
  groupName: { fontSize: 16, fontWeight: '500' },
  groupDate: { fontSize: 14, color: '#888' },
  formContainer: { marginTop: 20 },
  inputGroup: { marginBottom: 15, width: '87%' },
  label: { fontSize: 16, fontWeight: '500', color: '#333', marginBottom: 5 },
  input: {
    backgroundColor: '#f1f1f1',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
  },
  fab: { position: 'absolute', right: 20, bottom: 20, backgroundColor: '#008f68' },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  newGroupButton: {
    backgroundColor: '#008f68',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 15,
  },
  newGroupText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default GruposScreen;
