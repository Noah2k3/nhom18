// MonMoiDetailScreen.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import MiCard from '../components/MiCard';

const MiDetailScreen = () => {
  const route = useRoute();
  const { item } = route.params;

  return (
    <View style={{ padding: 20}}>
      <MiCard/>
    </View>
  );
};

export default MiDetailScreen;
