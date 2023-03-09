import React from 'react';
import { View } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import Button from 'src/ui/components/Button';
import Input from 'src/ui/components/Input';

import dataValidation from 'src/utils/validationSchemas';
import { useUser } from 'src/hooks/useUser';

import { images } from 'src/consts/images';

import styles from './ChangePassword.styles';

const ChangePassword: React.FC = () => {
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
    <View style={styles.sectionContainer}>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Password"
            placeHolderTextColor="#4169e1"
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
        name="newPassword"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Password"
            placeHolderTextColor="#9400d3"
            errors={errors.newPassword}
            type="numbers-and-punctuation"
            logo={images.inputComponent.view}
            containerStyle={styles.inputContainer}
            textStyle={styles.inputText}
            containerErrorStyle={styles.errorSectionStyle}
            textErrorStyle={styles.errorTextStyle}
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
            placeHolderTextColor="#9400d3"
            errors={errors.confirmNewPassword}
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
        containerStyle={styles.buttonContainer}
        textStyle={styles.buttonText}
        onPress={handleSubmit(changePassword)}
        activeOpacity={0.8}
      >change password
      </Button>
    </View>
  );
};

export default React.memo(ChangePassword);
