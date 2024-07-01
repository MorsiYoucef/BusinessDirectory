import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

const PopularBusinessCard = ({ business }) => {
  const router = useRouter()
  return (
    <TouchableOpacity
      onPress={() => router.push('/businessdetail/' + business?.id)}
      style={{
        marginLeft: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop: 10,
        display: 'flex',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        style={{ width: 200, height: 130, borderRadius: 15 }}
        source={{ uri: business.imageUrl }}
      />
      <View style={{ marginTop: 7, gap: 5 }}>
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
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
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
          <Text
            style={{
              fontFamily: 'Outfit',
              backgroundColor: Colors.PRIMARY,
              color: '#fff',
              padding: 4,
              fontSize: 12,
              borderRadius: 5,
            }}
          >
            {business.Category}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default PopularBusinessCard

const styles = StyleSheet.create({})
