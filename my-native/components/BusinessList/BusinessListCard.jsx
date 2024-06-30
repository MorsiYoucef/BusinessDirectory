import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

const BusinessListCard = ({ business }) => {
  const router = useRouter()
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        margin: 10,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
      }}
      onPress={() => router.push('/businessdetail/' + business.id)}
    >
      <Image
        source={{ uri: business.imageUrl }}
        style={{
          width: 150,
          height: 120,
          borderRadius: 15,
        }}
      />
      <View
        style={{ display: 'flex', gap: 4, flex: 1, justifyContent: 'center' }}
      >
        <Text style={{ fontFamily: 'Outfit-Bold', fontSize: 15 }}>
          {business.name}
        </Text>
        <Text
          style={{
            fontFamily: 'Outfit-Med',
            fontSize: 12,
            color: Colors.GRAY,
          }}
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
    </TouchableOpacity>
  )
}

export default BusinessListCard

const styles = StyleSheet.create({})
