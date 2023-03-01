import { View, Text } from 'react-native';
import React from 'react';

import style from './SignUp.style';

const SignUp: React.FC = () => {
  return (
    <View style={style.sectionContainer}>
      <Text>SignUp</Text>
    </View>
  );
};

export default React.memo(SignUp);
