import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  Image,
  View,
} from 'react-native'
import { Rating } from 'react-native-ratings'
import React, { useState } from 'react'
import { Colors } from '../../constants/Colors'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfigs'
import { useUser } from '@clerk/clerk-expo'

const Reviews = ({ business }) => {
  const [rating, setRating] = useState(4)
  const [userInput, setUserInput] = useState()
  const { user } = useUser()

  const handleSubmit = async () => {
    const docRef = doc(db, 'BusinessList', business?.id)
    await updateDoc(docRef, {
      reviews: arrayUnion({
        rating: rating,
        comment: userInput,
        userName: user?.fullName,
        userImage: user?.imageUrl,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      }),
    })
    ToastAndroid.show('Comment Added Successfully', ToastAndroid.BOTTOM)
  }
  return (
    <View style={{ padding: 20, backgroundColor: '#fff' }}>
      <Text style={{ fontFamily: 'Outfit-Bold', fontSize: 20 }}>Reviews</Text>
      <View>
        <Rating
          onFinishRating={(rating) => setRating(rating)}
          style={{ paddingVertical: 10 }}
        />
        <TextInput
          onChangeText={(value) => setUserInput(value)}
          placeholder="Write your comment"
          numberOfLines={4}
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            borderColor: Colors.GRAY,
            textAlignVertical: 'top',
          }}
        ></TextInput>
        <TouchableOpacity
          disabled={!userInput}
          onSubmit={handleSubmit}
          onPress={() => handleSubmit()}
          style={{
            padding: 10,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 6,
            marginTop: 10,
          }}
        >
          <Text
            style={{ textAlign: 'center', fontFamily: 'Outfit', color: '#fff' }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {business?.reviews?.map((item, index) => (
          <View
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              padding: 10,
              borderWidth: 1,
              borderColor: Colors.GRAY,
              borderRadius: 10,
              marginTop: 10,
            }}
          >
            <Image
              source={{ uri: item?.userImage }}
              style={{ width: 50, height: 50, borderRadius: 99 }}
            />

            <View style={{}}>
              <Text style={{ fontFamily: 'Outfit-Med' }}>{item.userName}</Text>
              <Rating imageSize={20} ratingCount={item.rating} />
              <Text style={{ fontFamily: 'Outfit' }}>{item.comment}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Reviews

const styles = StyleSheet.create({})
