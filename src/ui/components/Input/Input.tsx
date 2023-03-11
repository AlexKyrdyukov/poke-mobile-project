import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import type { ReactNode } from 'react';
import type { KeyboardTypeOptions, TextStyle, NativeSyntheticEvent, TextInputFocusEventData, ViewStyle, TextInputProps, StyleProp } from 'react-native';
import type { FieldError } from 'react-hook-form';
import useTheme from 'src/hooks/useTheme';

import CloseEye from 'src/assets/icons/eye_closed.svg';

import type { SvgProps } from 'react-native-svg';
import styles from './Input.styles';

type Props = {
  placeholder: string;
  errors: FieldError | undefined;
  type: KeyboardTypeOptions | undefined;
  secure?: boolean | undefined;
  Logo: React.FC<SvgProps>;
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
  Logo,
  hintText,
  onBlur,
  ...props }) => {
  const { theme } = useTheme();
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
      style={[styles({ theme }).componentContainer, containerStyle]}
    >
      <View
        style={[
          styles({ theme }).inputRowContainer,
          inputState.inputFocus && styles({ theme }).inputFocusStyle,
          !!errors?.message && containerErrorStyle]}
      >
        <TouchableOpacity
          onPress={handleVisibleText}
          disabled={!secure}
          style={styles({ theme }).touchableStyle}
        >
          {
            secure && inputState.visiblePassword
              ? <CloseEye width={30} height={30} />
              : <Logo width={30} height={30} />
          }
        </TouchableOpacity>
        <TextInput
          {...props}
          secureTextEntry={secure && inputState.visiblePassword}
          style={[styles({ theme }).inputStyle, textStyle]}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </View>
      <Text
        style={[
          styles({ theme }).hintText,
          !!errors?.message &&
          textErrorStyle,
        ]}
      >{(errors?.message || hintText) as ReactNode}
      </Text>
    </View>
  );
};

export default Input;
