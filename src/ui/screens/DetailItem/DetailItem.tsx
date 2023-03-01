import { View, Text } from 'react-native';
import React from 'react';

import style from './DetailItem.style';

const DetailItem: React.FC = () => {
  return (
    <View style={style.sectionContainer}>
      <Text>DetailItem</Text>
    </View>
  );
};

export default React.memo(DetailItem);
