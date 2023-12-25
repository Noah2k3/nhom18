import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import {FontAwesome} from '@expo/vector-icons';

const Header = ({headerText, headerIcon, headerImage}) => {
  return (
    <View style={{ flexDirection: "row"}}>
      <Image 
        style={{ 
          flex: 1, 
          width: 40, 
          height: 40, 
          resizeMode: 'contain', 
          marginRight: 320, 
        }} 
        source={require("../assets/images/logo.png")}/>
      <FontAwesome name={headerIcon} size={24} color='#f96163'/>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  text1: {
    flex: 1,
    fontSize: 28,
    fontWeight: 'bold',
  }
});