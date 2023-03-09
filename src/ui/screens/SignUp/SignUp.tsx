import React from 'react';
import * as yup from 'yup';
import { View, Text } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import Input from 'src/ui/components/Input';
import Button from 'src/ui/components/Button';

import dataValidation from 'src/utils/validationSchemas';
import { useUser } from 'src/hooks/useUser';
import { useTheme } from 'src/hooks/useTheme';

import { images } from 'src/consts/images';
import styles from './SignUp.styles';

const SignUp: React.FC = () => {
  const { themeState } = useTheme();
  const { signUp } = useUser();
  const schema = yup.object({
    email: dataValidation.requiredEmail,
    password: dataValidation.requiredPassword,
    repeatPassword: dataValidation.confirmPassword,
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
  });

  return (
    <View style={styles.screenContainer}>
      <Text
        style={styles.titleStyle}
      >Sign up please
      </Text>
      <Controller
        control={control}
        name="email"
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Email"
            errors={errors.email}
            type="numbers-and-punctuation"
            logo={images.inputComponent.mail}
            containerStyle={styles.inputContainer}
            underlineColorAndroid="transparent"
            textStyle={styles.inputText}
            containerErrorStyle={styles.errorSectionStyle}
            textErrorStyle={styles.errorTextStyle}
            value={value}
            hintText="Enter your email"
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Password"
            errors={errors.password}
            type="default"
            logo={images.inputComponent.view}
            containerStyle={styles.inputContainer}
            textStyle={styles.inputText}
            containerErrorStyle={styles.errorSectionStyle}
            textErrorStyle={styles.errorTextStyle}
            value={value}
            hintText="Enter your password"
            onBlur={onBlur}
            onChangeText={onChange}
            secure
          />
        )}
      />
      <Controller
        control={control}
        name="repeatPassword"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Password"
            errors={errors.repeatPassword}
            type="numbers-and-punctuation"
            logo={images.inputComponent.view}
            containerStyle={styles.inputContainer}
            textStyle={styles.inputText}
            containerErrorStyle={styles.errorSectionStyle}
            textErrorStyle={styles.errorTextStyle}
            value={value}
            hintText="Enter your password again"
            onBlur={onBlur}
            onChangeText={onChange}
            secure
          />
        )}
      />
      <Button
        containerStyle={styles.buttonSignUpContainer}
        textStyle={styles.buttonSignUpText}
        onPress={handleSubmit(signUp)}
        activeOpacity={0.8}
      >Sign up
      </Button>
    </View>
  );
};

export default React.memo(SignUp);
