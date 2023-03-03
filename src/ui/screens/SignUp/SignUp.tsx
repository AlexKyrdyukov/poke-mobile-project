import React from 'react';
import { View, Text } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from 'src/ui/components/Input';
import Button from 'src/ui/components/Button';
import dataValidation from 'src/utils/validationSchemas';

import styles from './SignUp.style';

// eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
const mail = require('src/ui/screens/SignIn/images/mail.png');
// eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
const view = require('src/ui/screens/SignIn/images/view.png');

const SignUp: React.FC = () => {
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
  // eslint-disable-next-line no-console, max-len
  const onSubmit = (data: { email: string; password: string; repeatPassword: string }) => console.log(data, control);
  return (
    <View style={styles.screenContainer}>
      <Text>SignUp screen</Text>
      <Controller
        control={control}
        name="email"
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeHolder="Email"
            errors={errors.email}
            type="numbers-and-punctuation"
            logo={mail}
            outerStyles={[styles.errorSectionStyle, styles.errorTextStyle]}
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
            errors={errors.password}
            type="default"
            logo={view}
            outerStyles={[styles.errorSectionStyle, styles.errorTextStyle]}
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
            placeHolder="password"
            errors={errors.repeatPassword}
            type="numbers-and-punctuation"
            logo={view}
            outerStyles={[styles.errorSectionStyle, styles.errorTextStyle]}
            value={value}
            hintText="Enter your password again"
            onBlur={onBlur}
            onChangeText={onChange}
            secure
          />
        )}
      />
      <Button
          style={[
            styles.buttonContainer,
            styles.buttonText,
          ]}
        onPress={handleSubmit(onSubmit)}
      >Sign up
      </Button>

    </View>
  );
};

export default React.memo(SignUp);
