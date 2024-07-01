import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExploreBusinessList = ({ businessList }) => {
  return (
    <View>
      <FlatList
        data={businessList}
        renderItem={({ item, index }) => (
          <View key={index}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default ExploreBusinessList

const styles = StyleSheet.create({})
