import { View, Text } from 'react-native';
import React from 'react';
import type { FieldValues, Control } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import Input from 'src/ui/components/Input/Input';
import Button from 'src/ui/components/Button';

import style from './SignUp.style';

const SignUp: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
  });
  // eslint-disable-next-line no-console, max-len
  const onSubmit = (data: { email: string; password: string; repeatPassword: string }) => console.log(data, control);
  return (
    <View style={style.sectionContainer}>
      <Text>SignUp screen</Text>
      <Input
        placeHolder="enter email"
        control={control as unknown as Control<FieldValues>}
        errors={errors.email}
        name="email"
      />
      <Input
        placeHolder="enter password"
        control={control as unknown as Control<FieldValues>}
        errors={errors.password}
        name="password"
      />
      <Input
        placeHolder="enter password again"
        control={control as unknown as Control<FieldValues>}
        errors={errors.repeatPassword}
        name="repeatPassword"
      />

      <Button
        onPress={handleSubmit(onSubmit)}
      >Sign up
      </Button>

    </View>
  );
};

export default React.memo(SignUp);
