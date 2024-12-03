import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, TextInput, TouchableOpacity, FlatList, Pressable, Image, ScrollView, Linking, StatusBar } from 'react-native';
import { ThemeProvider, Text, Card, Button, Icon } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

type RootStackParamList = {
  Home: undefined;
  Detail: { tool: typeof mockAITools[0] };
};

type TabParamList = {
  Home: undefined;
  Categories: undefined;
  News: undefined;
  Contact: undefined;
};

const theme = {
  lightColors: {
    primary: '#2089dc',
  },
  darkColors: {
    primary: '#2089dc',
    background: '#252628',
    secondary: '#2f3136',
  },
  mode: 'dark',
};

const categories = {
  'Website Interaction': {
    icon: 'globe',
    type: 'font-awesome',
    color: '#4CAF50'
  },
  'Voice': {
    icon: 'microphone',
    type: 'font-awesome',
    color: '#2196F3'
  },
  'Development': {
    icon: 'code',
    type: 'font-awesome',
    color: '#9C27B0'
  },
  'Marketing': {
    icon: 'trending-up',
    type: 'feather',
    color: '#FF9800'
  },
  'Image': {
    icon: 'image',
    type: 'feather',
    color: '#E91E63'
  },
  'Text': {
    icon: 'file-text',
    type: 'feather',
    color: '#607D8B'
  }
};

const mockAITools = [
  {
    id: '1',
    name: 'Talk to the Site!',
    description: 'Chat with websites, get answers and summaries.',
    longDescription: 'Talk to the Site! is a Chrome extension aimed at enhancing a user\'s browsing experience by enabling more interactive and conversational engagement with websites. It is designed to simplify the process of information retrieval, making it more intuitive and user-friendly.',
    category: 'Website Interaction',
    icon: 'https://img.icons8.com/fluency/96/chatbot.png',
    pricing: 'No pricing',
    rating: 4.8,
    isVerified: true,
  },
  {
    id: '2',
    name: 'VoiceFlux',
    description: 'AI-powered voice generation and cloning',
    category: 'Voice',
    icon: 'https://img.icons8.com/fluency/96/microphone.png',
    pricing: 'Free tier',
    rating: 4.5,
    isVerified: true,
  },
  {
    id: '3',
    name: 'Srcbook',
    description: 'AI app development platform',
    category: 'Development',
    icon: 'https://img.icons8.com/fluency/96/code.png',
    pricing: 'Free tier',
    rating: 4.2,
    isVerified: true,
  },
  {
    id: '4',
    name: 'Unite AI',
    description: 'Marketing automation with AI',
    category: 'Marketing',
    icon: 'https://img.icons8.com/fluency/96/commercial.png',
    pricing: 'From $49/mo',
    rating: 4.7,
    isVerified: true,
  },
  {
    id: '5',
    name: 'ImageMind',
    description: 'AI image generation and editing',
    category: 'Image',
    icon: 'https://img.icons8.com/fluency/96/image.png',
    pricing: 'Free tier',
    rating: 4.6,
    isVerified: true,
  },
  {
    id: '6',
    name: 'TextCraft',
    description: 'Advanced text generation and analysis',
    category: 'Text',
    icon: 'https://img.icons8.com/fluency/96/text.png',
    pricing: 'Free tier',
    rating: 4.4,
    isVerified: true,
  }
];

const mockNews = [
  {
    id: '1',
    title: 'Nova IA da Google revoluciona busca na web',
    date: '2024-03-10',
  },
  {
    id: '2',
    title: 'OpenAI lança nova versão do GPT-4',
    date: '2024-03-09',
  },
  {
    id: '3',
    title: 'IA brasileira inova no mercado de tecnologia',
    date: '2024-03-08',
  },
];

function DetailScreen({ route, navigation }: any) {
  const { tool } = route.params;
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.breadcrumb}>
        <Icon name="home" color="#888" size={16} />
        <Text style={styles.breadcrumbText}> / {tool.category} / {tool.name}</Text>
      </View>
      
      <Text style={styles.releaseDate}>{tool.releaseDate}</Text>

      <View style={styles.headerContainer}>
        <Image source={{ uri: tool.icon }} style={styles.detailIcon} />
        <Text h3 style={styles.detailTitle}>{tool.name}</Text>
        <View style={styles.categoryChip}>
          <Icon name="category" size={16} color="#888" />
          <Text style={styles.categoryChipText}>{tool.category}</Text>
        </View>
        <Text style={styles.noRating}>No ratings</Text>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity 
          style={styles.chromeStoreButton}
          onPress={() => Linking.openURL(tool.chromeStoreUrl)}
        >
          <Icon name="chrome" type="font-awesome" color="white" size={20} />
          <Text style={styles.buttonText}>Open Chrome Store</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.whatsappButton}>
          <Icon name="whatsapp" type="font-awesome" color="white" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton}>
          <Icon name="bookmark-outline" type="material-community" color="white" size={20} />
          <Text style={styles.saveCount}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}>
          <Icon name="more-vert" color="white" size={20} />
        </TouchableOpacity>
      </View>

      <Text style={styles.description}>{tool.description}</Text>

      <View style={styles.overviewSection}>
        <TouchableOpacity 
          style={styles.overviewHeader}
          onPress={() => setShowFullDescription(!showFullDescription)}
        >
          <Text style={styles.sectionTitle}>Overview</Text>
          <Icon 
            name={showFullDescription ? "chevron-up" : "chevron-down"} 
            color="#888" 
            size={24} 
          />
        </TouchableOpacity>
        
        {showFullDescription && (
          <Text style={styles.overviewText}>{tool.longDescription}</Text>
        )}
      </View>

      <View style={styles.primaryTaskSection}>
        <Text style={styles.sectionTitle}>Primary task</Text>
        <View style={styles.taskChip}>
          <Icon name="work" size={16} color="#888" />
          <Text style={styles.taskChipText}>{tool.primaryTask}</Text>
        </View>
      </View>

      <View style={styles.ratingsSection}>
        <Text style={styles.sectionTitle}>How would you rate {tool.name}?</Text>
        <Text style={styles.ratingSubtitle}>Help other people by letting them know if this AI was useful.</Text>
        
        <View style={styles.starContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Icon 
              key={star}
              name="star-outline"
              type="material-community"
              color="#888"
              size={32}
              style={styles.starIcon}
            />
          ))}
        </View>

        <TextInput
          style={styles.reviewInput}
          placeholder="Let people know what you think about this AI. It helps to provide much detail as possible about your experience."
          placeholderTextColor="#666"
          multiline
          numberOfLines={4}
        />

        <TouchableOpacity style={styles.postButton}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.featureRequestsSection}>
        <Text style={styles.sectionTitle}>Feature requests</Text>
        <Text style={styles.featureRequestText}>
          Are you looking for a specific feature that's not present in {tool.name}?
        </Text>
      </View>

      <View style={styles.socialSection}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Share on Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Share on Facebook</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function SearchResults({ searchText }: { searchText: string }) {
  const filteredTools = mockAITools.filter(tool => 
    tool.name.toLowerCase().includes(searchText.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchText.toLowerCase())
  );

  const categories = {
    tasks: { count: 0, icon: '📋' },
    jobs: { count: 0, icon: '💼' },
    ais: { count: filteredTools.length, icon: '🤖' }
  };

  if (!searchText) return null;

  return (
    <View style={styles.searchResults}>
      <View style={styles.searchPrompt}>
        <Text style={styles.searchPromptText}>
          Search for <Text style={styles.highlightText}>{searchText}</Text> using AI
        </Text>
        <Icon name="arrow-forward" color="white" size={20} />
      </View>

      {Object.entries(categories).map(([category, data]) => (
        <Pressable key={category} style={styles.categoryItem}>
          <Text style={styles.categoryIcon}>{data.icon}</Text>
          <Text style={styles.categoryText}>{category.charAt(0).toUpperCase() + category.slice(1)} ({data.count})</Text>
        </Pressable>
      ))}

      {filteredTools.map(tool => (
        <TouchableOpacity key={tool.id} onPress={() => navigation.navigate('Detail', { tool })}>
          <Card containerStyle={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.iconContainer}>
                <Image 
                  source={{ uri: tool.icon }} 
                  style={styles.cardIcon} 
                  resizeMode="cover"
                />
              </View>
              <View style={styles.cardContent}>
                <View style={styles.titleRow}>
                  <Text style={styles.cardTitle}>{tool.name}</Text>
                  {tool.isVerified && (
                    <Icon
                      name="check-circle"
                      type="feather"
                      size={16}
                      color="#8b5cf6"
                    />
                  )}
                </View>
                <Text style={styles.cardDescription}>{tool.description}</Text>
                <View style={styles.cardFooter}>
                  <View style={styles.categoryBadge}>
                    <Text style={styles.categoryText}>{tool.category}</Text>
                  </View>
                  <View style={styles.pricingContainer}>
                    <Text style={styles.pricingText}>{tool.pricing}</Text>
                    <View style={styles.ratingContainer}>
                      <Icon
                        name="star"
                        type="font-awesome"
                        size={12}
                        color="#ffd700"
                      />
                      <Text style={styles.ratingText}>{tool.rating}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      ))}
      
      <Text style={styles.resultsCount}>Showing {filteredTools.length} matches</Text>
    </View>
  );
}

function HomeScreen({ navigation }: any) {
  const [searchText, setSearchText] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => 
        prevIndex === mockNews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const filteredTools = mockAITools.filter(tool => 
    (!selectedCategory || tool.category === selectedCategory) &&
    (!searchText || 
      tool.name.toLowerCase().includes(searchText.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchText.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const renderCard = ({ item }: { item: typeof mockAITools[0] }) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate('Detail', { tool: item })}
      style={styles.cardTouchable}
    >
      <Card containerStyle={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.iconContainer}>
            <Image 
              source={{ uri: item.icon }} 
              style={styles.cardIcon} 
              resizeMode="cover"
            />
          </View>
          <View style={styles.cardContent}>
            <View style={styles.titleRow}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              {item.isVerified && (
                <Icon
                  name="check-circle"
                  type="feather"
                  size={16}
                  color="#8b5cf6"
                />
              )}
            </View>
            <Text style={styles.cardDescription}>{item.description}</Text>
            <View style={styles.cardFooter}>
              <TouchableOpacity 
                onPress={() => handleCategoryPress(item.category)}
                style={[
                  styles.categoryBadge, 
                  { backgroundColor: categories[item.category].color + '20' }
                ]}
              >
                <Icon
                  name={categories[item.category].icon}
                  type={categories[item.category].type}
                  size={12}
                  color={categories[item.category].color}
                  style={styles.categoryIcon}
                />
                <Text style={[styles.categoryText, { color: categories[item.category].color }]}>
                  {item.category}
                </Text>
              </TouchableOpacity>
              <View style={styles.pricingContainer}>
                <Text style={styles.pricingText}>{item.pricing}</Text>
                <View style={styles.ratingContainer}>
                  <Icon
                    name="star"
                    type="font-awesome"
                    size={12}
                    color="#ffd700"
                  />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );

  const renderCategories = () => (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.categoriesContainer}
      contentContainerStyle={styles.categoriesContent}
    >
      <TouchableOpacity
        style={[
          styles.categoryChip,
          !selectedCategory && styles.categoryChipSelected
        ]}
        onPress={() => handleCategoryPress(null)}
      >
        <Text style={[
          styles.categoryChipText,
          !selectedCategory && styles.categoryChipTextSelected
        ]}>All</Text>
      </TouchableOpacity>
      {Object.entries(categories).map(([category, { icon, type, color }]) => (
        <TouchableOpacity
          key={category}
          style={[
            styles.categoryChip,
            selectedCategory === category && styles.categoryChipSelected,
            { borderColor: color }
          ]}
          onPress={() => handleCategoryPress(category)}
        >
          <Icon
            name={icon}
            type={type}
            size={14}
            color={selectedCategory === category ? '#fff' : color}
            style={styles.categoryChipIcon}
          />
          <Text style={[
            styles.categoryChipText,
            selectedCategory === category && styles.categoryChipTextSelected
          ]}>{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Image
            source={require('./assets/icon.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
          <Text h3 style={styles.title}>Busque uma IA</Text>
        </View>
        <View style={styles.newsBanner}>
          <Text style={styles.newsText}>
            {mockNews[currentNewsIndex].title}
          </Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <View style={[styles.searchInputContainer, isSearchFocused && styles.searchInputContainerFocused]}>
          <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search AI tools..."
            placeholderTextColor="#666"
            value={searchText}
            onChangeText={setSearchText}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
        </View>
      </View>

      {renderCategories()}

      <FlatList
        data={filteredTools}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1a1b1e',
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.darkColors.secondary,
          borderTopWidth: 1,
          borderTopColor: '#3f4147',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: theme.darkColors.primary,
        tabBarInactiveTintColor: '#888',
        headerStyle: {
          backgroundColor: theme.darkColors.background,
        },
        headerTintColor: '#fff',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="category" type="material" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="newspaper" type="material" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="contact-support" type="material" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#1a1b1e" />
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1b1e',
  },
  header: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  logoImage: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  title: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingBottom: 4,
    marginBottom: 10,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#252628',
    borderRadius: 12,
    marginRight: 10,
  },
  searchInputContainerFocused: {
    backgroundColor: '#2f3136',
    borderColor: '#8b5cf6',
    borderWidth: 1,
  },
  searchIcon: {
    padding: 12,
  },
  searchInput: {
    flex: 1,
    padding: 12,
    color: 'white',
  },
  searchButton: {
    backgroundColor: '#2089dc',
    borderRadius: 12,
    padding: 12,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  searchResults: {
    flex: 1,
    padding: 10,
  },
  searchPrompt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#303136',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  searchPromptText: {
    color: 'white',
    fontSize: 16,
  },
  highlightText: {
    color: '#ffd700',
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#252629',
    marginBottom: 2,
  },
  categoryIcon: {
    marginRight: 10,
    fontSize: 16,
  },
  categoryText: {
    color: '#888',
    fontSize: 16,
  },
  card: {
    marginHorizontal: 8,
    marginVertical: 4,
    borderRadius: 12,
    padding: 12,
    backgroundColor: '#2f3136',
    borderWidth: 1,
    borderColor: '#3f4147',
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 10,
    marginRight: 12,
    overflow: 'hidden',
  },
  cardIcon: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  cardTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 6,
  },
  cardDescription: {
    color: '#9ca3af',
    fontSize: 14,
    marginBottom: 8,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: '#3f4147',
  },
  categoryIcon: {
    marginRight: 4,
  },
  categoryText: {
    fontSize: 12,
    color: '#fff',
  },
  pricingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pricingText: {
    color: '#9ca3af',
    fontSize: 12,
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: '#ffd700',
    fontSize: 12,
    marginLeft: 4,
  },
  resultsCount: {
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
  listContainer: {
    paddingHorizontal: 8,
    paddingTop: 0,
  },
  breadcrumb: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 10,
  },
  breadcrumbText: {
    color: '#888',
    fontSize: 14,
  },
  releaseDate: {
    color: '#888',
    fontSize: 14,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerContainer: {
    padding: 20,
    alignItems: 'center',
  },
  detailIcon: {
    width: 64,
    height: 64,
    borderRadius: 16,
    marginBottom: 16,
  },
  detailTitle: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 12,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#2f3136',
    borderWidth: 1,
    borderColor: '#3f4147',
    minWidth: 100,
    height: 36,
  },
  categoryChipSelected: {
    backgroundColor: '#8b5cf6',
    borderColor: '#8b5cf6',
    transform: [{ scale: 1.05 }],
  },
  categoryChipIcon: {
    marginRight: 6,
  },
  categoryChipText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  categoryChipTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  categoriesContainer: {
    height: 36,
    marginBottom: 4,
  },
  categoriesContent: {
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  cardTouchable: {
    transform: [{ scale: 1 }],
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    gap: 10,
  },
  chromeStoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#303136',
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  whatsappButton: {
    backgroundColor: '#303136',
    padding: 12,
    borderRadius: 8,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#303136',
    padding: 12,
    borderRadius: 8,
    gap: 4,
  },
  saveCount: {
    color: 'white',
    fontSize: 14,
  },
  menuButton: {
    backgroundColor: '#303136',
    padding: 12,
    borderRadius: 8,
  },
  description: {
    color: 'white',
    fontSize: 16,
    padding: 20,
    paddingTop: 0,
  },
  overviewSection: {
    padding: 20,
  },
  overviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  overviewText: {
    color: '#888',
    fontSize: 14,
    lineHeight: 20,
  },
  primaryTaskSection: {
    padding: 20,
  },
  taskChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#303136',
    padding: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 12,
  },
  taskChipText: {
    color: '#888',
    marginLeft: 8,
  },
  ratingsSection: {
    padding: 20,
  },
  ratingSubtitle: {
    color: '#888',
    fontSize: 14,
    marginTop: 8,
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    gap: 8,
  },
  starIcon: {
    marginHorizontal: 4,
  },
  reviewInput: {
    backgroundColor: '#303136',
    borderRadius: 8,
    padding: 12,
    color: 'white',
    height: 120,
    textAlignVertical: 'top',
    marginBottom: 16,
  },
  postButton: {
    backgroundColor: '#303136',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  postButtonText: {
    color: 'white',
    fontSize: 16,
  },
  featureRequestsSection: {
    padding: 20,
  },
  featureRequestText: {
    color: '#888',
    fontSize: 14,
    marginTop: 8,
  },
  socialSection: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  socialButton: {
    flex: 1,
    backgroundColor: '#303136',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  socialButtonText: {
    color: 'white',
    fontSize: 14,
  },
  newsBanner: {
    backgroundColor: '#2f3136',
    padding: 8,
    marginBottom: 12,
    borderRadius: 8,
    width: '100%',
  },
  newsText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  categoryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: '#3f4147',
  },
  categoryIcon: {
    marginRight: 4,
  },
  categoryText: {
    fontSize: 12,
    color: '#fff',
  },
});
