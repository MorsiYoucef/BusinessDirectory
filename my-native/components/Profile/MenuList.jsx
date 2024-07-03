import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Colors } from './../../constants/Colors'

const MenuList = () => {
  const menuList = [
    {
      id: 1,
      name: 'Add Business',
      icon: require('./../../assets/images/add.png'),
      path: '/business/add-business',
    },
    {
      id: 2,
      name: 'My Business',
      icon: require('./../../assets/images/business-and-trade.png'),
      path: '/business/my-business',
    },
    {
      id: 3,
      name: 'Share App',
      icon: require('./../../assets/images/share_1.png'),
      path: '/business/add-business',
    },
    {
      id: 4,
      name: 'Logout',
      icon: require('./../../assets/images/logout.png'),
      path: '/business/add-business',
    },
  ]

  const router = useRouter()
  const onMenuClick = (item) => {
    router.push(item.path)
  }
  return (
    <View style={{ marginTop: 50 }}>
      <FlatList
        data={menuList}
        numColumns={2}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            onPress={() => onMenuClick(item)}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              flex: 1,
              margin: 10,
              padding: 10,
              borderWidth: 1,
              borderRadius: 20,
              backgroundColor: '#fff',
            }}
          >
            <Image source={item.icon} style={{ width: 60, height: 60 }} />
            <Text style={{ fontFamily: 'Outfit-Med', fontSize: 15, flex: 1 }}>
              {' '}
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
      <Text
        style={{
          fontFamily: 'Outfit',
          textAlign: 'center',
          marginTop: 100,
          color: Colors.GRAY,
        }}
      >
        Developed by Yusuf @2024
      </Text>
    </View>
  )
}

export default MenuList

const styles = StyleSheet.create({})
