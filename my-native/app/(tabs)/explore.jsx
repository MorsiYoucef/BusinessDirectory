import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Colors'
import Category from '../../components/Explore/Category'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfigs'
import ExploreBusinessList from '../../components/Explore/ExploreBusinessList'

const explore = () => {
  const [businessList, setBusinessList] = useState()
  const [loading, setLoading] = useState(false)
  const GetBusinessByCategory = async (category) => {
    setLoading(true)
    const q = query(
      collection(db, 'BusinessList'),
      where('Category', '==', category)
    )
    const querysnapShot = await getDocs(q)
    const businesses = []
    querysnapShot.forEach((doc) => {
      console.log(doc.data())
      businesses.push({ id: doc.id, ...doc.data() })
    })
    setBusinessList(businesses)
    setLoading(false)
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontFamily: 'Outfit-Bold', fontSize: 30 }}>
        Explore More
      </Text>
      {/* search bar */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          marginTop: 15,
          borderRadius: 8,
          borderColor: Colors.PRIMARY,
          borderWidth: 1,
        }}
      >
        <Ionicons name="search-sharp" size={24} color={Colors.PRIMARY} />
        <TextInput
          placeholder="Search..."
          style={{ fontFamily: 'Outfit', fontSize: 15, width: 100 }}
        />
      </View>

      {/* category */}
      <Category
        explore={true}
        onCategorySelect={(category) => GetBusinessByCategory(category)}
      />

      {/* business list */}
      {loading ? (
        <ActivityIndicator
          size={'large'}
          color={Colors.PRIMARY}
          style={{ marginTop: '50%' }}
        />
      ) : (
        <ExploreBusinessList businessList={businessList} />
      )}
    </View>
  )
}

export default explore

const styles = StyleSheet.create({})
