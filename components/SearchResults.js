import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import {FontAwesome} from '@expo/vector-icons';
import { colors } from '../data/Constant'
import { useNavigation } from '@react-navigation/native';

const SearchResults = ({data, input, setInput}) => {
  const navigation = useNavigation();
  return (
    <View style={{ padding: 10 }}>
      <FlatList 
        data={data} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => {
          if(item.name.toLowerCase().includes(input.toLowerCase())){
            if(input === ""){
              return null;
            }
            return (
              <Pressable 
                onPress={() => {
                  setInput(item.name);
                  navigation.navigate("MonMoiDetail", {
                    item: item
                  })
                }} 
                style={{
                  flexDirection: "row", 
                  alignItems: "center" 
                }}
              >
                <Image 
                  source={item.image} 
                  style={{ width: 150, height: 150, resizeMode: "center" }}
                />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
                  <Text style={{ marginVertical: 10, fontSize: 15 }}>{item.time}</Text>
                  <View style={{ flexDirection: "row",  }}>
                    <Text style={{ marginRight: 5, marginBottom: 10, fontSize: 15 }}>{item.rating}</Text>
                    <View>
                      <FontAwesome 
                        name="star" 
                        size={17} 
                        color={colors.COLOR_PRIMARY}/>
                    </View>
                  </View>
                </View>
              </Pressable>
            )
          }
        }}
      />
    </View>
  )
}

export default SearchResults