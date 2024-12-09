/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StatusBar, View} from 'react-native';
import React from 'react';
import AppHeader from '../../components/home/AppHeader';
import {commonStyles} from '../../styles/commonStyles';
import BottomTabar from '../../components/home/BottomTabar';
import SendReceiveButton from '../../components/home/SendReceiveButton';
import {useCommonStore} from '../../store/common_store';

const HomeScreen = () => {
  const {openModal, setOpenModal} = useCommonStore();

  console.log('openModal state: ', openModal);

  return (
    <View style={commonStyles.baseContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#007AFF" />
      <AppHeader />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
          paddingTop: 70,
          paddingHorizontal: 25,
        }}>
        <View style={commonStyles.flexRowBetween}>
          <SendReceiveButton
            onPress={() => setOpenModal(true)}
            imageSrc={require('../../assets/icons/send1.jpg')}
          />
          <SendReceiveButton
            onPress={() => console.log('sss')}
            imageSrc={require('../../assets/icons/receive1.jpg')}
          />
        </View>
      </ScrollView>
      <BottomTabar />
    </View>
  );
};

export default HomeScreen;
