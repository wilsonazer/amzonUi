import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigation } from 'react-navigation'

import HomeScreen from './screens/HomeScreen'

export default function App() {
  return (
      <AppDrawerNavigation />
  );
}

const AppDrawerNavigation = new DrawerNavigation({
  HomeScreen : { screen: HomeScreen}
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
