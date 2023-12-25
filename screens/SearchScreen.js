import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons';
import SearchResults from '../components/SearchResults'
import { miList, monmoiList, nguyenlieuList } from '../data/Constant';
// import { useRoute } from '@react-navigation/native';

const SearchScreen = () => {
    const [input, setInput] = useState("");

    // Combine data from monmoiList and nguyenlieuList
    const allData = [...monmoiList, ...nguyenlieuList, ...miList];

  return (
    <SafeAreaView>
      <View 
        style={{ 
          padding: 10, 
          margin: 10, 
          flexDirection: "row", 
          alignItems: "center", 
          justifyContent: "space-between",
          borderColor: "#ffc72c",
          borderWidth: 4,
          borderRadius: 10, 
        }}
      >
        <TextInput value={input} onChangeText={(text) => setInput(text)} placeholder='Bạn đang thèm gì?'/>
        <Feather name="search" size={22} color="black" />
      </View>

      <SearchResults data={allData} input={input} setInput={setInput} />
    </SafeAreaView>
  )
}

export default SearchScreen