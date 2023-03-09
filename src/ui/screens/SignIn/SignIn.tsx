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
import dataValidation from 'src/utils/validationSchemas';

import { images } from 'src/consts/images';

import styles from './SignIn.styles';

type Props = NativeStackScreenProps<ParamListBase>;

const SignIn: React.FC<Props> = ({ navigation }) => {
  const { signIn } = useUser();

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
    <View style={styles.screenContainer}>
      <Text
        style={styles.titleStyle}
      >Sign in please
      </Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Email"
            placeHolderTextColor="#4b0082"
            errors={errors.email}
            type="numbers-and-punctuation"
            underlineColorAndroid="transparent"
            logo={images.inputComponent.mail}
            containerStyle={styles.inputContainer}
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
            placeHolderTextColor="#b22222"
            errors={errors.password}
            type="default"
            underlineColorAndroid="transparent"
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
      <Button
        activeOpacity={0.8}
        containerStyle={styles.buttonSignInContainer}
        textStyle={styles.buttonSignInText}
        onPress={handleSubmit(signIn)}
      >Sign in
      </Button>
      <Button
        activeOpacity={0.8}
        containerStyle={styles.buttonLinkSignUpContainer}
        textStyle={styles.buttonLinkSignUpText}
        onPress={() => navigation.navigate('SignUp')}
      >Go to sign up
      </Button>
    </View>
  );
};

export default React.memo(SignIn);
