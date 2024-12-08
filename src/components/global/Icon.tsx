// custom icon component with custom styles and props.

import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';

interface IconProps {
  name: string;
  size: number;
  color?: string;
  iconFamily?: 'EvilIcons' | 'Ionicons' | 'MaterialIcons';
}

export const Icon: React.FC<IconProps> = ({name, size, color, iconFamily}) => {
  return (
    <>
      {iconFamily === 'EvilIcons' && (
        <EvilIcons name={name} size={RFValue(size)} color={color} />
      )}
      {iconFamily === 'MaterialIcons' && (
        <MaterialIcons name={name} size={RFValue(size)} color={color} />
      )}
      {iconFamily === 'Ionicons' && (
        <Ionicons name={name} size={RFValue(size)} color={color} />
      )}
    </>
  );
};
