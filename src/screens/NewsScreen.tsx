import React from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { styles } from '../styles';
import { TabScreenProps } from '../types/navigation';

export const NewsScreen: React.FC<TabScreenProps<'News'>> = () => {
  return (
    <View style={styles.container}>
      <Text h4 style={{ color: '#fff', marginBottom: 16 }}>News</Text>
    </View>
  );
};
