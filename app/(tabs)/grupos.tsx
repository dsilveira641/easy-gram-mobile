import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import SideBar from '../../components/sideBar'; // ajuste o caminho se necessário

const ipLocal = 'http://localhost:3000'; // substitua com o IP local correto se necessário

const Grupos = () => {
  const [grupos, setGrupos] = useState([]);
  const [menuAberto, setMenuAberto] = useState(false);

  const buscarGrupos = async () => {
    try {
      const response = await axios.get(`${ipLocal}/grupos`);
      setGrupos(response.data);
    } catch (error) {
      console.error('Erro ao buscar grupos:', error);
    }
  };

  useEffect(() => {
    buscarGrupos();
  }, []);

  const fecharSidebar = () => setMenuAberto(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.menuButton} onPress={() => setMenuAberto(true)}>
        <Ionicons name="menu" size={28} color="#000" />
      </TouchableOpacity>

      {menuAberto && <SideBar onClose={fecharSidebar} />}

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Grupos</Text>
      </View>

      {grupos.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="people-circle-outline" size={50} color="#B0BEC5" />
          <Text style={styles.emptyText}>
            Nenhum grupo cadastrado até o momento.
          </Text>
        </View>
      ) : (
        <FlatList
          data={grupos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={[styles.groupContainer, { backgroundColor: item.cor || '#90CAF9' }]}>
              <Text style={styles.groupText}>{item.nome}</Text>
              <Text style={styles.groupDate}>
                Criado em: {new Date(item.dataCriacao).toLocaleDateString()}
              </Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    padding: 16,
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#607D8B',
    textAlign: 'center',
    marginTop: 10,
  },
  groupContainer: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  groupText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  groupDate: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
});

export default Grupos;
