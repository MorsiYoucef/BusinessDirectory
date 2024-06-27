import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

const loadFonts = async () => {
  await Font.loadAsync({
    Outfit: require('../../assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Bold': require('../../assets/fonts/Outfit-Bold.ttf'),
    'Outfit-Med': require('../../assets/fonts/Outfit-Medium.ttf'),
  })
}

const home = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true))
  }, [])

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View>
      <Text style={{ fontSize: 40, fontFamily: 'Outfit-Bold' }}>home Page</Text>
    </View>
  )
}

export default home

const styles = StyleSheet.create({})
