import { View, Text } from 'react-native';
import React from 'react';

type PropsType = {
  placeHolder: string;
  
  value: number | string;
};

const Input: React.FC<PropsType> = (props) => {
  return (
    <View>
      <TextInput 
        value={props.value}
      />
    </View>
  );
};

export default Input;
