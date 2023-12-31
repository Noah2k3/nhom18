import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import { colors, nguyenlieuList } from '../data/Constant'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CategoriesCard = () => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList 
        data={nguyenlieuList} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("MonMoiDetail", {item: item})} 
            style={{ 
              backgroundColor: colors.COLOR_LIGHT,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 4},
              shadowOpacity: 0.2,
              shadowRadius: 7,
              borderRadius: 16,
              marginVertical: 16,
              alignItems: 'center',
              paddingHorizontal: 18,
              paddingVertical: 26,
            }}
          >
            <Image 
              source={item.image} 
              style={{ width: 150, height: 150, resizeMode: "center"}}/>
            <Text>{item.name}</Text>
            <View style={{ flexDirection: "row", marginTop: 8}}>
              <Text>{item.time}</Text>
              <Text> | </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginRight: 5 }}>{item.rating}</Text>
                <View>
                  <FontAwesome 
                    name="star" 
                    size={16} 
                    color={colors.COLOR_PRIMARY}/>
                </View>
              </View>
            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between"
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default CategoriesCard