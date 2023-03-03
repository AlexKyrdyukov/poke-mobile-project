import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './Button.style';

type Props = {
  style: Record<string, string | number>[];
  onPress: () => void;
} & React.PropsWithChildren;

const Button: React.FC<Props> = (props) => {
  const [buttonContainerStyles, buttonTextStyles] = props.style;
  return (
    <TouchableHighlight
      activeOpacity={0.5}
      onPress={props.onPress}
      style={[buttonContainerStyles, styles.appButtonContainer] }
    >
      <Text
        style={[buttonTextStyles, styles.appButtonText]}
      >{props.children}
      </Text>
    </TouchableHighlight>
  );
};

export default Button;
