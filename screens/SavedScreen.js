import { View, Text, SafeAreaView, Pressable, Image, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import {FontAwesome} from '@expo/vector-icons';
import { colors } from '../data/Constant'
import { useNavigation } from '@react-navigation/native';

const SavedScreen = () => {
  const navigation = useNavigation();
  const savings = useSelector((state) => state.saving.savings)
  console.log(savings)
  return (
    <SafeAreaView>
      <View style={{ padding: 10 }}>
        <FlatList 
          data={savings} 
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            // {savings.length > 0 && savings.map((item) => (
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
            // ))}
          )}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between"
          }}
          showsVerticalScrollIndicator={false}
        /> 
      </View>
    </SafeAreaView>
  )
}

export default SavedScreen