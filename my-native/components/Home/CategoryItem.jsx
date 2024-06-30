import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const CategoryItem = ({ Category, onCategoryPress }) => {
  return (
    <TouchableOpacity
      onPress={(category) => onCategoryPress(category)}
      style={{ paddingLeft: 20, paddingTop: 10 }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            padding: 10,
            backgroundColor: Colors.ICON_BG,
            borderRadius: 99,
            marginRight: 10,
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
            fontFamily: 'Outfit-Med',
            textAlign: 'center',
            marginTop: 5,
          }}
        >
          {Category.name}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryItem
const styles = StyleSheet.create({})
