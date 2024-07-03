import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const Intro = ({ business }) => {
  const router = useRouter()
  return (
    <View>
      <View
        style={{
          position: 'absolute',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          padding: 20,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle" size={40} color="white" />
        </TouchableOpacity>

        <Ionicons name="heart-outline" size={40} color="white" />
      </View>
      <Image
        source={{
          uri: business?.imageUrl,
        }}
        style={{ width: '100%', height: 300 }}
      />

      <View
        style={{
          padding: 20,
          marginTop: -10,
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Text style={{ fontSize: 20, fontFamily: 'Outfit-Bold' }}>
            {business.name}
          </Text>
          <Text style={{ fontFamily: 'Outfit', fontSize: 18 }}>
            {business.address}
          </Text>
        </View>

        <View>
          <MaterialIcons name="delete" size={30} color="red" />
        </View>
      </View>
    </View>
  )
}

export default Intro

const styles = StyleSheet.create({})
