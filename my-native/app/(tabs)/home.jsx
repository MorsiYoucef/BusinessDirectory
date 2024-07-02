import { ScrollView, StyleSheet, View } from 'react-native'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'
import PopularBusiness from '../../components/Home/PopularBusiness'

const home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Header */}
      <Header />
//youcef morsi ma kayen walo !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      {/* Slider */}
      <Slider />

      {/* Category */}
      <Category />

      {/* Popoular Business List */}
      <PopularBusiness />
    </ScrollView>
  )
}

export default home

const styles = StyleSheet.create({})
