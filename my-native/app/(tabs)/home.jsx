import { StyleSheet, View } from 'react-native'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'

const home = () => {
  return (
    <View>
      {/* Header */}
      <Header />

      {/* Slider */}
      <Slider />

      {/* Category */}
      <Category />

      {/* Popoular Business List */}
    </View>
  )
}

export default home

const styles = StyleSheet.create({})
