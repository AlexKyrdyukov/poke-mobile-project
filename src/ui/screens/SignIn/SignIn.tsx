import React from 'react';
import { View, Text } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Button from 'src/ui/components/Button';
import Input from 'src/ui/components/Input';
import dataValidation from 'src/utils/validationSchemas';

import styles from './SignIn.style';

type ParamList = {
  SignIn?: undefined;
};

type Props = NativeStackScreenProps<ParamList, 'SignIn'>;

const SignIn: React.FC<Props> = (props) => {
  const { navigation } = props;
  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  const mail = require('src/ui/screens/SignIn/images/mail.png');
  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  const view = require('src/ui/screens/SignIn/images/view.png');

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
  // eslint-disable-next-line no-console
  const onSubmit = (data: { email: string; password: string }) => console.log(data, control);

  return (
    <View style={styles.screenContainer}>
      <Text
        style={styles.titleStyle}
      >SignIn screen
      </Text>
      <Controller
        control={control}
        name="email"
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
      <Button
        style={[
          styles.appButtonContainer,
          styles.appButtonText,
        ]}
        onPress={handleSubmit(onSubmit)}
        >Sign in
      </Button>
      <Button
        style={[
          styles.appButtonContainer,
          styles.appButtonText,
        ]}
        onPress={() => navigation.navigate('SignUp')}
        >Go to sign up
      </Button>
    </View>
  );
};

export default React.memo(SignIn);
