import { StyleSheet, Text, View } from 'react-native'
import { Rating } from 'react-native-ratings'
import React from 'react'

const Reviews = ({ business }) => {
  return (
    <View style={{ padding: 20, backgroundColor: '#fff' }}>
      <Text style={{ fontFamily: 'Outfit-Bold', fontSize: 20 }}>Reviews</Text>
      <View>
        <Rating
          showRating
          onFinishRating={this.RatingCompleted}
          style={{ paddingVertical: 10 }}
        />
      </View>
    </View>
  )
}

export default Reviews

const styles = StyleSheet.create({})
