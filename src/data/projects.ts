import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'autonomous-robot',
    title: 'Autonomous Navigation Robot',
    category: ['Robotics', 'AI', 'Computer Vision'],
    shortDescription: 'Mobile robot with autonomous navigation using SLAM and pathfinding',
    description: 'An autonomous mobile robot capable of navigating unknown environments using SLAM (Simultaneous Localization and Mapping) algorithms and real-time obstacle detection.',
    overview: 'This project demonstrates the integration of robotics hardware with advanced AI algorithms for autonomous navigation in complex environments.',
    problem: 'Navigation in unknown environments without GPS requires real-time mapping and localization while avoiding dynamic obstacles.',
    goal: 'Create a robot capable of autonomous navigation with real-time decision making and obstacle avoidance.',
    approach: 'Implemented ROS-based architecture with SLAM, computer vision for obstacle detection, and A* pathfinding algorithm.',
    implementation: 'Integrated LiDAR sensors, camera modules, and motor controllers with ROS middleware running path planning and navigation algorithms.',
    features: [
      'Real-time SLAM mapping',
      'Dynamic obstacle detection and avoidance',
      'Autonomous pathfinding',
      'Multi-sensor fusion',
      'Real-time visualization',
      'Emergency stop protocols'
    ],
    results: 'Successfully navigated 50+ test scenarios with 95% accuracy. Average path efficiency: 88% of optimal.',
    lessons: 'Gained deep understanding of sensor calibration, data fusion, and real-time systems. Learned importance of redundant safety mechanisms.',
    technologies: ['ROS', 'Python', 'OpenCV', 'LiDAR', 'Arduino', 'C++'],
    image: '🤖',
    github: 'https://github.com/AmnaAmir429',
    priority: 1
  },
  {
    id: 'ml-gesture-recognition',
    title: 'Real-Time Gesture Recognition System',
    category: ['AI/ML', 'Computer Vision', 'Deep Learning'],
    shortDescription: 'Deep learning model for hand gesture recognition with real-time inference',
    description: 'A convolutional neural network-based system that recognizes hand gestures in real-time from video streams with 94% accuracy.',
    overview: 'This project combines deep learning with computer vision to enable gesture-based human-computer interaction.',
    problem: 'Traditional gesture recognition systems lack accuracy and real-time processing capability for practical applications.',
    goal: 'Develop a real-time gesture recognition system with high accuracy and low latency.',
    approach: 'Trained custom CNN on augmented hand gesture dataset, optimized for mobile deployment using TensorFlow Lite.',
    implementation: 'Used transfer learning with MobileNet, implemented real-time inference with OpenCV, and created web interface for interaction.',
    features: [
      'Real-time gesture detection',
      '94% accuracy on test set',
      'Supports 10+ gestures',
      'Mobile-optimized model',
      'Live camera feed processing',
      'Gesture history logging'
    ],
    results: 'Achieved 94% accuracy. Inference time: 45ms per frame on CPU. Successfully deployed on mobile devices.',
    lessons: 'Learned importance of data augmentation, transfer learning strategies, and model optimization for edge devices.',
    technologies: ['TensorFlow', 'Keras', 'OpenCV', 'Python', 'NumPy', 'Pandas'],
    image: '🤲',
    github: 'https://github.com/AmnaAmir429',
    priority: 2
  },
  {
    id: 'iot-smart-home',
    title: 'IoT Smart Home Automation System',
    category: ['IoT', 'Embedded Systems', 'Web Dev'],
    shortDescription: 'Connected home automation system with ML-based occupancy prediction',
    description: 'A comprehensive smart home system using IoT sensors and machine learning to predict occupancy and optimize energy consumption.',
    overview: 'Integration of embedded systems, sensor networks, and machine learning for intelligent home automation.',
    problem: 'Home automation systems lack intelligence in adapting to occupancy patterns, leading to energy waste.',
    goal: 'Create an intelligent home automation system that learns and adapts to user patterns.',
    approach: 'Implemented ESP32-based sensor network with MQTT protocol, trained ML model on occupancy data, created web dashboard.',
    implementation: 'Used MQTT for device communication, trained XGBoost model for occupancy prediction, built React dashboard for monitoring.',
    features: [
      'Real-time sensor monitoring',
      'ML-based occupancy prediction',
      'Automated energy optimization',
      'Mobile app control',
      'Historical data analytics',
      'Smart scheduling'
    ],
    results: 'Reduced energy consumption by 23%. Achieved 91% occupancy prediction accuracy. Real-time monitoring of 20+ sensors.',
    lessons: 'Understood IoT protocols, sensor calibration challenges, and practical deployment of ML models in embedded systems.',
    technologies: ['ESP32', 'Arduino', 'MQTT', 'Python', 'React', 'Node.js', 'XGBoost'],
    image: '🏠',
    github: 'https://github.com/AmnaAmir429',
    priority: 3
  },
  {
    id: 'nlp-chatbot',
    title: 'AI-Powered Chatbot with NLP',
    category: ['AI/ML', 'NLP', 'Web Dev'],
    shortDescription: 'Context-aware chatbot using transformer-based NLP and RAG',
    description: 'An intelligent chatbot system using transformer models and Retrieval-Augmented Generation for contextual conversations.',
    overview: 'Combines modern NLP techniques with information retrieval for intelligent conversational AI.',
    problem: 'General chatbots lack domain knowledge and context awareness for specialized conversations.',
    goal: 'Build a domain-aware chatbot capable of maintaining context across conversations.',
    approach: 'Implemented RAG architecture using BERT embeddings, fine-tuned GPT-2 for domain-specific responses.',
    implementation: 'Used Hugging Face transformers, implemented vector database for retrieval, created FastAPI backend.',
    features: [
      'Context-aware responses',
      'Multi-turn conversations',
      'Document retrieval',
      'Sentiment analysis',
      'Conversation history',
      'API integration'
    ],
    results: 'Achieved 89% response relevance. Handles 50+ concurrent users. Response time: <500ms average.',
    lessons: 'Deep dive into transformer architectures, learned fine-tuning strategies, and practical deployment of LLMs.',
    technologies: ['Python', 'PyTorch', 'Hugging Face', 'FastAPI', 'BERT', 'React', 'Pinecone'],
    image: '💬',
    github: 'https://github.com/AmnaAmir429',
    priority: 4
  }
];
