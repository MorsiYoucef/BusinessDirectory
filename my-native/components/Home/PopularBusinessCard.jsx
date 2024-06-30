import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const PopularBusinessCard = ({ business }) => {
  return (
    <View
      style={{
        marginLeft: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        style={{ width: 200, height: 130, borderRadius: 15 }}
        source={{ uri: business.imageUrl }}
      />
      <View style={{ marginTop: 7 }}>
        <Text style={{ fontFamily: 'Outfit-Bold', fontSize: 17 }}>
          {business.name}
        </Text>
        <Text
          style={{ fontFamily: 'Outfit', fontSize: 13, color: Colors.GRAY }}
        >
          {business.address}
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Image
            style={{
              height: 20,
              width: 20,
              display: 'flex',
              alignContent: 'center',
            }}
            source={require('./../../assets/images/icons8-étoile-48.png')}
          />
          <Text style={{ fontFamily: 'Outfit-Bold', marginTop: 4 }}>4.5</Text>
        </View>
      </View>
    </View>
  )
}

export default PopularBusinessCard

const styles = StyleSheet.create({})
