import React from 'react';
import { View, Text } from 'react-native';

import style from './ChangePassword.style';

const ChangePassword: React.FC = () => {
  return (
    <View style={style.sectionContainer}>
      <Text>ChangePassword</Text>
    </View>
  );
};

export default React.memo(ChangePassword);
