import React, { useState } from 'react';
import {
    View,
    Text,
    Modal,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

const ModalContato: React.FC = () => {
    
  const [visivel, setVisivel] = useState(true)

    return (
      <Modal
        animationType='slide'
        transparent={true}
        visible={visivel}
        style={[]}
        >
      <View style={styles.container}>
        <View style={styles.modalView}>
          <View style={styles.titleSection}>
          <View style={styles.avatarCircle}>
            {/* Ícone de usuário no centro */}
          </View>
          <Text style={styles.title}>Novo contato</Text>
        </View>

        <View style={styles.cardText}>
          <View style={styles.inputBox}>
            {/* Ícone de usuário */}
            <Image source={{ uri:'https://static-00.iconduck.com/assets.00/user-icon-470x512-joawnpv1.png'}} style={styles.iconContainer}></Image>
            <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#97A3B6" />
          </View>

          <View style={styles.inputBox}>
            {/* Ícone de telefone */}
            <Image source={{uri:'https://img.icons8.com/?size=192&id=43846&format=png'}} style={styles.iconContainer}></Image>
            <TextInput style={styles.input} placeholder="Telefone" placeholderTextColor="#97A3B6" keyboardType="phone-pad" />
          </View>

          <View style={styles.inputBox}>
            {/* Ícone de email */}
            <Image source={{uri:'https://www.pngarts.com/files/10/Vector-Email-Icon-PNG-Download-Image.png'}} style={styles.iconContainer}></Image>
            <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#97A3B6" keyboardType="email-address" />
          </View>

          <View style={styles.inputBox}>
            {/* Ícone de bookmark */}
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/5662/5662990.png'}} style={styles.iconContainer}></Image>
            <TextInput style={styles.input} placeholder="Grupo" placeholderTextColor="#97A3B6"/>
            {/* Ícone de seta para baixo (dropdown) */}
          </View>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.secondaryButton} onPress={()=>{setVisivel(false)}}>
            <Text style={styles.secondaryButtonText} >Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
        </View>
        
    </View>
      </Modal>
        
  );
};

export default ModalContato;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
      },    
      modalView:{
        margin: 0,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 0,
        alignItems: 'center',
      },
      titleSection: {
        alignItems: 'center',
        gap: 8,
        height: 133,
      },
      avatarCircle: {
        width: 64,
        height: 64,
        borderRadius: 32,
        marginTop: 75,
        backgroundColor: '#11BBB1',
        justifyContent: 'center',
        alignItems: 'center',
      },
      userIcon: {
        width: 24,
        height: 24,
        tintColor: '#FFFFFF',
      },
      title: {
        fontSize: 24,
        fontWeight: '600',
        fontFamily: 'Inter',
        color: 'rgba(0, 0, 0, 0.87)',
        textAlign: 'center',
      },
      cardText: {
        marginTop: 80,
        marginBottom: 40,
        alignItems: 'center',
        gap: 24,
      },
      inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#E3E8EF',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        width: 295,
        height: 56,
        gap: 10,
      },
      input: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Roboto',
        color: '#97A3B6',
      },
      icon: {
        width: 20,
        height: 20,
        tintColor: '#687489',
      },
      actions: {
        alignItems: 'center',
        gap: 8,
      },
      secondaryButton: {
        backgroundColor: '#F0FDFB',
        paddingVertical: 16,
        paddingHorizontal: 64,
        borderRadius: 8,
        width: 295,
        alignItems: 'center',
      },
      secondaryButtonText: {
        color: '#001D22',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Inter',
      },
      primaryButton: {
        backgroundColor: '#0A8D88',
        paddingVertical: 16,
        paddingHorizontal: 64,
        borderRadius: 8,
        width: 295,
        alignItems: 'center',
      },
      primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Inter',
      },
      iconContainer: {
        padding: 10,
      },
});