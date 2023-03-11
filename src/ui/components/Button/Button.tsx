import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import type { TextStyle, ViewStyle, TouchableOpacityProps, StyleProp } from 'react-native';
import useTheme from 'src/hooks/useTheme';
import styles from './Button.styles';

type Props = {
  textStyle: StyleProp<TextStyle>;
  containerStyle: StyleProp<ViewStyle>;
  title: string;
} & TouchableOpacityProps;

const Button: React.FC<Props> = ({
  title,
  textStyle,
  containerStyle,
  ...props }) => {
  const { theme } = useTheme();
  return (
    <View
      style={[styles({ theme }).appButtonContainer, containerStyle]}
    >
      <TouchableOpacity
        {...props}
      >
        <Text
          style={[styles({ theme }).appButtonText, textStyle]}
        >{title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
