import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import useTheme from 'src/hooks/useTheme';
import colors from 'src/consts/colors';

import HomeLogo from 'src/assets/icons/home.svg';
import ListLogo from 'src/assets/icons/list.svg';
import ProfileLogo from 'src/assets/icons/profile.svg';

import styles from './CustomTabBar.style';

type Props = BottomTabBarProps;

const CustomTabBar: React.FC<Props> = ({ state, navigation }) => {
  const { theme } = useTheme();
  const index = state.index;
  return (
    <View
      style={styles({ theme }).componentContainer}
    >
      <TouchableOpacity
        style={styles({ theme }).touchableContainer}
        accessibilityRole="button"
        accessibilityState={index === 0 ? { selected: true } : {}}
        onPress={() => navigation.navigate('Home')}
      >
        <HomeLogo
          width={40}
          height={index === 0 ? 40 : 30}
          fill={index === 0
            ? colors.tabBar[theme].isFocus
            : colors.tabBar[theme].isBlur}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles({ theme }).touchableContainer}
        accessibilityState={index === 1 ? { selected: true } : {}}
        onPress={() => navigation.navigate('MainList')}
      >
        <ListLogo
          width={40}
          height={index === 1 ? 40 : 30}
          fill={index === 1
            ? colors.tabBar[theme].isFocus
            : colors.tabBar[theme].isBlur}

        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles({ theme: 'light' }).touchableContainer}
        accessibilityState={index === 2 ? { selected: true } : {}}
        onPress={() => navigation.navigate('Profile')}
      >
        <ProfileLogo
          width={40}
          height={index === 2 ? 40 : 30}
          fill={index === 2
            ? colors.tabBar[theme].isFocus
            : colors.tabBar[theme].isBlur}

        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomTabBar;
