import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SideBar from '../../components/sideBar'; // Importe o SideBar

const ContatosScreen: React.FC = () => {
  const [contatos, setContatos] = useState<string[]>([]);
  const [menuAberto, setMenuAberto] = useState(false); // Estado para controlar o menu lateral

  const adicionarContato = () => {
    const novoContato = `Contato ${contatos.length + 1}`;
    setContatos([...contatos, novoContato]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Botão para abrir/fechar o menu lateral */}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => setMenuAberto(!menuAberto)}
      >
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>

      {/* Renderize o menu lateral se estiver aberto */}
      {menuAberto && <SideBar />}

      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Contatos</Text>
        <Image
          source={{ uri: 'https://via.placeholder.com/40' }}
          style={styles.avatar}
        />
      </View>

      {contatos.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="people-outline" size={50} color="#B0BEC5" />
          <Text style={styles.emptyText}>
            Você ainda não possui nenhum contato cadastrado! Que tal começar cadastrando um?
          </Text>
          <TouchableOpacity style={styles.addButton} onPress={adicionarContato}>
            <Ionicons name="add" size={20} color="#fff" />
            <Text style={styles.addButtonText}>Novo contato</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={contatos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.contactContainer}>
              <Text style={styles.contactText}>{item}</Text>
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
    justifyContent: 'space-between',
   
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
    marginBottom: 20,
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: '#00897B',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  contactContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ContatosScreen;
