/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button} from 'react-native';
import {useCommonStore} from './src/store/common_store';
import {Colors} from './src/utils/Constants';
import {Icon} from './src/components/global/Icon';

const App = () => {
  const {theme, setTheme} = useCommonStore();

  return (
    <View
      style={{
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 20,
        backgroundColor: theme === 'light' ? 'white' : Colors.text,
      }}>
      <Text>Hello</Text>

      <Icon name="home" size={20} color="red" iconFamily="Ionicons" />

      <Button
        title="Toggle Theme"
        onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
    </View>
  );
};

export default App;
