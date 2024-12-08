// custom buttn component with custom styles and props.

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Colors} from '../../utils/Constants';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: object;
}

const CustomButton: React.FC<CustomButtonProps> = ({title, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style && style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.background,
    fontSize: 16,
  },
});

export default CustomButton;
