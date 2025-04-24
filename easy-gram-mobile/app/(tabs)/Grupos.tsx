import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Grupos = () => {
  const [grupos, setGrupos] = useState<string[]>([]); // Lista de grupos

  const handleCriarGrupo = () => {
    // Lógica para criar um novo grupo (exemplo: adicionar um grupo fictício)
    setGrupos([...grupos, `Grupo ${grupos.length + 1}`]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grupos</Text>
      {grupos.length === 0 ? (
        <Text style={styles.message}>
          Você ainda não possui nenhum grupo cadastrado! Que tal começar
          cadastrando um?
        </Text>
      ) : (
        grupos.map((grupo, index) => (
          <Text key={index} style={styles.groupItem}>
            {grupo}
          </Text>
        ))
      )}
      <Button title="Criar Novo Grupo" onPress={handleCriarGrupo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
    gap: 16,
    position: 'absolute',
    width: 375,
    height: 740,
    left: 0,
    top: 72,
    backgroundColor: '#F0FDFB',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  message: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
  },
  groupItem: {
    fontSize: 18,
    color: '#333',
    marginVertical: 4,
  },
});

export default Grupos;