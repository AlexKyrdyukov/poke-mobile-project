import React from 'react';
import { View, TextInput, Text } from 'react-native';
import type { Control, FieldError, FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';

type Props = {
  placeHolder: string;
  control: Control<FieldValues>;
  name: string;
  errors: FieldError | undefined;
};

const Input: React.FC<Props> = (props) => {
  const { name } = props;
  return (
    <View>
      <Controller
        control={props.control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            // style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={props.placeHolder}
          />
        )}
        name={name}
      />
      {props.errors && <Text>This is required.</Text>}
    </View>
  );
};

export default Input;
