import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HeaderStatusBar from './components/HeaderStatusBar';

const App = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'black',
      }}>
      <HeaderStatusBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
