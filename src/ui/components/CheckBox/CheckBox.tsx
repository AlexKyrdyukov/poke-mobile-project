import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import On from 'src/ui/components/CheckBox/images/on.svg';
import Off from 'src/ui/components/CheckBox/images/off.svg';

import { useTheme } from 'src/hooks/useTheme';

import styles from './CheckBox.styles';

const CheckBox: React.FC = () => {
  const { themeState, setThemeState } = useTheme();
  return (
    <View
      style={styles.componentContainer}
    >
      <TouchableOpacity
        onPress={() => setThemeState(!themeState)}
      >
        {themeState
          ? <On width={40} height={40} />
          : <Off width={40} height={40} />}
      </TouchableOpacity>
      <Text>
        Change Theme:
        {themeState
          ? ' dark'
          : ' light'
        }
      </Text>
    </View >
  );
};

export default CheckBox;
