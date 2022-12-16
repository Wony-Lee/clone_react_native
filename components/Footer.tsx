import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

interface Props {}
const Footer: React.FC<Props> = () => {
  return (
    <SafeAreaView
      style={{
        height: 60,
        borderWidth: 1,
        borderColor: 'red',
      }}>
      <View style={{flexDirection: 'row', borderWidth: 1}}>
        {[1, 2, 3, 4].map((item, idx) => (
          <Text key={idx} style={{color: 'red'}}>
            {item}
          </Text>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Footer;

const styles = StyleSheet.create({});
