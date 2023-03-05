import React from 'react';
import { View, TextInput, Image, TouchableOpacity, Text, Button, TextInputSelectionChangeEventData } from 'react-native';
import type { ReactNode } from 'react';
import type { KeyboardTypeOptions, TextStyle, ImageSourcePropType, NativeSyntheticEvent, TextInputFocusEventData, ViewStyle, StyleProp } from 'react-native';
import type { FieldError } from 'react-hook-form';
import hide from 'src/ui/screens/SignIn/images/hide.png';

import styles from './Input.style';

type Props = {
  placeHolder: string;
  placeHolderTextColor: string;
  errors: FieldError | undefined;
  type: KeyboardTypeOptions | undefined;
  secure?: boolean | undefined;
  logo: ImageSourcePropType;
  outerErrorStyles: StyleProp<ViewStyle | TextStyle>[];
  outerStyles: StyleProp<ViewStyle | TextStyle>[];
  value?: string;
  hintText: string;
  onBlur: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void);
  onChangeText?: ((text: string) => void) | undefined;
};

const Input: React.FC<Props> = (props) => {
  const [inputState, setInputState] = React.useState({
    visiblePassword: true,
    inputFocus: false,
  });

  const {
    placeHolder,
    placeHolderTextColor,
    errors,
    type,
    secure,
    logo,
    value,
    hintText,
    onBlur,
    onChangeText,
  } = props;

  const [errorSectionStyle, errorTextStyle] = props.outerErrorStyles;
  const [sectionStyle, textStyle] = props.outerStyles;

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
      style={[styles.componentContainer, sectionStyle]}
    >
      <View
        style={[
          styles.inputRowContainer,
          inputState.inputFocus && styles.inputFocusStyle,
          !!errors?.message && errorSectionStyle]}
      >
        <TouchableOpacity
          onPress={handleVisibleText}
          disabled={!secure}
        >
          <Image
            source={
              secure && inputState.visiblePassword
                ? hide
                : logo
            }
            style={styles.imageStyle}
          />
        </TouchableOpacity>
        <TextInput
          secureTextEntry={secure && inputState.visiblePassword}
          style={[styles.inputStyle, textStyle]}
          placeholder={placeHolder}
          underlineColorAndroid="transparent"
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChangeText={onChangeText}
          value={value}
          keyboardType={type}
          placeholderTextColor={placeHolderTextColor}
        />
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
