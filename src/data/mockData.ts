import { AITool } from '../types/navigation';

export const mockAITools: AITool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Advanced language model for natural conversations and content generation',
    longDescription: 'ChatGPT is a state-of-the-art language model developed by OpenAI that can engage in natural conversations, answer questions, write content, and assist with various tasks. It uses advanced AI to understand context and generate human-like responses.',
    category: 'Language Models',
    icon: 'https://img.icons8.com/color/96/chatgpt.png',
    pricing: 'Free/Premium',
    rating: 4.8,
    isVerified: true,
    primaryTask: 'Text Generation',
    chromeStoreUrl: 'https://chrome.google.com/webstore/detail/chatgpt',
    features: ['Natural language processing', 'Content generation', 'Code assistance', 'Translation'],
    releaseDate: 'Nov 30, 2022'
  },
  {
    id: '2',
    name: 'Midjourney',
    description: 'AI-powered image generation from text descriptions',
    longDescription: 'Midjourney is an AI art generator that creates unique, artistic images from text descriptions. It excels at creating detailed, aesthetic images in various styles, from photorealistic to abstract art.',
    category: 'Image Generation',
    icon: 'https://img.icons8.com/color/96/midjourney.png',
    pricing: 'Subscription',
    rating: 4.7,
    isVerified: true,
    primaryTask: 'Image Generation',
    chromeStoreUrl: 'https://www.midjourney.com',
    features: ['Text-to-image generation', 'Style customization', 'High resolution output', 'Variations'],
    releaseDate: 'Jul 12, 2022'
  },
  {
    id: '3',
    name: 'Claude',
    description: 'Advanced AI assistant for writing and analysis',
    longDescription: 'Claude is an AI assistant developed by Anthropic, known for its strong capabilities in writing, analysis, and coding. It excels at understanding context and providing detailed, nuanced responses.',
    category: 'Language Models',
    icon: 'https://img.icons8.com/color/96/bot.png',
    pricing: 'Free/Premium',
    rating: 4.6,
    isVerified: true,
    primaryTask: 'Text Generation',
    chromeStoreUrl: 'https://claude.ai',
    features: ['Long-form content', 'Code generation', 'Data analysis', 'Research assistance'],
    releaseDate: 'Mar 14, 2023'
  },
  {
    id: '4',
    name: 'DALL-E',
    description: 'OpenAI's image generation model for creative visuals',
    longDescription: 'DALL-E is an AI system by OpenAI that can create realistic images and art from natural language descriptions. It's known for its ability to combine concepts in creative and coherent ways.',
    category: 'Image Generation',
    icon: 'https://img.icons8.com/color/96/dall-e.png',
    pricing: 'Credits',
    rating: 4.5,
    isVerified: true,
    primaryTask: 'Image Generation',
    chromeStoreUrl: 'https://labs.openai.com',
    features: ['Text-to-image generation', 'Image editing', 'Variations', 'Inpainting'],
    releaseDate: 'Jan 5, 2021'
  },
  {
    id: '5',
    name: 'Codeium',
    description: 'AI-powered coding assistant for developers',
    longDescription: 'Codeium is an AI coding assistant that helps developers write better code faster. It provides intelligent code completions, suggestions, and explanations across multiple programming languages.',
    category: 'Development',
    icon: 'https://img.icons8.com/color/96/code.png',
    pricing: 'Free/Team',
    rating: 4.9,
    isVerified: true,
    primaryTask: 'Code Generation',
    chromeStoreUrl: 'https://codeium.com',
    features: ['Code completion', 'Documentation generation', 'Code explanation', 'Multi-language support'],
    releaseDate: 'Dec 1, 2022'
  }
];
