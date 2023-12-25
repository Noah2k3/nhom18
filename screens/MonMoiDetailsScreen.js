import { View, Text, Image, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../data/Constant'
import { useDispatch } from 'react-redux';
import { savedRecipes } from '../SavedReducer';

const MonMoiDetailsScreen = ({navigation, route }) => {
  const { item } = route.params;

  console.log(item);

  const dispatch = useDispatch();
  const [isSaved, setIsSaved] = useState(false); // Trạng thái của hình trái tim
  React.useEffect(() => {
    // Nếu món ăn đã được lưu, thì set trạng thái và icon trái tim
    setIsSaved(route.params.isSaved);
  }, [route.params.isSaved]);

  const confirmSaving = () => {
    // dispatch(savedRecipes[route.params]);
    dispatch(savedRecipes(item));
    setIsSaved(!isSaved); // Đảo ngược trạng thái
    navigation.replace("Main", { isSaved: !isSaved }); // Truyền trạng thái lưu vào navigation
  }
  return (
    <View style={{ backgroundColor: item.color, flex: 1}}> 
      <SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16}}>
        <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <FontAwesome 
            name={"arrow-circle-left"} 
            size={28} 
            color="white" 
          />
        </Pressable>
        
        <Pressable onPress={confirmSaving}>
          <FontAwesome
            name={isSaved ? "heart" : "heart-o"}
            size={28}
            color={isSaved ? "red" : "white"}
          />
        </Pressable>
      </SafeAreaView>
      <View 
        style={{ 
          backgroundColor: "#fff", 
          flex: 1, 
          marginTop: 150, 
          borderTopLeftRadius: 56, 
          borderTopRightRadius: 56, 
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{ 
            // backgroundColor: "red", 
            height: 300, 
            width: 300 , 
            position: "absolute",
            top: -150,
          }}
        >
          <Image 
          source={item.image}
          style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>

        {/* Name */}
        <Text style={{ marginTop: 130, fontSize: 28, fontWeight: "bold" }}>
          {item.name}
        </Text>

        <View style={{ flex: 1}}>
          <ScrollView showsHorizontalScrollIndicator={false}>
            {/* Description */}
            <Text style={{ fontSize: 20, marginVertical: 16 }}>
              {item.description}
            </Text>

            {/* Time, Difficulty, Calories */}
            <View 
              style={{ 
                flexDirection: "row", 
                justifyContent: "space-between",
                width: "100%"
              }}
            >
              <View 
                style={{ 
                  backgroundColor: "rgba(255, 0, 0, 0.38)",
                  paddingHorizontal: 26,
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: "center"
                }}
              >
                <Text style={{ fontSize: 40 }}>⏰</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.time}
                </Text>
              </View>
              <View 
                style={{ 
                  backgroundColor: "rgba(135, 206, 235, 0.8)",
                  paddingHorizontal: 26,
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: "center"
                }}
              >
                <Text style={{ fontSize: 40 }}>🥣</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.difficulty}
                </Text>
              </View>
              <View 
                style={{ 
                  backgroundColor: "rgba(255, 165, 0, 0.48)",
                  paddingHorizontal: 26,
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: "center"
                }}
              >
                <Text style={{ fontSize: 40 }}>🔥</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.calories}
                </Text>
              </View>

            </View>

            {/* Ingredients */}
            <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
              <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}>
                Nguyên liệu: 
              </Text>
              {item.ingredients && item.ingredients.map((ingredient) => {
              {/* {item.ingredients.map((ingredient) => { */}
                return (
                  <View 
                    style={{ 
                      flexDirection: "row", 
                      alignItems: "center",
                      marginVertical: 4,
                    }}
                  >
                    <View 
                      style={{ 
                        backgroundColor: "red", 
                        height: 10, 
                        width: 10, 
                        borderRadius: 5
                      }}
                    >
                    </View>
                    <Text style={{ fontSize: 18, marginLeft: 6}}>
                      {ingredient}
                    </Text>
                  </View>
                )
              })}
            </View>

            {/* Steps */}
            <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
              <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}>
                Các bước làm: 
              </Text>
              {/* {item.steps.map((step, index) => { */}
              {item.steps && item.steps.map((step, index) => {
                return (
                  <Text 
                    style={{ 
                      fontSize: 18, 
                      marginLeft: 6,
                      marginVertical: 6,
                    }}
                  >
                    {`${index + 1}) ${step}`}
                  </Text>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default MonMoiDetailsScreen