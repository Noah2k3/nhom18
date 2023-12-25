import { View, Text, FlatList, Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { colors, yourchoiceList } from '../data/Constant';

const YourChoiceCard = () => {
  const navigation = useNavigation();

  return (
    <FlatList 
        data={yourchoiceList} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("Mì", {item: item})} 
            style={{ 
              flex: 1,
              marginHorizontal: 5,
              marginTop: 10
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

const styles = StyleSheet.create({
});

export default YourChoiceCard