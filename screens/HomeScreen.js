import { View, Text, StyleSheet, SafeAreaView, Button, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';
import CategoriesFilter from '../components/CategoriesFilter';
import MonMoiCard from '../components/MonMoiCard';
import YourChoiceFilter from '../components/YourChoiceFilter';

const HomeScreen = ({ navigation }) => {
  // const handleLogout = () => {
  //   // Xử lý logic đăng xuất ở đây
  //   navigation.navigate('Login');
  // };

  const [isPressed, setIsPressed] = useState(false);

  const handleXemThemPress = () => {
    // Xử lý chuyển trang tại đây
    navigation.navigate('Bạn đang thèm món gì?');
  };

  const handleXemThemMonMoi = () => {
    // Xử lý chuyển trang tại đây
    navigation.navigate('Món mới nhất');
  };

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>

      {/* render header */}
      <Header headerText={"Hi, Join"} headerIcon={"bell-o"}/>

      {/* Search Filter */}
      <SearchFilter icon ="search" placeholder={"Bạn đang thèm gì?"}/>

      <ScrollView>
        {/* trong tủ lạnh nhà bạn có gì?*/}
        <View style={{ marginTop: 22}}>
          <Text style={{ fontSize: 17, fontWeight: "bold"}}>Trong tủ lạnh nhà bạn có gì?</Text>
          {/* categories list */}
          <CategoriesFilter/>
        </View>
        
        {/* Bạn đang thèm món gì? */}
        <View style={{ marginTop: 10, }}>
          <Text style={{ fontSize: 17, fontWeight: "bold", marginBottom: 5 }}>Bạn đang thèm món gì?</Text>
          <TouchableOpacity
            onPress={handleXemThemPress}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            style={{
              position: 'absolute',
              marginLeft: 320,
              // marginTop: 5,
              backgroundColor: isPressed ? 'lightgray' : 'transparent',
              padding: 5,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: isPressed ? 'gray' : 'black' }}>Xem thêm</Text>
          </TouchableOpacity>
          {/* yourchoice list */}
          <YourChoiceFilter/>
        </View>
        
        {/* món mới nhất */}
        <View style={{ marginTop: 22, flex: 1 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold"}}>Món mới nhất</Text>
          {/* món mới list */}
          <MonMoiCard/>
          <Pressable
          onPress={handleXemThemMonMoi}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
            style={{
              width: '100%',
              backgroundColor: isPressed ? 'lightgray' : 'white',
              padding: 15,
              borderRadius: 7,
              marginTop: 10,
              marginLeft: "auto",
              marginRight: "auto",
              borderStyle: "solid",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "green",
                fontSize: 17,
                fontWeight: "bold",
              }}
            >
              Hiển thị tất cả
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

export default HomeScreen;
    
const styles = StyleSheet.create({
});


