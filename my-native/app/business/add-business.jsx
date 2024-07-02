import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors'

const AddBusiness = () => {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Add New Business',
      headerShown: true,
    })
  }, [])
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontFamily: 'Outfit-Bold', fontSize: 25 }}>
        Add New Business
      </Text>
      <Text style={{ fontFamily: 'Outfit', color: Colors.GRAY }}>
        Fill all details in order to add new business
      </Text>
      <Image source={require('./../../assets/images/icons8-camera-94.png')} />
    </View>
  )
}

export default AddBusiness

const styles = StyleSheet.create({})
