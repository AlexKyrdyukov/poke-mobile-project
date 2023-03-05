import React from 'react';
import * as yup from 'yup';
import { View, Text } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import type { SignUpData } from 'src/utils/userHelper/create';

import Input from 'src/ui/components/Input';
import Button from 'src/ui/components/Button';

import dataValidation from 'src/utils/validationSchemas';
import { userHelper } from 'src/utils';
import { useAppDispatch } from 'src/store';
import { userSliceActions } from 'src/store/slices/userSlice';

import mail from 'src/ui/screens/SignIn/images/mail.png';
import view from 'src/ui/screens/SignIn/images/view.png';

import styles from './SignUp.style';

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
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

  const handleCreateUser = async (data: SignUpData) => {
    try {
      const user = await userHelper.create(data);
      dispatch(userSliceActions.setUser(user));
    } catch (error) {
      console.error(error);
    }
  };

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
            placeHolder="Email"
            placeHolderTextColor="#6b8e23"
            errors={errors.email}
            type="numbers-and-punctuation"
            logo={mail}
            outerErrorStyles={[styles.errorSectionStyle, styles.errorTextStyle]}
            outerStyles={[styles.inputContainer, styles.inputText]}
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
            placeHolder="Password"
            placeHolderTextColor="#4169e1"
            errors={errors.password}
            type="default"
            logo={view}
            outerErrorStyles={[styles.errorSectionStyle, styles.errorTextStyle]}
            outerStyles={[styles.inputContainer, styles.inputText]}
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
            placeHolder="Password"
            placeHolderTextColor="#9400d3"
            errors={errors.repeatPassword}
            type="numbers-and-punctuation"
            logo={view}
            outerErrorStyles={[styles.errorSectionStyle, styles.errorTextStyle]}
            outerStyles={[styles.inputContainer, styles.inputText]}
            value={value}
            hintText="Enter your password again"
            onBlur={onBlur}
            onChangeText={onChange}
            secure
          />
        )}
      />
      <Button
        styles={[
          styles.buttonSignUpContainer,
          styles.buttonSignUpText,
        ]}
        opacity={0.8}
        onPress={handleSubmit(handleCreateUser)}
      >Sign up
      </Button>
    </View>
  );
};

export default React.memo(SignUp);
