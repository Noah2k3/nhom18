import { View, Text, Center, Image } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Header from '../components/Header';
import Tabs from '../components/Tabs';

function ProfileScreen () {
  return (
    <>
      <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 30, paddingBottom: 6, width: '100%', height: 210 }}>
        <Image 
          source={require('../assets/images/logo.png')}
          accessibilityLabel='profile'
          style={{ width: 110, height: 110 }}
          resizeMode='cover'
        />
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>Trà Giang</Text>
      <Text style={{ fontStyle: 'italic', fontSize: 10}}>Tham gia từ 11/05/2022</Text>
      </View>

      {/* TABS */}
      <Tabs/>
    </>
  );
}

export default ProfileScreen;