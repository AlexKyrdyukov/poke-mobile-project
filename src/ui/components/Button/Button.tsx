import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

type PropsType = {
  text: string;
  onPress: () => void;
} & React.PropsWithChildren;

const Button: React.FC<PropsType> = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress}
    >
      <View>
        <Text>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
