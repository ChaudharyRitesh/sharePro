import React, {FC} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {commonStyles} from '../../styles/commonStyles';
interface SendReceiveButtonProps {
  imageSrc: any;
  onPress: () => void;
}

const SendReceiveButton: FC<SendReceiveButtonProps> = ({imageSrc, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={[commonStyles.img, styles.img]} source={imageSrc} />
    </TouchableOpacity>
  );
};

export default SendReceiveButton;

const styles = StyleSheet.create({
  img: {
    borderRadius: 10,
  },
});
