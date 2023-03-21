import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import colors from 'src/consts/colors';
import useTheme from 'src/hooks/useTheme';
import styles from './Loader.style';

const Loader: React.FC = () => {
  const { theme } = useTheme();
  return (
    <View style={[styles({ theme }).container, styles({ theme }).horizontal]}>
      <ActivityIndicator
        size="large"
        color={colors.loader[theme].color}
      />
    </View>
  );
};

export default Loader;
