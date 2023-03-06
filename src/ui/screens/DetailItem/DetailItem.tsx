import { View, Text } from 'react-native';
import React from 'react';

import styles from './DetailItem.styles';

const DetailItem: React.FC = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text>DetailItem</Text>
    </View>
  );
};

export default React.memo(DetailItem);
