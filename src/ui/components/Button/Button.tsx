import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './Button.style';

type Props = {
  onPress: () => void;
} & React.PropsWithChildren;

const Button: React.FC<Props> = (props) => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
    >
      <View
        style={styles.sectionContainer}
      >
        <Text
          style={styles.sectionBlock}
        >{props.children}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default Button;
