import {Platform, StyleSheet} from 'react-native';
import {Colors, screenWidth} from '../utils/Constants';

export const commonStyles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Platform.OS === 'android' ? 0 : 20,
    // marginTop: Platform.OS === 'android' ? 0 : 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  img: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.4,
    resizeMode: 'cover',
  },
  flexRowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexRowGap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});
