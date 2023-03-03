import React from 'react';
import { View, TextInput, Image, TouchableOpacity, Text, Button } from 'react-native';
import type { ReactNode } from 'react';
import type { KeyboardTypeOptions, TextStyle, ImageSourcePropType, NativeSyntheticEvent, TextInputFocusEventData, ViewStyle, StyleProp } from 'react-native';
import type { FieldError } from 'react-hook-form';

import styles from './Input.style';

type Props = {
  placeHolder: string;
  errors: FieldError | undefined;
  type: KeyboardTypeOptions | undefined;
  secure?: boolean | undefined;
  logo: ImageSourcePropType;
  outerStyles: StyleProp<ViewStyle | TextStyle>[];
  value: string;
  hintText: string;
  onBlur: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
  onChangeText: ((text: string) => void) | undefined;
};

const Input: React.FC<Props> = (props) => {
  const [imageState, setImageState] = React.useState(true);
  const [selection, setSelection] = React.useState({ start: 0, end: 0 });

  const [errorSectionStyle, errorTextStyle] = props.outerStyles;
  const {
    placeHolder,
    errors,
    type,
    secure,
    logo,
    value,
    hintText,
    onBlur,
    onChangeText,
  } = props;
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
  const hide = require('src/ui/screens/SignIn/images/hide.png');

  const handleInputState = () => {
    setImageState(!imageState);
  };

  return (
    <View style={styles.componentContainer}>
      <View style={styles.container}>
        <View style={[
          styles.sectionStyle,
          !!errors?.message && errorSectionStyle]}
        >
          <TouchableOpacity
            onPress={handleInputState}
            disabled={!secure}
          >
            <Image
              source={
                secure && imageState
                  ? hide
                  : logo
              }
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TextInput
            secureTextEntry={secure && imageState}
            style={
              styles.textInputStyle}
            placeholder={placeHolder}
            underlineColorAndroid="transparent"
            onBlur={onBlur}
            onChangeText={onChangeText}
            value={value}
            keyboardType={type}
            autoFocus
          />
        </View>
      </View>
      <Text
        style={[
          styles.hintText,
          !!errors?.message &&
          errorTextStyle,
        ]}
      >{(errors?.message || hintText) as ReactNode}
      </Text>
    </View>
  );
};

export default Input;
