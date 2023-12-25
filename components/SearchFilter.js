import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import {FontAwesome} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import colors from './screens/Constant/colors';

const SearchFilter = ({ icon, placeholder }) => {
  const navigation = useNavigation();
  const [input, setInput] = useState("");
  
  return (
    <Pressable
      onPress={() => navigation.navigate("Search")}
      style={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingVertical: 16,
        borderRadius: 8,
        marginVertical: 16,

        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 7,
      }}
    >
      <FontAwesome name={icon} size={20} color="#f96163" style={{ marginLeft: 10 }} />
        <TextInput style={{ paddingLeft: 12, fontSize: 16, color: "#808080" }}>
          {placeholder}
        </TextInput>
    </Pressable>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({

})

