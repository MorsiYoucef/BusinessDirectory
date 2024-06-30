import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfigs'
import PopularBusinessCard from './PopularBusinessCard'

const PopularBusiness = () => {
  const [businessList, setBusinessList] = useState([])

  useEffect(() => {
    GetBusinessList()
  }, [])

  const GetBusinessList = async () => {
    setBusinessList([])
    const q = query(collection(db, 'BusinessList'), limit(10))
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
      setBusinessList((prev) => [...prev, doc.data()])
    })
  }
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
          Popular Business
        </Text>
        <Text
          style={{
            color: Colors.PRIMARY,
            paddingRight: 15,
            fontFamily: 'Outfit-Med ',
          }}
        >
          View All
        </Text>
      </View>

      <FlatList
        data={businessList}
        horizontal={true}
        renderItem={({ item, index }) => (
          <PopularBusinessCard business={item} key={index} />
        )}
      ></FlatList>
    </View>
  )
}

export default PopularBusiness

const styles = StyleSheet.create({})
