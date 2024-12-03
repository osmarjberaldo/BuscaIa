import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';

export type AITool = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: string;
  icon: string;
  pricing: string;
  rating: number;
  isVerified: boolean;
  primaryTask: string;
  chromeStoreUrl: string;
  features: string[];
  releaseDate: string;
};

export type RootStackParamList = {
  HomeScreen: undefined;
  Detail: { tool: AITool };
};

export type TabParamList = {
  Home: undefined;
  Categories: undefined;
  News: undefined;
  Contact: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = 
  NativeStackScreenProps<RootStackParamList, T>;

export type TabScreenProps<T extends keyof TabParamList> = 
  BottomTabScreenProps<TabParamList, T>;

export type HomeScreenProps = CompositeScreenProps<
  RootStackScreenProps<'HomeScreen'>,
  BottomTabScreenProps<TabParamList>
>;

export type DetailScreenProps = CompositeScreenProps<
  RootStackScreenProps<'Detail'>,
  BottomTabScreenProps<TabParamList>
>;
