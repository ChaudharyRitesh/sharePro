import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import CustomText from '../../components/shared/CustomText';
import {navigate} from '../../utils/NavigationUtil';

const SplashScreen = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('HomeScreen');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <View style={styles.mainContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <CustomText style={styles.text}>Share Pro</CustomText>
      </View>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 170,
    height: 170,
    borderRadius: 100,
  },
  text: {
    marginTop: 20,
    fontFamily: 'Okra-Medium',
    fontSize: 22,
  },
});
