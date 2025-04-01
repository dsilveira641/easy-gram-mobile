import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'expo-router'; // Certifique-se de importar o Link corretamente

const SideBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleCloseSidebar = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <TouchableWithoutFeedback onPress={handleCloseSidebar}>
        <View style={styles.overlay}>
          <View style={styles.sidebar}>
            <Link href="/(tabs)/Login" style={styles.menuItem}>Login</Link>
            <Link href="/(tabs)/Contatos" style={styles.menuItem}>Contatos</Link>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente
    zIndex: 9,
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    position: 'absolute',
    width: 256,
    height: '100%',
    backgroundColor: '#001D22',
    zIndex: 10,
  },
  menuItem: {
    color: '#FFFFFF',
    padding: 10,
    textDecorationLine: 'none',
  },
});

export default SideBar;