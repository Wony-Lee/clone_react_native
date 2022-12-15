import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface Props {}
const HeaderStatusBar: React.FC<Props> = () => {
  const menu = ['Chat', 'OpenChat'];
  return (
    <>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'black',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '50%',
            paddingHorizontal: 16,
          }}>
          {menu.map((item, idx) => (
            <Text
              style={{
                color: 'white',
                marginRight: 15,
                fontSize: 20,
                fontWeight: '700',
              }}>
              {item}
            </Text>
          ))}
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: 'red',
            justifyContent: 'space-between',
          }}>
          {[1, 2, 3, 4].map((item, idx) => (
            <Text
              key={idx}
              style={{
                flex: 1,
                color: 'white',
                textAlign: 'center',
                fontWeight: '700',
              }}>
              {item}
            </Text>
          ))}
        </View>
      </View>
    </>
  );
};

export default HeaderStatusBar;

const styles = StyleSheet.create({});
