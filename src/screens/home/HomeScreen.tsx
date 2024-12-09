import {ScrollView, StatusBar, Text, View} from 'react-native';
import React from 'react';
import AppHeader from '../../components/home/AppHeader';
import {commonStyles} from '../../styles/commonStyles';
import BottomTabar from '../../components/home/BottomTabar';

const HomeScreen = () => {
  return (
    <View style={commonStyles.baseContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#007AFF" />
      <AppHeader />
      <ScrollView contentContainerStyle={{paddingBottom: 100, padding: 30}}>
        <View>
          <Text>Some Components</Text>
        </View>
      </ScrollView>
      <BottomTabar />
    </View>
  );
};

export default HomeScreen;
