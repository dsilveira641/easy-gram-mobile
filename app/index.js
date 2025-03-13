import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View className='space-y-5 ml-3'>
          <Link href="/cadastro_screen" className='font-bold'>Programar Disponibilidade</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
