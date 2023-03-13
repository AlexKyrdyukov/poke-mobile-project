import { View } from 'react-native';
import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import type { ParamListBase } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Input from 'src/ui/components/Input/Input';
import Button from 'src/ui/components/Button/Button';

import useUser from 'src/hooks/useUser';
import useTheme from 'src/hooks/useTheme';
import dataValidation from 'src/utils/validationSchemas';

import User from 'src/assets/icons/user_update.svg';
import AngrySmile from 'src/assets/icons/angry_smile.svg';
import Email from 'src/assets/icons/email.svg';
import Profile from 'src/assets/icons/profile.svg';

import styles from './ChangeUserData.style';

type Props = NativeStackScreenProps<ParamListBase>;

const ChangeUserData: React.FC<Props> = ({ navigation }) => {
  const { theme } = useTheme();
  const { changeData, user } = useUser();

  const schema = yup.object({
    email: dataValidation.requiredEmail,
    fullName: dataValidation.fullName,
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: user?.email || '',
      fullName: user?.fullName || '',
    },
  });
  return (
    <View
      style={styles({ theme }).componentContainer}
    >
      <View
        style={styles({ theme }).logoContainer}
      >
        {Object.keys(errors)?.length
          ? <AngrySmile height={200} width={200} />
          : <User height={200} width={200} />
        }
      </View>
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
        name="fullName"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Full name"
            errors={errors.fullName}
            type="default"
            underlineColorAndroid="transparent"
            Logo={Profile}
            containerStyle={styles({ theme }).inputContainer}
            textStyle={styles({ theme }).inputText}
            containerErrorStyle={styles({ theme }).errorSectionStyle}
            textErrorStyle={styles({ theme }).errorTextStyle}
            value={value}
            hintText="Enter your full name"
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
      />
      <Button
        activeOpacity={0.8}
        containerStyle={styles({ theme }).buttonContainer}
        textStyle={styles({ theme }).buttonText}
        onPress={handleSubmit(changeData)}
        title="change data"
      />
      <Button
        activeOpacity={0.8}
        containerStyle={styles({ theme }).buttonContainer}
        textStyle={styles({ theme }).buttonText}
        onPress={() => navigation.navigate('ChangePassword')}
        title="go to change password"
      />
    </View>
  );
};

export default React.memo(ChangeUserData);
