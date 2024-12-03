import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, TextInput, TouchableOpacity, FlatList, Pressable, Image, ScrollView, Linking, StatusBar } from 'react-native';
import { ThemeProvider, Text, Card, Button, Icon } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';

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
    background: '#1a1b1e',
    secondary: '#252628',
  },
  mode: 'dark',
};

const mockAITools = [
  {
    id: '1',
    name: 'Talk to the Site!',
    description: 'Chat with websites, get answers and summaries.',
    longDescription: 'Talk to the Site! is a Chrome extension aimed at enhancing a user\'s browsing experience by enabling more interactive and conversational engagement with websites. It is designed to simplify the process of information retrieval, making it more intuitive and user-friendly.',
    category: 'Website interaction',
    icon: 'https://img.icons8.com/fluency/96/chatbot.png',
    pricing: 'No pricing',
    rating: 0,
    isVerified: true,
    primaryTask: 'Website interaction',
    chromeStoreUrl: 'https://chrome.google.com/webstore',
    features: [
      'Chat with websites directly',
      'Get instant summaries',
      'Interactive browsing experience',
      'Information retrieval made simple'
    ],
    releaseDate: 'December 2, 2024',
  },
  {
    id: '2',
    name: 'VoiceFlux',
    description: 'AI-powered voice generation',
    category: 'Voice',
    icon: 'https://img.icons8.com/fluency/96/microphone.png',
    pricing: 'No pricing',
    rating: 4.5,
    isVerified: true,
  },
  {
    id: '3',
    name: 'Srcbook',
    description: 'AI app development platform',
    category: 'Development',
    icon: 'https://img.icons8.com/fluency/96/code.png',
    pricing: 'Free tier available',
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

  const renderCard = ({ item }: { item: typeof mockAITools[0] }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', { tool: item })}>
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
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryText}>{item.category}</Text>
              </View>
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text h3 style={styles.title}>BuscaIA</Text>
        <Text style={styles.subtitle}>
          {mockAITools.length} AIs available for various tasks
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Find AIs using AI"
            placeholderTextColor="#666"
            value={searchText}
            onChangeText={setSearchText}
            onFocus={() => setIsSearchFocused(true)}
          />
          {searchText && (
            <TouchableOpacity 
              style={styles.clearButton}
              onPress={() => {
                setSearchText('');
                setIsSearchFocused(false);
              }}
            >
              <Text style={styles.clearButtonText}>×</Text>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search" color="white" />
        </TouchableOpacity>
      </View>

      {(searchText || isSearchFocused) ? (
        <SearchResults searchText={searchText} />
      ) : (
        <View style={styles.content}>
          <Text h4 style={styles.sectionTitle}>Just Launched</Text>
          <FlatList
            data={mockAITools}
            keyExtractor={(item) => item.id}
            renderItem={renderCard}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      )}
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
          backgroundColor: '#1a1b1e',
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: '#2089dc',
        tabBarInactiveTintColor: '#888',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="material" color={color} size={size} />
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
    padding: 20,
    paddingTop: 40,
  },
  title: {
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    color: '#888',
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 20,
    paddingTop: 0,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#252628',
    borderRadius: 12,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    padding: 12,
    color: 'white',
  },
  clearButton: {
    padding: 8,
  },
  clearButtonText: {
    color: '#666',
    fontSize: 20,
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
    backgroundColor: '#252628',
    borderWidth: 0,
    borderRadius: 12,
    marginBottom: 10,
    padding: 16,
    margin: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
    backgroundColor: '#323438',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  categoryText: {
    color: '#9ca3af',
    fontSize: 12,
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
    padding: 10,
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
    backgroundColor: '#303136',
    padding: 8,
    borderRadius: 8,
    marginBottom: 12,
  },
  categoryChipText: {
    color: '#888',
    marginLeft: 8,
  },
  noRating: {
    color: '#888',
    fontSize: 14,
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
});
