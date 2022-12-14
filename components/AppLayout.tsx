import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import HeaderBar from './HeaderBar';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}
const AppLayout: React.FC<Props> = ({children}) => {
  const clientHeight = Dimensions.get('screen').height;
  console.log('clientHeight', clientHeight - 182);
  return (
    <View>
      <View
        style={{
          height: clientHeight,
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: 'blue',
        }}>
        {children}
      </View>
    </View>
  );
};

export default AppLayout;

const styles = StyleSheet.create({});
