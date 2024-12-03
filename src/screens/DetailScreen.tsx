import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, TextInput, Linking } from 'react-native';
import { Text, Icon } from '@rneui/themed';
import { DetailScreenProps } from '../types/navigation';
import { styles } from '../styles';

export const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
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
            name={showFullDescription ? "keyboard_arrow_up" : "keyboard_arrow_down"} 
            type="material"
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
};
