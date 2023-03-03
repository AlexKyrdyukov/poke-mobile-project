import React from 'react';
import { View, Text } from 'react-native';
import { useForm } from 'react-hook-form';

import type { Control, FieldValues } from 'react-hook-form';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Button from 'src/ui/components/Button';
import Input from 'src/ui/components/Input';

import styles from './SignIn.style';

type ParamList = {
  // Home?: undefined;
  SignIn?: undefined;
  // Feed?: { sort: 'latest' | 'top' } | undefined;
};

type Props = NativeStackScreenProps<ParamList, 'SignIn'>;
// type Props = NativeStackScreenProps<>;
const SignIn: React.FC<Props> = (props) => {
  const { navigation } = props;
  const { control, handleSubmit, formState: { errors } } = useForm({
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
      <Input
        type="email-address"
        placeHolder="enter email"
        control={control as unknown as Control<FieldValues>}
        errors={errors.email}
        name="email"
        style={styles.inputStyle}
      />
      <Input
        type="numbers-and-punctuation"
        placeHolder="enter password"
        control={control as unknown as Control<FieldValues>}
        errors={errors.password}
        name="password"
        secure
        style={styles.inputStyle}
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
