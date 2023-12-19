// ContentScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../components/AuthProvider';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const ContentScreen = () => {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à sua página de conteúdo</Text>
      <Text style={styles.subtitle}>Usuário: {user?.email}</Text>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};

// Implemente de maneira semelhante para a tela de registro e a tela de conteúdo

