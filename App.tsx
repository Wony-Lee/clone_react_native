import React from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Footer from './components/Footer';
import AppLayout from './components/AppLayout';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <View style={{flex: 1}}>
        <AppLayout>
          <View>
            <Text>Hello</Text>
            <Text>Hello</Text>
            <Text>Hello</Text>
            <Text>Hello</Text>
            <Text>Hello</Text>
            <Text>Hello</Text>
          </View>
        </AppLayout>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
