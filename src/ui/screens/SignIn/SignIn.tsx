import React from 'react';
import { View, Text } from 'react-native';
import type { Control, FieldValues } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import Button from 'src/ui/components/Button/Button';
import Input from 'src/ui/components/Input/Input';

import style from './SignIn.style';

const SignIn: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // eslint-disable-next-line no-console
  const onSubmit = (data: { email: string; password: string }) => console.log(data, control);

  return (
    <View style={style.sectionContainer}>
      <Text>SignIn screen</Text>
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
      <Button
        onPress={handleSubmit(onSubmit)}
      >Sign up
      </Button>

    </View>
  );
};

export default React.memo(SignIn);
