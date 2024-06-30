import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const ActionButton = ({ business }) => {
  const actionButtonMenu = [
    {
      id: 1,
      name: 'call',
      icon: './../../assets/images/icons8-téléphone-64.png',
      url: 'tel:' + business?.contact,
    },
    {
      id: 2,
      name: 'Location',
      icon: './../../assets/images/icons8-marqueur-48.png',
      url: 'tel:' + business?.contact,
    },
    {
      id: 3,
      name: 'Web',
      icon: './../../assets/images/icons8-globe-64.png',
      url: 'tel:' + business?.contact,
    },
    {
      id: 4,
      name: 'Share',
      icon: './../../assets/images/icons8-partager-50.png',
      url: 'tel:' + business?.contact,
    },
  ]
  return (
    <View style={{ backgroundColor: '#fff', padding: 20 }}>
      <FlatList
        data={actionButtonMenu}
        renderItem={({ item, index }) => (
          <View key={index}>
            <Image source={item?.icon} style={{ width: 100, height: 80 }} />
            <Text style={{ fontFamily: '' }}>{item.name}</Text>
            <Text></Text>
          </View>
        )}
      />
    </View>
  )
}

export default ActionButton

const styles = StyleSheet.create({})
