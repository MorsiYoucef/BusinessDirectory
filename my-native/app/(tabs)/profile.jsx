import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserIntro from '../../components/Profile/UserIntro'
import MenuList from '../../components/Profile/MenuList'

const profile = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 35, fontFamily: 'Outfit-Bold' }}>profile</Text>
      {/* User Info */}
      <UserIntro />
      <MenuList />
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})
