import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image
} from 'react-native';
import {
    Avatar,
    Button,
    Card
} from 'react-native-paper';

const GridGroup: React.FC = () => {

  return (

    <SafeAreaView style={styles.container}>
      {/* Logo / Título */}
      <View>
      <View style={styles.profileContainer}>
      <TouchableOpacity>
          <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>
      <Image source={{ uri: 'https://www.kew.org/sites/default/files/styles/person_node/public/2024-09/Default_ProfilePicture.png.webp?itok=G25qnG-6'}} style={styles.profileImage}></Image>
      <Text style={styles.profileName}>Usuário</Text>
      </View>
      <View>
      <Text style={styles.logo}>Grupos</Text>
      <TouchableOpacity style={styles.plusButton}>
        <Text style={styles.plusButtonText}>+</Text>
      </TouchableOpacity>
      </View>

      <View>
      <Card style={styles.card}>
    <Card.Content>
      <Text>Grupo 1</Text>
      <Text>28/04/2025</Text>
      <Text>#ffffff</Text>
    </Card.Content>
    <Card.Actions>
      <Button style={styles.cardBotton1}>Editar</Button>
      <Button style={styles.cardBotton2}>Excluir</Button>
    </Card.Actions>
  </Card>
  <Card style={styles.card}>
    <Card.Content>
      <Text>Grupo 2</Text>
      <Text>05/05/2005</Text>
      <Text>#0D7875</Text>
      </Card.Content>
    <Card.Actions>
      <Button style={styles.cardBotton1}>Editar</Button>
      <Button style={styles.cardBotton2}>Excluir</Button>
    </Card.Actions>
  </Card>
      </View>
      </View>
      
    </SafeAreaView>
  );
};
export default GridGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  menuIcon: {
    fontSize: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    alignSelf: 'center',
    marginBottom: 16,
    marginRight: 275,
    marginTop: 16,
  },
  instruction: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  inputContainer: {
    marginTop: 24,
  },
  input: {
    backgroundColor: '#F5F5F5',
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    marginBottom: 16,
    color: '#333',
  },
  plusButton: {
    alignItems:'center',
    justifyContent:'center',
    width: 50,
    height:50,
    backgroundColor:'#0D7875',
    borderRadius:50,
    marginLeft: 325,
  },
  plusButtonText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '600',
  },
  contactButton: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D7875',
    height: 48,
    borderRadius: 8,
  },
  contactButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
    marginLeft: 250,
  },
  profileName: {
    fontSize: 16,
    color: '#666',
  },
  iconContainer: {
    marginHorizontal: 'auto',
    backgroundColor: '#6662',
    padding: 20,
    width: 50,
    height:50,
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 10,
  },  
  card: {
    marginTop: 30,
  },
  cardBotton1: {
    backgroundColor: 'yellow',
  },
  cardBotton2: {
    backgroundColor: 'red',
  },
  square1: {
    backgroundColor: '#ffffff'
  },
  square2: {
    backgroundColor: '#0D7875'
  },
});