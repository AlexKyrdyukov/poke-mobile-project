import React from 'react';
import { View, Text } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import type { ParamListBase } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Input from 'src/ui/components/Input';
import Button from 'src/ui/components/Button';

import { useUser } from 'src/hooks/useUser';
import useTheme from 'src/hooks/useTheme';
import dataValidation from 'src/utils/validationSchemas';

import Email from 'src/assets/icons/email.svg';
import OpenEye from 'src/assets/icons/eye_open.svg';

import styles from './SignIn.styles';

type Props = NativeStackScreenProps<ParamListBase>;

const SignIn: React.FC<Props> = ({ navigation }) => {
  const { signIn } = useUser();
  const { theme } = useTheme();
  const schema = yup.object({
    email: dataValidation.requiredEmail,
    password: dataValidation.requiredPassword,
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <View style={styles({ theme }).screenContainer}>
      <Text
        style={styles({ theme }).titleStyle}
      >Sign in please
      </Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Email"
            errors={errors.email}
            type="numbers-and-punctuation"
            underlineColorAndroid="transparent"
            Logo={Email}
            containerStyle={styles({ theme }).inputContainer}
            textStyle={styles({ theme }).inputText}
            containerErrorStyle={styles({ theme }).errorSectionStyle}
            textErrorStyle={styles({ theme }).errorTextStyle}
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
            underlineColorAndroid="transparent"
            Logo={OpenEye}
            containerStyle={styles({ theme }).inputContainer}
            textStyle={styles({ theme }).inputText}
            containerErrorStyle={styles({ theme }).errorSectionStyle}
            textErrorStyle={styles({ theme }).errorTextStyle}
            value={value}
            hintText="Enter your password"
            onBlur={onBlur}
            onChangeText={onChange}
            secure
          />
        )}
      />
      <Button
        activeOpacity={0.8}
        containerStyle={styles({ theme }).buttonSignInContainer}
        textStyle={styles({ theme }).buttonSignInText}
        onPress={handleSubmit(signIn)}
        title="Sign in"
      />
      <Button
        activeOpacity={0.8}
        containerStyle={styles({ theme }).buttonLinkSignUpContainer}
        textStyle={styles({ theme }).buttonLinkSignUpText}
        onPress={() => navigation.navigate('SignUp')}
        title="Go to sign up"
      />
    </View>
  );
};

export default React.memo(SignIn);
