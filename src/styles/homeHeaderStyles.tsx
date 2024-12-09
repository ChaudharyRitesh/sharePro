import {Platform, StyleSheet} from 'react-native';
import {Colors, screenHeight, screenWidth} from '../utils/Constants';

export const homeHeaderStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.primary,
  },
  container: {
    padding: 10,
    zIndex: 4,
  },
  curve: {
    position: 'absolute',
    bottom: -screenHeight * 0.09,
    zIndex: 3,
    width: '100%',
  },
  logo: {
    width: Platform.OS === 'android' ? screenWidth * 0.3 : screenWidth * 0.4,
    height:
      Platform.OS === 'android' ? screenHeight * 0.038 : screenHeight * 0.048,
    resizeMode: 'contain',
  },
  profile: {
    width: 35,
    height: 35,
    borderRadius: 140,
    resizeMode: 'cover',
  },
});
