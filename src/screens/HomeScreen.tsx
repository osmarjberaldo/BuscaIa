import React, { useState } from 'react';
import { View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Text, Icon } from '@rneui/themed';
import { AIToolCard } from '../components/AIToolCard';
import { HomeScreenProps } from '../types/navigation';
import { styles } from '../styles';
import { mockAITools } from '../data/mockData';

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(mockAITools.map(tool => tool.category)));

  const filteredTools = mockAITools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const NewsBanner = () => (
    <View style={styles.bannerContainer}>
      <Icon
        name="newspaper"
        type="material-community"
        color="#2089dc"
        size={32}
        style={styles.bannerIcon}
      />
      <View style={styles.bannerTextContainer}>
        <Text style={styles.bannerTitle}>Latest AI News</Text>
        <Text style={styles.bannerDescription}>
          Discover the latest developments in artificial intelligence and stay ahead of the curve
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" color="#888" size={20} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search AI tools..."
          placeholderTextColor="#666"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <NewsBanner />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryChip,
              selectedCategory === item && styles.selectedCategoryChip
            ]}
            onPress={() => setSelectedCategory(selectedCategory === item ? null : item)}
          >
            <Text style={[
              styles.categoryChipText,
              selectedCategory === item && styles.selectedCategoryChipText
            ]}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
        style={styles.categoryList}
      />

      <FlatList
        data={filteredTools}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AIToolCard
            tool={item}
            onPress={() => navigation.navigate('Detail', { tool: item })}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.toolList}
      />
    </View>
  );
};
