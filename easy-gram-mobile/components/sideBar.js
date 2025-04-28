/*
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text
} from 'react-native';
import { useRouter } from 'expo-router'; // Importação correta


const SideBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  const handleCloseSidebar = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <TouchableWithoutFeedback onPress={handleCloseSidebar}>
        <View style={styles.overlay}>
          <View style={styles.sidebar}>
            <Text
              style={styles.menuItem}
              onPress={() => {
                router.push('/(tabs)/Login');
                handleCloseSidebar();
              }}
            >
              Login
            </Text>
            <Text
              style={styles.menuItem}
              onPress={() => {
                router.push('/(tabs)/Contatos');
                handleCloseSidebar();
              }}
            >
              Contatos
            </Text>
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
    zIndex: 9,
  },
  sidebar: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    position: 'absolute',
    width: 256,
    height: '100%',
    backgroundColor: '#001D22',
    zIndex: 10,
    paddingTop: 60, 
    paddingLeft: 20,
  },
  menuItem: {
    color: '#FFFFFF',
    fontSize: 18,
    paddingVertical: 15,
  },
});

export default SideBar;
*/