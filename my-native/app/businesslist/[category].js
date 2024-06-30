import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfigs'
import BusinessListCard from '../../components/BusinessList/BusinessListCard'
import { Colors } from '../../constants/Colors'

const BusinessListByCategory = () => {
  const navigation = useNavigation()
  const [BusinessList, setBusinessList] = useState([])
  const { category } = useLocalSearchParams()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerTitle: category })
    getBusinessList()
  }, [])

  const getBusinessList = async () => {
    setBusinessList([])
    setLoading(true)
    const q = query(
      collection(db, 'BusinessList'),
      where('Category', '==', category)
    )
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
      console.log(doc.data())
      setBusinessList((prev) => [...prev, { id: doc?.id, ...doc.data() }])
    })
    setLoading(false)
  }
  return (
    <View>
      {BusinessList?.length > 0 && loading == false ? (
        <FlatList
          data={BusinessList}
          onRefresh={getBusinessList}
          refreshing={loading}
          renderItem={({ item, index }) => (
            <BusinessListCard business={item} key={index} />
          )}
        />
      ) : loading ? (
        <>
          <ActivityIndicator
            size={'large'}
            color={Colors.PRIMARY}
            style={{ marginTop: '50%' }}
          />
        </>
      ) : (
        <Text
          style={{
            fontFamily: 'Outfit-Bold',
            fontSize: 20,
            textAlign: 'center',
            marginTop: '50%',
          }}
        >
          No Business Found
        </Text>
      )}
    </View>
  )
}

export default BusinessListByCategory

const styles = StyleSheet.create({})
