// MonMoiDetailScreen.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import CategoriesCard from '../components/CategoriesCard';

const CategoriesDetailScreen = () => {
  const route = useRoute();
  const { item } = route.params;

  return (
    <View style={{ padding: 20}}>
      <CategoriesCard/>
    </View>
  );
};

export default CategoriesDetailScreen;
