import { View, Text, useWindowDimensions, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SceneMap, TabView } from 'react-native-tab-view'
import Profile from '../components/Profile'
import Settings from '../components/Settings'
import { colors } from '../data/Constant'

const renderScene = SceneMap ({
    first: Profile,
    second: Settings,
});

export default function Tabs() {
    const layout = useWindowDimensions()
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        {
            key: "first", 
            title: "PROFILE",
        },
        {
            key: "second", 
            title: "SETTINGS",
        }
    ]);

    const renderTabsBar = (props) => (
      <TabsBar
      {...props} 
      tabStyle={styles.tabStyle} 
      // indicatorStyle={{ backgroundColor: colors.COLOR_PRIMARY}}
      style={styles.tabsBar} // Thêm style cho tabsBar
      labelStyle={styles.labelStyle} // Thêm style cho label
      // activeColor={colors.COLOR_PRIMARY} 
      // inactiveColor={colors.COLOR_PRIMARY}
      renderLabel={({ route, color}) =>
        <Text style={{ color, ...styles.text}}>{route.title}</Text>
      }
      />
    );

  return (
    <TabView 
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex} 
      initialLayout={{width: layout.width}}
    />
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: "black",
  },
  tabsBar: {
    backgroundColor: 'black !important',
  },
  labelStyle: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
  }
});