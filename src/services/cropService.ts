import { CropScan, DetectionResult } from '../types';

export const cropService = {
  detect: async (_imageFile: File): Promise<DetectionResult> => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return {
      success: true,
      source: Math.random() > 0.5 ? 'AI Model' : 'Gemini Vision',
      data: {
        disease_name: 'Tomato Late Blight',
        confidence: 94.5,
        severity: 'High',
        affected_area_percent: 15,
        is_healthy: false,
        causes: [
          'High humidity and moderate temperatures',
          'Poor air circulation between plants',
          'Infected seeds or transplants',
        ],
        treatment: [
          'Apply copper-based fungicides immediately',
          'Remove and destroy infected leaves',
          'Avoid overhead watering',
        ],
        prevention: [
          'Use resistant varieties',
          'Practice crop rotation',
          'Ensure proper spacing for airflow',
        ],
      },
    };
  },

  getHistory: async (): Promise<CropScan[]> => [
    {
      id: '1',
      imageUrl: 'https://picsum.photos/seed/leaf1/200/200',
      detectedDisease: 'Tomato Late Blight',
      severity: 'High',
      source: 'AI Model',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      imageUrl: 'https://picsum.photos/seed/leaf2/200/200',
      detectedDisease: 'Potato Early Blight',
      severity: 'Medium',
      source: 'Gemini Vision',
      createdAt: new Date(Date.now() - 86400000).toISOString(),
    },
  ],
};
