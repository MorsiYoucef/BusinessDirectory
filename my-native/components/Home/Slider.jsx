import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { db } from '../../configs/FirebaseConfigs'
import { collection, getDocs, query } from 'firebase/firestore'

const Slider = () => {
  useEffect(() => {
    GetSliderList()
  }, [])
  const GetSliderList = async () => {
    const q = query(collection(db, 'Slider'))
    const querySnaphot = await getDocs(q)

    querySnaphot.forEach((doc) => {
      console.log(doc.data())
    })
  }
  return (
    <View>
      <Text>Slider</Text>
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({})
