import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import CategoryItem from './CategoryItem'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfigs'
import { useRouter } from 'expo-router'

const Category = () => {
  const [categoryList, setCategoryList] = useState([])
  const router = useRouter()

  useEffect(() => {
    GetCategoryList()
  }, [])
  const GetCategoryList = async () => {
    setCategoryList([]) // Clear previous data
    const q = query(collection(db, 'Category'))
    const querySnaphot = await getDocs(q)

    querySnaphot.forEach((doc) => {
      setCategoryList((prev) => [...prev, doc.data()])
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
          Category
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
        data={categoryList}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({ item, index }) => (
          <CategoryItem
            Category={item}
            key={index}
            onCategoryPress={(category) =>
              router.push('/businesslist/' + item.name)
            }
          />
        )}
      />
    </View>
  )
}

export default Category

const styles = StyleSheet.create({})
