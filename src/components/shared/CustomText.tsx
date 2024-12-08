// custom text component with custom styles and props like onLayout, numberOfLines, etc.

import React from 'react';
import {Text, StyleSheet, TextStyle, Platform} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../utils/Constants';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7';
type PlatformType = 'ios' | 'android';

interface CustomTextProps {
  variant?: Variant;
  fontFamily?:
    | 'Okra-Bold'
    | 'Okra-Regular'
    | 'Okra-Light'
    | 'Okar-Medium'
    | 'Okra-Black';
  fontSize?: number;
  color?: string;
  style?: TextStyle | TextStyle[];
  children: React.ReactNode;
  numberOfLines?: number;
  onLayout?: (event: any) => void;
}

const fontSizeMap: Record<Variant, Record<PlatformType, number>> = {
  h1: {android: 24, ios: 22},
  h2: {android: 22, ios: 20},
  h3: {android: 20, ios: 18},
  h4: {android: 18, ios: 16},
  h5: {android: 16, ios: 14},
  h6: {android: 14, ios: 12},
  h7: {android: 12, ios: 10},
};

const CustomText: React.FC<CustomTextProps> = ({
  variant = 'h1',
  fontFamily = 'Okra-Regular',
  fontSize,
  color,
  style,
  children,
  numberOfLines,
  onLayout,
  ...props
}) => {
  let computedFontSize: number =
    Platform.OS === 'android'
      ? RFValue(fontSize || 12)
      : RFValue(fontSize || 10);

  if (!fontSize && variant) {
    const defaultFontSize = fontSizeMap[variant][Platform.OS as PlatformType];
    computedFontSize = RFValue(fontSize || defaultFontSize);
  }

  const fontFamilyStyle = {fontFamily};

  return (
    <Text
      {...props}
      style={[
        styles.text,
        {color: color || Colors.text, fontSize: computedFontSize},
        fontFamilyStyle,
        style,
      ]}
      numberOfLines={numberOfLines !== undefined ? numberOfLines : undefined}
      onLayout={onLayout}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
  },
});

export default CustomText;
