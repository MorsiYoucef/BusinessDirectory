import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors'
import * as ImagePicker from 'expo-image-picker'
import RNPickerSelect from 'react-native-picker-select'
import { db, storage } from './../../configs/FirebaseConfigs'
import { getDocs, query, collection, doc, setDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useUser } from '@clerk/clerk-expo'

const AddBusiness = () => {
  const navigation = useNavigation()
  const [image, setImage] = useState(null)
  const [categoryList, setCategoryList] = useState([])
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [contact, setContact] = useState('')
  const [website, setWebsite] = useState('')
  const [about, setAbout] = useState('')
  const [category, setCategory] = useState('')
  const { user } = useUser()
  const [loading, setLoading] = useState(false)

  const onAddNewBusiness = async () => {
    setLoading(true)
    const fileName = Date.now().toString() + '.jpg'
    const resp = await fetch(image)
    const blob = await resp.blob()

    const imageRef = ref(storage, 'business-app/' + fileName)

    uploadBytes(imageRef, blob)
      .then((snapshot) => {
        console.log('File Uploaded...')
      })
      .then((resp) => {
        getDownloadURL(imageRef).then(async (downloadUrl) => {
          console.log(downloadUrl)
          saveBusinessDetail(downloadUrl)
        })
      })

    setLoading(false)
  }

  const saveBusinessDetail = async (imageUrl) => {
    try {
      await setDoc(doc(db, 'BusinessList', Date.now().toString()), {
        name: name,
        address: address,
        contact: contact,
        website: website,
        about: about,
        category: category,
        username: user?.fullName,
        userEmail: user?.emailAddresses,
        userImage: user?.imageUrl,
        imageUrl: imageUrl,
      })
      ToastAndroid.show('New Business Added...', ToastAndroid.BOTTOM)
    } catch (error) {
      console.error('Error saving business details: ', error)
    }
  }
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Add New Business',
      headerShown: true,
    })
    GetCategoryList()
  }, [])

  const GetCategoryList = async () => {
    setCategoryList([])
    const q = query(collection(db, 'Category'))
    const snapShot = await getDocs(q)

    snapShot.forEach((doc) => {
      console.log(doc.data())
      setCategoryList((prev) => [
        ...prev,
        {
          label: doc.data().name,
          value: doc.data().name,
        },
      ])
    })
  }

  const onImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    })
    setImage(result?.assets[0].uri)
    console.log(result)
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontFamily: 'Outfit-Bold', fontSize: 25 }}>
        Add New Business
      </Text>
      <Text style={{ fontFamily: 'Outfit', color: Colors.GRAY }}>
        Fill all details in order to add new business
      </Text>
      {!image ? (
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => onImagePick()}
        >
          <Image
            source={require('./../../assets/images/icons8-camera-94.png')}
          />
        </TouchableOpacity>
      ) : (
        <Image
          source={{ uri: image }}
          style={{ width: 100, height: 100, borderRadius: 20 }}
        />
      )}
      <View>
        <TextInput
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            fontSize: 17,
            backgroundColor: '#fff',
            marginTop: 10,
            borderColor: Colors.PRIMARY,
            fontFamily: 'Outfit',
          }}
        ></TextInput>
        <TextInput
          placeholder="Address"
          onChangeText={(text) => setAddress(text)}
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            fontSize: 17,
            backgroundColor: '#fff',
            marginTop: 10,
            borderColor: Colors.PRIMARY,
            fontFamily: 'Outfit',
          }}
        ></TextInput>
        <TextInput
          placeholder="contact"
          onChangeText={(text) => setContact(text)}
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            fontSize: 17,
            backgroundColor: '#fff',
            marginTop: 10,
            borderColor: Colors.PRIMARY,
            fontFamily: 'Outfit',
          }}
        ></TextInput>
        <TextInput
          placeholder="Website"
          onChangeText={(text) => setWebsite(text)}
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            fontSize: 17,
            backgroundColor: '#fff',
            marginTop: 10,
            borderColor: Colors.PRIMARY,
            fontFamily: 'Outfit',
          }}
        ></TextInput>
        <TextInput
          multiline
          onChangeText={(text) => setAbout(text)}
          numberOfLines={5}
          placeholder="about"
          te
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            fontSize: 17,
            backgroundColor: '#fff',
            marginTop: 10,
            borderColor: Colors.PRIMARY,
            fontFamily: 'Outfit',
          }}
        ></TextInput>
      </View>
      <View>
        <RNPickerSelect
          onValueChange={(value) => setCategory(value)}
          items={categoryList}
        />
      </View>
      <TouchableOpacity
        disabled={loading}
        style={{
          padding: 10,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 5,
          marginTop: 10,
        }}
        onPress={() => onAddNewBusiness()}
      >
        {loading ? (
          <ActivityIndicator size={'large'} color={'#fff'} />
        ) : (
          <Text
            style={{ textAlign: 'center', fontFamily: 'Outfit', color: '#fff' }}
          >
            Add New Business
          </Text>
        )}
      </TouchableOpacity>
    </View>
  )
}

export default AddBusiness

const styles = StyleSheet.create({})
