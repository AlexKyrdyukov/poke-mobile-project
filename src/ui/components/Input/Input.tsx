import React from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';

import type { ReactNode } from 'react';
import type { KeyboardTypeOptions, TextStyle, ImageSourcePropType, NativeSyntheticEvent, TextInputFocusEventData, ViewStyle, TextInputProps, StyleProp } from 'react-native';
import type { FieldError } from 'react-hook-form';
import { images } from 'src/consts/images';

import styles from './Input.styles';

type Props = {
  placeholder: string;
  errors: FieldError | undefined;
  type: KeyboardTypeOptions | undefined;
  secure?: boolean | undefined;
  logo: ImageSourcePropType;
  containerStyle: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  containerErrorStyle: StyleProp<ViewStyle>;
  textErrorStyle: StyleProp<TextStyle>;
  value?: string;
  hintText: string;
  onBlur: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void);
} & TextInputProps;

const Input: React.FC<Props> = ({
  containerStyle,
  textStyle,
  containerErrorStyle,
  textErrorStyle,
  errors,
  secure,
  logo,
  hintText,
  onBlur,
  ...props }) => {
  const [inputState, setInputState] = React.useState({
    visiblePassword: true,
    inputFocus: false,
  });

  const handleVisibleText = () => {
    setInputState({
      ...inputState,
      visiblePassword: !inputState.visiblePassword,
    });
  };
  const handleFocus = () => {
    setInputState({
      ...inputState,
      inputFocus: !inputState.inputFocus,
    });
  };

  const handleBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onBlur(event);
    setInputState({
      ...inputState,
      inputFocus: !inputState.inputFocus,
    });
  };

  return (
    <View
      style={[styles.componentContainer, containerStyle]}
    >
      <View
        style={[
          styles.inputRowContainer,
          inputState.inputFocus && styles.inputFocusStyle,
          !!errors?.message && containerErrorStyle]}
      >
        <TouchableOpacity
          onPress={handleVisibleText}
          disabled={!secure}
        >
          <Image
            source={
              secure && inputState.visiblePassword
                ? images.inputComponent.hide
                : logo
            }
            style={styles.imageStyle}
          />
        </TouchableOpacity>
        <TextInput
          {...props}
          secureTextEntry={secure && inputState.visiblePassword}
          style={[styles.inputStyle, textStyle]}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </View>
      <Text
        style={[
          styles.hintText,
          !!errors?.message &&
          textErrorStyle,
        ]}
      >{(errors?.message || hintText) as ReactNode}
      </Text>
    </View>
  );
};

export default Input;
