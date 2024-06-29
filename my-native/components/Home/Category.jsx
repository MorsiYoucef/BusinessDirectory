import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const Category = () => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 20,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Outfit-Bold',
          }}
        >
          Category
        </Text>
        <Text
          style={{
            color: Colors.PRIMARY,
            paddingRight: 15,
            fontFamily: 'Outfit-Med',
          }}
        >
          View All
        </Text>
      </View>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({})
