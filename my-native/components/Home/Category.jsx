import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import CategoryItem from './CategoryItem'

const Category = () => {
  const [categoryList, setCategoryList] = useState([])

  useEffect(() => {
    GetCategoryList()
  }, [])
  const GetCategoryList = async () => {
    const q = query(collection(db, 'Category'))
    const querySnaphot = await getDocs(q)

    querySnaphot.forEach((doc) => {
      console.log(doc.data())
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
        renderItem={({ item, index }) => <CategoryItem Category={item} />}
      />
    </View>
  )
}

export default Category

const styles = StyleSheet.create({})
