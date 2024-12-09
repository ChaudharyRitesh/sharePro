import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {bottomTabStyles} from '../../styles/bottomTabStyle';
import {Icon} from '../global/Icon';
import {navigate} from '../../utils/NavigationUtil';

const BottomTabar = () => {
  const [, setVisible] = useState<boolean>(false);
  return (
    <View style={bottomTabStyles.container}>
      <TouchableOpacity onPress={() => navigate('ReceivedFileScreen')}>
        <Icon name="apps-sharp" iconFamily="Ionicons" color="#333" size={24} />
      </TouchableOpacity>
      <TouchableOpacity
        style={bottomTabStyles.qrCode}
        onPress={() => setVisible(true)}>
        <Icon name="qr-code" iconFamily="Ionicons" color="#fff" size={28} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('HomeScreen')}>
        <Icon name="beer-sharp" iconFamily="Ionicons" color="#333" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default BottomTabar;
