import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfigs'
import { Colors } from '../../constants/Colors'
import Intro from './../../components/BusinessDetail/Intro'
import ActionButton from '../../components/BusinessDetail/ActionButton'
import About from '../../components/BusinessDetail/About'
import Reviews from '../../components/BusinessDetail/Reviews'

const BusinessDetail = () => {
  const { businessid } = useLocalSearchParams()
  const [businessDetail, setBusinessDetail] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    GetBusinessDetailById()
  }, [])

  const GetBusinessDetailById = async () => {
    setLoading(true)
    const docRef = doc(db, 'BusinessList', businessid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      setBusinessDetail({ id: docSnap.id, ...docSnap.data() })
      setLoading(false)
    } else {
      ;<Text>No Such Document!</Text>
      setLoading(false)
    }
  }
  return (
    <View>
      {loading ? (
        <ActivityIndicator
          size={'large'}
          color={Colors.PRIMARY}
          style={{ marginTop: '100%' }}
        />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Intro business={businessDetail} />
          <ActionButton business={businessDetail} />
          <Reviews business={businessDetail} />
          <About business={businessDetail} />
        </ScrollView>
      )}
    </View>
  )
}

export default BusinessDetail

const styles = StyleSheet.create({})
