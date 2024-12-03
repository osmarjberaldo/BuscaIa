import React from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { styles } from '../styles';
import { TabScreenProps } from '../types/navigation';

export const CategoriesScreen: React.FC<TabScreenProps<'Categories'>> = () => {
  return (
    <View style={styles.container}>
      <Text h4 style={{ color: '#fff', marginBottom: 16 }}>Categories</Text>
    </View>
  );
};
