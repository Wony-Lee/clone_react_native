import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Menu} from './Footer';

interface Props {
  menu: Menu;
}
const HeaderBar: React.FC<Props> = ({menu}) => {
  return (
    <>
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
            justifyContent: 'space-between',
            width: '50%',
            // paddingHorizontal: 16,
          }}>
          <Text
            style={{
              color: 'white',
              marginRight: 15,
              fontSize: 20,
              fontWeight: '700',
            }}>
            {menu.description}
          </Text>
          {/*{menu.subMenu.map(item => (*/}
          {/*  <Text*/}
          {/*    key={item.id}*/}
          {/*    style={{*/}
          {/*      color: 'white',*/}
          {/*      marginRight: 15,*/}
          {/*      fontSize: 20,*/}
          {/*      fontWeight: '700',*/}
          {/*    }}>*/}
          {/*    {item.id}*/}
          {/*  </Text>*/}
          {/*))}*/}
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: 'red',
            justifyContent: 'space-between',
          }}>
          {menu.subMenu.map(item => (
            <Text
              key={item.id}
              style={{
                flex: 1,
                color: 'white',
                textAlign: 'center',
                fontWeight: '700',
              }}>
              {item.title}
            </Text>
          ))}
        </View>
      </View>
    </>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({});
