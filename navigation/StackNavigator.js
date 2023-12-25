//rnfes
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';   //ctrl + cach
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import SavedScreen from '../screens/SavedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import MonMoiDetailsScreen from '../screens/MonMoiDetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import CategoriesFilter from '../components/CategoriesFilter';
import CategoriesDetailScreen from '../screens/CategoriesDetailScreen';
import YourChoiceCard from '../components/YourChoiceFilter';
import MiDetailScreen from '../screens/MiDetailScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import ThemScreen from '../screens/ThemScreen';
import ThemMonMoiScreen from '../screens/ThemMonMoiScreen';


const StackNavigator = () => {
    const Tab = createBottomTabNavigator(); 
    const Stack = createNativeStackNavigator();

    function BottomTabs(){
        return(
            <Tab.Navigator>
              <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                  tabBarLabel: "Home", 
                  headerShown: false, 
                  tabBarIcon: ({focused}) => 
                    focused ? (
                      <Entypo name="home" size={24} color="blue" />
                    ) : (
                      <AntDesign name="home" size={24} color="black" />
                    ),
                }}
              />

              <Tab.Screen 
                name="Search" 
                component={SearchScreen} 
                options={{
                  tabBarLabel: "Search", 
                  headerShown: false, 
                  tabBarIcon: ({focused}) => 
                    focused ? (
                      <AntDesign name="search1" size={24} color="blue" />
                    ) : (
                      <Ionicons name="search-outline" size={24} color="black" />
                    ),
                }}
              />

              <Tab.Screen 
                name="Saved" 
                component={SavedScreen} 
                options={{
                  tabBarLabel: "Saved", 
                  // headerShown: false, 
                  tabBarIcon: ({focused}) => 
                    focused ? (
                      <AntDesign name="heart" size={24} color="blue" />
                    ) : (
                      <AntDesign name="hearto" size={24} color="black" />
                    ),
                  title: "Saved Items",  // Đặt tiêu đề cho trang
                }}
              />

              <Tab.Screen 
                name="Profile" 
                component={ProfileScreen} 
                options={{
                  tabBarLabel: "Profile", 
                  headerShown: false, 
                  tabBarIcon: ({focused}) => 
                    focused ? (
                      <Ionicons name="person" size={24} color="blue" />
                    ) : (
                      <Ionicons name="ios-person-outline" size={24} color="black" />
                    ),
                }}
              />
            </Tab.Navigator>
        )
    }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}} >
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} /> 
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} /> 
        <Stack.Screen name="Main" component={BottomTabs} options={{headerShown: false}} /> 
        <Stack.Screen name="MonMoiDetail" component={MonMoiDetailsScreen} options={{headerShown: false}} />
        <Stack.Screen name="CategoriesFilter" component={CategoriesFilter} />
        <Stack.Screen name="Thịt gà" component={CategoriesDetailScreen} />
        <Stack.Screen name="YourChoiceCard" component={YourChoiceCard} />
        <Stack.Screen name="Mì" component={MiDetailScreen} />
        <Stack.Screen name="Bạn đang thèm món gì?" component={ThemScreen} />
        <Stack.Screen name="Món mới nhất" component={ThemMonMoiScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})