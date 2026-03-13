export type UserRole = 'farmer' | 'expert' | 'admin' | 'guest';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  isVerified?: boolean;
  isBanned?: boolean;
  totalScans?: number;
}

export type IUser = User;

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface DiseaseData {
  disease_name: string;
  confidence: number;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  affected_area_percent: number;
  causes: string[];
  treatment: string[];
  prevention: string[];
  is_healthy: boolean;
}

export type GeminiResult = DiseaseData;

export interface ModelPrediction {
  diseaseName: string;
  confidence: number;
  isHealthy: boolean;
  rawLabel: string;
}

export type DetectionSource = 'AI Model' | 'Gemini Vision';

export interface DetectionResult {
  success: boolean;
  source: DetectionSource;
  data: DiseaseData;
}

export interface CropScan {
  id: string;
  imageUrl: string;
  detectedDisease: string;
  severity: DiseaseData['severity'];
  source: DetectionSource;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: string;
}

export interface WeatherAlert {
  id: string;
  type: 'danger' | 'warning' | 'info';
  message: string;
}

export interface WeatherForecastDay {
  day: string;
  tempHigh: number;
  tempLow: number;
  humidity: number;
}

export interface DiseaseRisk {
  crop: string;
  level: 'Low' | 'Medium' | 'High' | 'Critical';
  likelyDisease: string;
  action: string;
}

export interface WeatherData {
  current: {
    temp: number;
    feelsLike: number;
    humidity: number;
    windSpeed: number;
    condition: string;
    location: string;
  };
  forecast: WeatherForecastDay[];
  alerts: WeatherAlert[];
  diseaseRisks: DiseaseRisk[];
}
