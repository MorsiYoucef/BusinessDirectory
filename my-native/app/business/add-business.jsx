import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors'
import * as ImagePicker from 'expo-image-picker'
import RNPickerSelect from 'react-native-picker-select'
import { db, storage } from './../../configs/FirebaseConfigs'
import { getDocs, query, collection } from 'firebase/firestore'
import { ref, uploadBytes } from 'firebase/storage'

const AddBusiness = () => {
  const navigation = useNavigation()
  const [image, setImage] = useState(null)
  const [categoryList, setCategoryList] = useState([])

  const [name, setName] = useState()
  const [address, setAddress] = useState()
  const [contact, setContact] = useState()
  const [website, setWebsite] = useState()
  const [about, setAbout] = useState()
  const [category, setCategory] = useState()

  const onAddNewBusiness = async () => {
    const fileName = Date.now().toString() + '.jpg'
    const resp = await fetch(image)
    const blob = await resp.blob()

    const imageRef = ref(storage, 'business-app/' + fileName)

    try {
      await uploadBytes(imageRef, blob)
      console.log('File Uploaded...')
    } catch (error) {
      console.error('Error uploading file:', error)
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
          style={{ width: 350, height: 200, borderRadius: 20 }}
        />
      )}
      <View>
        <TextInput
          placeholder="Name"
          onChange={(v) => setName(v)}
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
          onChange={(v) => setAddress(v)}
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
          onChange={(v) => setContact(v)}
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
          onChange={(v) => setWebsite(v)}
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
          onChange={(v) => setAbout(v)}
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
        style={{
          padding: 10,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 5,
          marginTop: 10,
        }}
        onPress={() => onAddNewBusiness()}
      >
        <Text
          style={{ textAlign: 'center', fontFamily: 'Outfit', color: '#fff' }}
        >
          Add New Business
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddBusiness

const styles = StyleSheet.create({})
