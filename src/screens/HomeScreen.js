import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import Products from '../components/Products';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex:1, paddingBottom:50}}>
    <View style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>
      <Text style={{fontSize:18, fontWeight:"bold", textAlign:"center", paddingVertical:15}}>Welcome to Fake API Store</Text>
      <AntDesign name="shoppingcart" size={28} color="orange" />
    </View>
  <Products />
    </SafeAreaView>
  )
}

export default HomeScreen