import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const CategoryItem = ({ Category }) => {
  return (
    <View style={{ paddingLeft: 20, paddingTop: 10 }}>
      <View
        style={{
          padding: 10,
          backgroundColor: Colors.ICON_BG,
          borderRadius: 99,
          marginRight: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Image
          source={{ uri: Category.icon }}
          style={{ width: 40, height: 40 }}
        />
      </View>
      <Text
        style={{
          fontSize: 12,
          fontFamily: 'Outfit-Mid',
          textAlign: 'center',
          marginTop: 5,
        }}
      >
        {Category.name}
      </Text>
    </View>
  )
}

export default CategoryItem
const styles = StyleSheet.create({})
