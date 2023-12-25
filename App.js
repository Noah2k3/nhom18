import { View, Text, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import StackNavigator from './navigation/StackNavigator'

import store from './store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <>
    <Provider store={store}>
      <StackNavigator/>
    </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
