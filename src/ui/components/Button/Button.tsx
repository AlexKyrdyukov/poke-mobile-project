import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import type { TextStyle, ViewStyle, TouchableOpacityProps, StyleProp } from 'react-native';

import styles from './Button.styles';

type Props = {
  textStyle: StyleProp<TextStyle>;
  containerStyle: StyleProp<ViewStyle>;
} & TouchableOpacityProps;

const Button: React.FC<Props> = ({
  children,
  textStyle,
  containerStyle,
  ...props }) => {
  return (
    <View
      style={[styles.appButtonContainer, containerStyle]}
    >
      <TouchableOpacity
        {...props}
      >
        <Text
          style={[styles.appButtonText, textStyle]}
        >{children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
