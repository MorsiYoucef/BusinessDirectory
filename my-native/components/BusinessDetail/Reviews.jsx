import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Reviews = ({ business }) => {
  return (
    <View style={{ padding: 20, backgroundColor: '#fff' }}>
      <Text style={{ fontFamily: 'Outfit-Bold', fontSize: 20 }}>Reviews</Text>
      <Text>{business.name}</Text>
    </View>
  )
}

export default Reviews

const styles = StyleSheet.create({})
