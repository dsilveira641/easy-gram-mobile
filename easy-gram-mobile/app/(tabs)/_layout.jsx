import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TabIcon = ({ icon, color, focused, name }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Ionicons name={icon} size={24} color={color} />
      {focused && <Text style={{ color, fontSize: 12 }}>{name}</Text>}
    </View>
  );
};

const icons = {
  Home: 'home-outline',
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA006',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
        },
      }}
    >
      <Tabs.Screen
        name="Login"
        options={{
          title: 'Login',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.Home} color={color} focused={focused} name="Home" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
