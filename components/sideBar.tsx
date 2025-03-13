import React from 'react';
import { View, StyleSheet } from 'react-native';

const SideBar = () => {
  return (
    <View style={styles.sidebar}>
      {/* Adicione aqui os componentes do menu lateral */}
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    position: 'absolute', // Alterado para 'absolute'
    width: 256,
    height: '100%', // Alterado para ocupar toda a altura da tela
    backgroundColor: '#001D22',
    zIndex: 10, // Adicionado para garantir que o menu fique sobreposto
  },
});

export default SideBar;