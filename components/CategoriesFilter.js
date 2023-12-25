import { View, Text,  Pressable, FlatList } from 'react-native'
import React from 'react'
import { categories, colors } from '../data/Constant'
import { useNavigation } from '@react-navigation/native';

const CategoriesFilter = () => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList 
        horizontal
        showsVerticalScrollIndicator={false}
        data={categories} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("Thịt gà", {item: item})}
            style={{
              backgroundColor: colors.COLOR_LIGHT,
              marginRight: 20,
              borderRadius: 8,
              paddingHorizontal: 10,
              paddingVertical: 8,

              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
              marginVertical: 16,
              width: 100,
              height: 35,
            }}
          >
          <Text style={{ textAlign: 'center' }}>{item.category}</Text>
          </Pressable>
        )}
      />
    </View>
  )
}

export default CategoriesFilter
