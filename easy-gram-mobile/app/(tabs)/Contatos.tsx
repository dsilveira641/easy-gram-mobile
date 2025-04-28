import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import CriarContato from '@/app/(tabs)/CriarContato';
import { Contato } from '@/interfaces/contato';
import axios from 'axios';
import { enviroment } from '@/env/enviroment';

const ContatosScreen: React.FC = () => {
  const [contatos, setContatos] = useState<Contato[]>([]);
  const [menuAberto, setMenuAberto] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const carregarContatos = async () => {
    try {
      const response = await axios.get<Contato[]>(enviroment.API_URL + '/contatos');
      setContatos(response.data);
    } catch (err) {
      console.error('Erro ao carregar contatos:', err);
    }
  }

  useEffect(() => {
    carregarContatos();
  }, [])

  const fecharSidebar = () => setMenuAberto(false);
  type Props = {
    onClose: () => void;
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.menuButton} onPress={() => setMenuAberto(true)}>
        <Ionicons name="menu" size={28} color="#000" />
      </TouchableOpacity>

      {/* {menuAberto && <SideBar onClose={fecharSidebar} />} */}

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
          <TouchableOpacity style={styles.addButton} onPress={(() => setModalVisible(true))}>
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
              <Text style={styles.contactText}>{item.nome}</Text>
            </View>
          )}
        />
      )}
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <CriarContato 
          onClose={() => setModalVisible(false)} 
          onSuccess={carregarContatos}/>
      </Modal>
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
