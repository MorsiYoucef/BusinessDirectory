import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import CategoryItem from './../Home/CategoryItem'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfigs'
import { useRouter } from 'expo-router'

const Category = ({ explore = false, onCategorySelect }) => {
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
  const onCategoryPressHandler = (item) => {
    if (!explore) {
      router.push('/businesslist/' + item.name)
    } else {
      onCategorySelect(item.name)
    }
  }
  return (
    <View>
      {!explore && (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
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
      )}
      <FlatList
        data={categoryList}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({ item, index }) => (
          <CategoryItem
            Category={item}
            key={index}
            onCategoryPress={(category) => onCategoryPressHandler(item)}
          />
        )}
      />
    </View>
  )
}

export default Category

const styles = StyleSheet.create({})
