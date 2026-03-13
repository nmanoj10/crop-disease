import { DiseaseRisk, WeatherAlert, WeatherData } from '../types';

const buildAlerts = (humidity: number, temp: number): WeatherAlert[] => {
  const alerts: WeatherAlert[] = [];

  if (humidity > 85) {
    alerts.push({
      id: 'humidity',
      type: 'warning',
      message: 'Humidity is high today. Fungal disease pressure is elevated.',
    });
  }

  if (temp > 34) {
    alerts.push({
      id: 'heat',
      type: 'danger',
      message: 'Afternoon heat stress is likely. Irrigate sensitive crops early.',
    });
  }

  if (alerts.length === 0) {
    alerts.push({
      id: 'stable',
      type: 'info',
      message: 'Conditions are stable. Keep monitoring leaf moisture and airflow.',
    });
  }

  return alerts;
};

const buildRisks = (humidity: number): DiseaseRisk[] => [
  {
    crop: 'Tomato',
    level: humidity > 82 ? 'High' : 'Medium',
    likelyDisease: 'Late Blight',
    action: 'Spray preventively and prune lower leaves.',
  },
  {
    crop: 'Potato',
    level: humidity > 85 ? 'Critical' : 'High',
    likelyDisease: 'Early Blight',
    action: 'Scout foliage twice daily and improve drainage.',
  },
  {
    crop: 'Wheat',
    level: humidity > 70 ? 'Medium' : 'Low',
    likelyDisease: 'Rust',
    action: 'Inspect for pustules and rotate fungicide classes if needed.',
  },
  {
    crop: 'Rice',
    level: humidity > 80 ? 'High' : 'Medium',
    likelyDisease: 'Blast',
    action: 'Reduce prolonged leaf wetness and avoid excess nitrogen.',
  },
];

export const frontendWeatherService = {
  getWeather: async (location: string): Promise<WeatherData> => {
    await new Promise((resolve) => setTimeout(resolve, 900));

    const humidity = location.toLowerCase().includes('nashik') ? 87 : 74;
    const temp = location.toLowerCase().includes('punjab') ? 31 : 28;

    return {
      current: {
        temp,
        feelsLike: temp + 2,
        humidity,
        windSpeed: 14,
        condition: humidity > 80 ? 'Humid and cloudy' : 'Partly cloudy',
        location,
      },
      forecast: [
        { day: 'Sat', tempHigh: temp + 1, tempLow: temp - 5, humidity: humidity - 3 },
        { day: 'Sun', tempHigh: temp + 2, tempLow: temp - 4, humidity: humidity - 6 },
        { day: 'Mon', tempHigh: temp, tempLow: temp - 6, humidity: humidity - 4 },
        { day: 'Tue', tempHigh: temp + 1, tempLow: temp - 5, humidity: humidity - 2 },
        { day: 'Wed', tempHigh: temp + 3, tempLow: temp - 4, humidity: humidity - 8 },
        { day: 'Thu', tempHigh: temp + 2, tempLow: temp - 5, humidity: humidity - 5 },
        { day: 'Fri', tempHigh: temp + 1, tempLow: temp - 6, humidity: humidity - 7 },
      ],
      alerts: buildAlerts(humidity, temp),
      diseaseRisks: buildRisks(humidity),
    };
  },
};
