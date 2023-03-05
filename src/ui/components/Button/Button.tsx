import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './Button.style';

type Props = {
  styles: Record<string, string | number>[];
  onPress: () => void;
  opacity: number;
} & React.PropsWithChildren;

const Button: React.FC<Props> = (props) => {
  const { opacity, children, onPress } = props;
  const [buttonContainerStyles, buttonTextStyles] = props.styles;
  return (
    <View
      style={[styles.appButtonContainer, buttonContainerStyles]}
    >
      <TouchableOpacity
        activeOpacity={opacity}
        onPress={onPress}
      >
        <Text
          style={[styles.appButtonText, buttonTextStyles]}
        >{children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
