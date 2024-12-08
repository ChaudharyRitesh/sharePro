import React from 'react';
import {View, Text, Button} from 'react-native';
import {useTestStore} from './src/store/teststore';

const App = () => {
  const {count, increment, decrement} = useTestStore();
  return (
    <View
      style={{
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 20,
      }}>
      <Text>{count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

export default App;
