import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UserItem = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: 60,
          height: 60,
          marginRight: 10,
          borderWidth: 1,
          borderColor: 'gold',
          borderRadius: 23,
        }}>
        <Text>아바타</Text>
      </View>
      <View>
        <Text>UserId</Text>
        <Text>Status Message</Text>
      </View>
    </View>
  );
};

export default UserItem;

const styles = StyleSheet.create({});
