import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { themList } from '../data/Constant'
import { useNavigation } from '@react-navigation/native';

const ThemScreen = () => {
  const navigation = useNavigation();
  return (
    <FlatList 
        data={themList} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("Mì", {item: item})} 
            style={{ 
              flex: 1,
              marginHorizontal: 10,
              margin: 10
            }}
          >
            <Image 
              source={item.image} 
              style={{ 
                width: '100%', 
                height: 120, 
                borderRadius: 8,
              }}
            />
            <Text 
              style={{ 
                // color: 'white',
                fontWeight: 'bold', 
                fontSize: 16,
                marginTop: 95, 
                position: 'absolute', 
                marginLeft: 15 
              }}
            >
              {item.name}
            </Text>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between"
        }}
        showsVerticalScrollIndicator={false}
      />
  )
}

export default ThemScreen