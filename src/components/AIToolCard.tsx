import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Card, Text, Icon } from '@rneui/themed';
import { AITool } from '../types/navigation';
import { styles } from '../styles';

type AIToolCardProps = {
  tool: AITool;
  onPress: () => void;
};

export const AIToolCard: React.FC<AIToolCardProps> = ({ tool, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
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
  );
};
