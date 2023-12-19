// navigation/BottomTabNavigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // ou outra biblioteca de ícones de sua escolha
import { AntDesign } from '@expo/vector-icons';
import StackNavigation from './StackNavigation'; // Importe o arquivo StackNavigation ou qualquer outra navegação que você tenha
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'Login') {
            iconName = focused ? 'ios-log-in' : 'ios-log-in-outline';
          } else if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Register') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }

          // Você pode adicionar mais casos conforme adiciona mais telas

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Register" component={RegisterScreen} />
      {/* Adicione mais telas conforme necessário */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
