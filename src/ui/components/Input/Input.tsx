import React from 'react';
import { View, TextInput, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import type { KeyboardTypeOptions, TextStyle } from 'react-native';
import type { Control, FieldError, FieldValues } from 'react-hook-form';

import { Controller } from 'react-hook-form';

import styles from './Input.style';

type Props = {
  placeHolder: string;
  control: Control<FieldValues>;
  name: string;
  errors: FieldError | undefined;
  type: KeyboardTypeOptions | undefined;
  secure?: boolean | undefined;
  logo?: string;
  style?: TextStyle;
};

const Input: React.FC<Props> = (props) => {
  const { name } = props;
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
  const a = require('src/ui/screens/SignIn/images/hide.png');
  return (
    // <View
    //   style={styles.inputBlock}
    // >
    //       <TextInput
    //         style={styles.inputField}
    //         // onBlur={onBlur}
    //         // onChangeText={onChange}
    //         // value={value}
    //         placeholder={props.placeHolder}
    //         keyboardType={props.type}
    //         secureTextEntry={props.secure}
    //       />
    // </View>
    // eslint-disable-next-line no-inline-styles/no-inline-styles
    <View style={[props.style, styles.componentContainer]}>
      <View style={styles.container}>
        <View style={styles.sectionStyle}>
          <Image
            source={
              a
            }
            style={styles.imageStyle}
          />
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter Your Name Here"
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
    </View>
  );
};

export default Input;
