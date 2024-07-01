import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Share,
} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

import callIcon from './../../assets/images/icons8-téléphone-64.png'
import locationIcon from './../../assets/images/icons8-marqueur-48.png'
import webIcon from './../../assets/images/icons8-globe-64.png'
import shareIcon from './../../assets/images/icons8-partager-50.png'

const ActionButton = ({ business }) => {
  const actionButtonMenu = [
    {
      id: 1,
      name: 'call',
      icon: callIcon,
      url: 'tel:' + business?.contact,
    },
    {
      id: 2,
      name: 'Location',
      icon: locationIcon,
      url:
        'https://www.google.com/maps/search/?api=1&query=' + business?.address,
    },
    {
      id: 3,
      name: 'Web',
      icon: webIcon,
      url: business?.website,
    },
    {
      id: 4,
      name: 'Share',
      icon: shareIcon,
      url: business?.website,
    },
  ]

  const onPressHandle = (item) => {
    if (item.name == 'Share') {
      Share.share({
        message:
          business?.name +
          '\n Address:' +
          business.address +
          '\n Find more details on Business Directory App by Me! ',
      })
      return
    }
    Linking.openURL(item.url).catch((err) =>
      console.error('An error occurred', err)
    )
  }
  return (
    <View style={{ backgroundColor: '#fff', padding: 20 }}>
      {
        <FlatList
          data={actionButtonMenu}
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: 12,
          }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          numColumns={4}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => onPressHandle(item)}
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 4,
                marginRight: 60,
              }}
            >
              <Image source={item?.icon} style={{ width: 30, height: 30 }} />
              <Text style={{ fontFamily: 'Outfit-Med' }}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      }
    </View>
  )
}

export default ActionButton

const styles = StyleSheet.create({})
