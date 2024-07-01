import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = ({ business }) => {
  return (
    <View
      style={{
        padding: 20,
        paddingTop: -25,
        backgroundColor: '#fff',
        height: '100%',
      }}
    >
      <Text
        style={{
          fontFamily: 'Outfit-Bold',
          fontSize: 20,
        }}
      >
        About
      </Text>
      <Text
        style={{
          fontFamily: 'Outfit',
          lineHeight: 25,
        }}
      >
        {business?.about}
      </Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({})
