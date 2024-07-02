import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

const UserIntro = () => {
  const { user } = useUser()
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
      }}
    >
      <Image
        source={{ uri: user?.imageUrl }}
        style={{ width: 100, height: 100, borderRadius: 99, marginBottom: 5 }}
      />
      <Text style={{ fontFamily: 'Outfit-Bold', fontSize: 20 }}>
        {user?.fullName}
      </Text>
      <Text style={{ fontFamily: 'Outfit', fontSize: 16 }}>
        {user?.primaryEmailAddress?.emailAddress}
      </Text>
    </View>
  )
}

export default UserIntro

const styles = StyleSheet.create({})
