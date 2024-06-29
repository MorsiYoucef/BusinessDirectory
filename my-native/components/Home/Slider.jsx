import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../configs/FirebaseConfigs'
import { collection, getDocs, query } from 'firebase/firestore'

const Slider = () => {
  const [sliderList, setSliderList] = useState([])
  useEffect(() => {
    GetSliderList()
  }, [])
  const GetSliderList = async () => {
    const q = query(collection(db, 'Slider'))
    const querySnaphot = await getDocs(q)

    querySnaphot.forEach((doc) => {
      console.log(doc.data())
      setSliderList((prev) => [...prev, doc.data()])
    })
  }
  return (
    <View>
      <Text
        style={{
          fontFamily: 'Outfit-Bold',
          fontSize: 20,
          paddingTop: 20,
          paddingLeft: 20,
        }}
      >
        #Special for you
      </Text>
      <FlatList
        style={{ paddingLeft: 20 }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={sliderList}
        renderItem={({ item, index }) => (
          <Image
            source={{ uri: item.imageUrl }}
            style={{
              width: 300,
              height: 200,
              borderRadius: 15,
              marginRight: 15,
            }}
          />
        )}
      />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({})
