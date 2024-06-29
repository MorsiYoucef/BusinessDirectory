import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const Header = () => {
  const { user } = useUser()
  return (
    <View
      style={{
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.PRIMARY,
      }}
    >
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Image
          source={{ uri: user?.imageUrl }}
          style={{ width: 45, height: 45, borderRadius: 99 }}
        />
        <View>
          <Text style={{ color: '#fff' }}>Welcome,</Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 19,
              fontFamily: 'Outfit-Med',
            }}
          >
            {user?.fullName}
          </Text>
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          marginTop: 15,
          borderRadius: 8,
        }}
      >
        <Ionicons name="search-sharp" size={24} color={Colors.PRIMARY} />
        <TextInput
          placeholder="Search..."
          style={{ fontFamily: 'Outfit', fontSize: 15, width: 100 }}
        />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
