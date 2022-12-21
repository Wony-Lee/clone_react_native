import React from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface SubMenu {
  id: number;
  title: string;
}
export interface Menu {
  key: number;
  description: string;
  subMenu: SubMenu[];
}
interface Props {
  list: Menu[];
  onPress: (item: Menu) => void;
}
const Footer: React.FC<Props> = ({list, onPress}) => {
  return (
    <SafeAreaView
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          height: 80,
          paddingHorizontal: 12,
          backgroundColor: 'black',
        },
        Platform.OS === 'ios' && {position: 'absolute', bottom: 0, height: 100},
      ]}>
      <View style={{flexDirection: 'row', borderWidth: 1}}>
        {list.map(item => (
          <TouchableOpacity
            key={item.key}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              height: 60,
              marginHorizontal: 10,
              borderWidth: 1,
              borderColor: 'red',
            }}
            onPress={() => onPress(item)}>
            <Text style={{color: 'white', fontSize: 13, fontWeight: '700'}}>
              {item.description}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Footer;

const styles = StyleSheet.create({});
