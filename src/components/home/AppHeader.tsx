import {
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Svg, {Defs, Path, Stop, LinearGradient} from 'react-native-svg';
import {homeHeaderStyles} from '../../styles/homeHeaderStyles';
import {commonStyles} from '../../styles/commonStyles';
import {Icon} from '../global/Icon';
import {screenHeight, screenWidth, svgPath} from '../../utils/Constants';

const AppHeader = () => {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView />
      <View style={[commonStyles.flexRowBetween, homeHeaderStyles.container]}>
        <TouchableOpacity>
          <Icon name="menu" iconFamily="Ionicons" size={24} color="white" />
        </TouchableOpacity>

        <Image
          source={require('../../assets/images/logo_t.png')}
          style={homeHeaderStyles.logo}
        />

        <TouchableOpacity>
          <Image
            source={require('../../assets/images/profile.jpg')}
            style={homeHeaderStyles.profile}
          />
        </TouchableOpacity>
      </View>
      <Svg
        height={screenHeight * 0.18}
        width={screenWidth}
        viewBox="0 0 1440 220"
        style={homeHeaderStyles.curve}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0%" stopColor="#007AFF" stopOpacity="1" />
            <Stop offset="100%" stopColor="#007AFF" stopOpacity="0" />
          </LinearGradient>
        </Defs>

        <Path fill="#80BFFF" d={svgPath} />
        <Path fill="url(#grad)" d={svgPath} />
      </Svg>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#007AFF',
    paddingTop:
      Platform.OS === 'android'
        ? StatusBar.currentHeight && StatusBar.currentHeight - 40
        : 0,
  },
});
