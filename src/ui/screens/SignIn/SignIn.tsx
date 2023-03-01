import React from 'react';
import { View, Text } from 'react-native';

import style from './SignIn.style';

const SignIn: React.FC = () => {
  return (
    <View style={style.sectionContainer}>
      <Text>SignIn</Text>
    </View>
  );
};

export default React.memo(SignIn);
