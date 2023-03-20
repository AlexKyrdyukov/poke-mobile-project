import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import type { TouchableOpacityProps, ViewStyle, StyleProp } from 'react-native';

import On from 'src/assets/icons/on.svg';
import Off from 'src/assets/icons/off.svg';

import styles from './CheckBox.styles';

type Props = {
  text: string;
  label: string;
  checkBoxState: boolean;
  containerCheckBoxStyle: StyleProp<ViewStyle>;
} & TouchableOpacityProps;

const CheckBox: React.FC<Props> = ({
  text,
  label,
  checkBoxState,
  containerCheckBoxStyle,
  ...props }) => {
  return (
    <View
      style={[styles().componentContainer,
        containerCheckBoxStyle]}
    >
      <TouchableOpacity
        {...props}
        style={styles().touchableContainer}
      >
        {checkBoxState
          ? <On width={40} height={40} />
          : <Off width={40} height={40} />}
      </TouchableOpacity>
      <Text>
        {text}: {label}
      </Text>
    </View >
  );
};

export default CheckBox;
