import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

interface FooterProps {
  navigation?: NavigationProp<any>;
}

const Footer: React.FC<FooterProps> = ({ navigation }) => {
  return (
    <View style={styles.footerContainer}>
     

      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation?.navigate('Contatos')}
      >
        <Ionicons name="people-outline" size={24} color="#0D7875" />
        <Text style={styles.footerButtonText}>Contatos</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.footerButton}>
        <Ionicons name="add-circle-outline" size={24} color="#0D7875" />
        <Text style={styles.footerButtonText}>Adicionar</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.footerButton}>
        <Ionicons name="settings-outline" size={24} color="#0D7875" />
        <Text style={styles.footerButtonText}>Configurações</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute', // Fixar na parte inferior
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingVertical: 10,
   
   
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    fontSize: 12,
    color: '#0D7875', 
    marginTop: 4,
  },
});

export default Footer;