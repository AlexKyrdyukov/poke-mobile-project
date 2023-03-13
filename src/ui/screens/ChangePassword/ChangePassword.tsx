import React from 'react';
import { View } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import Button from 'src/ui/components/Button';
import Input from 'src/ui/components/Input';

import dataValidation from 'src/utils/validationSchemas';
import useUser from 'src/hooks/useUser';
import useTheme from 'src/hooks/useTheme';

import OpenEye from 'src/assets/icons/eye_open.svg';
import AngrySmile from 'src/assets/icons/angry_smile.svg';
import SafePassword from 'src/assets/icons/password_safe.svg';

import styles from './ChangePassword.styles';

const ChangePassword: React.FC = () => {
  const { theme } = useTheme();
  const { changePassword, isSuccesful, setIsSuccessFul } = useUser();

  const schema = yup.object({
    password: dataValidation.requiredPassword,
    newPassword: dataValidation.newPassword,
    confirmNewPassword: dataValidation.confirmNewPassword,
  });

  const { control, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      password: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });

  React.useEffect(() => {
    if (isSubmitSuccessful && isSuccesful) {
      reset({
        password: '',
        newPassword: '',
        confirmNewPassword: '',
      });
      setIsSuccessFul(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful, isSuccesful]);

  return (
    <View style={styles({ theme }).sectionContainer}>
      <View
        style={styles({ theme }).logoContainer}
      >
        {Object.keys(errors)?.length
          ? <AngrySmile height={200} width={200} />
          : <SafePassword height={200} width={200} />
        }
      </View>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Password"
            errors={errors.password}
            type="default"
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
      <Controller
        control={control}
        name="newPassword"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Password"
            errors={errors.newPassword}
            type="numbers-and-punctuation"
            Logo={OpenEye}
            containerStyle={styles({ theme }).inputContainer}
            textStyle={styles({ theme }).inputText}
            containerErrorStyle={styles({ theme }).errorSectionStyle}
            textErrorStyle={styles({ theme }).errorTextStyle}
            value={value}
            hintText="Enter new password"
            onBlur={onBlur}
            onChangeText={onChange}
            secure
          />
        )}
      />
      <Controller
        control={control}
        name="confirmNewPassword"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Password"
            errors={errors.confirmNewPassword}
            type="numbers-and-punctuation"
            Logo={OpenEye}
            containerStyle={styles({ theme }).inputContainer}
            textStyle={styles({ theme }).inputText}
            containerErrorStyle={styles({ theme }).errorSectionStyle}
            textErrorStyle={styles({ theme }).errorTextStyle}
            value={value}
            hintText="Enter your password again"
            onBlur={onBlur}
            onChangeText={onChange}
            secure
          />
        )}
      />
      <Button
        containerStyle={styles({ theme }).buttonContainer}
        textStyle={styles({ theme }).buttonText}
        onPress={handleSubmit(changePassword)}
        activeOpacity={0.8}
        title="change password"
      />
    </View>
  );
};

export default React.memo(ChangePassword);
