import React, {useEffect, useState} from 'react';

import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Footer, {Menu} from './components/Footer';
import AppLayout from './components/AppLayout';
import HeaderBar from './components/HeaderBar';
import UserItem from './components/UserItem';

const menuList = [
  {
    key: 1,
    description: 'Friends',
    subMenu: [
      {
        id: 1,
        title: 'Search',
      },
      {
        id: 2,
        title: 'Add',
      },
      {
        id: 3,
        title: 'Music',
      },
      {
        id: 4,
        title: 'Setting',
      },
    ],
  },
  {
    key: 2,
    description: 'Chat',
    subMenu: [
      {
        id: 1,
        title: 'Search',
      },
      {
        id: 2,
        title: 'AddChat',
      },
      {
        id: 3,
        title: 'OpenChat',
      },
      {
        id: 4,
        title: 'Setting',
      },
    ],
  },
  {
    key: 3,
    description: 'View',
    subMenu: [
      {
        id: 1,
        title: 'Search',
      },
      {
        id: 2,
        title: 'Setting',
      },
    ],
  },
  {
    key: 4,
    description: 'Shop',
    subMenu: [
      {
        id: 1,
        title: 'Qr',
      },
      {
        id: 2,
        title: 'Setting',
      },
    ],
  },
  {
    key: 5,
    description: 'More',
    subMenu: [
      {
        id: 1,
        title: 'Search',
      },
      {
        id: 2,
        title: 'Qr',
      },
      {
        id: 3,
        title: 'Setting',
      },
    ],
  },
];
const App = () => {
  const [menu, setMenu] = useState<Menu>({
    key: 0,
    description: '',
    subMenu: [],
  });
  const handleMenuSelector = (item: Menu) => {
    console.log(item);
    setMenu(item);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <View style={{flex: 1, paddingHorizontal: 12}}>
        <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
        <HeaderBar menu={menu} />
        <AppLayout>
          {menu.key === 1 && (
            <View style={{borderBottomWidth: 1, borderColor: '#ddd'}}>
              <UserItem />
            </View>
          )}
        </AppLayout>
      </View>
      <Footer list={menuList} onPress={handleMenuSelector} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
