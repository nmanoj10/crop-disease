🌱 AgroVision – AI Crop Disease Detection Platform

AI-powered agriculture platform that helps farmers detect crop diseases early, analyze weather risks, and improve farm productivity using machine learning and intelligent tools.

🔗 Live Demo: https://crop-disease-seven.vercel.app/

AgroVision provides a complete smart farming ecosystem including disease detection, AI assistant, weather forecasting, crop profit analysis, and government scheme discovery.

🚀 Key Features
🌿 AI Crop Disease Detection

Upload a leaf image

Detect plant diseases instantly

Uses local trained ML model

Gemini Vision fallback when prediction confidence is low

Provides:

Disease name

Symptoms

Treatment recommendations

🤖 AI Agricultural Assistant

Chat-based AI assistant for farmers.

Helps with:

crop diseases

pesticides

fertilizers

weather risks

farming practices

Powered by Gemini AI.

🌦 Weather & Disease Risk Prediction

Real-time weather conditions

7-day forecast

Disease risk prediction based on:

humidity

temperature

weather patterns

Powered by OpenWeather API.

💰 Income & Crop Recommendation

Smart crop profitability analysis.

Features:

Profit calculator

Crop recommendation

Seasonal yield insights

Water requirement comparison

🏛 Government Schemes for Farmers

Explore agriculture schemes such as:

PM-KISAN

PMFBY (Crop Insurance)

Kisan Credit Card

Irrigation Subsidy

Organic Farming Support

All information available in one place.

💡 Community Innovation Board

Farmers and innovators can:

Submit new farming solutions

Share innovative ideas

Get expert feedback

Vote on proposals

🖥 Platform Modules
Module	Description
Landing Page	Platform introduction and feature overview
Dashboard	Scan statistics and quick actions
Detect Disease	Upload crop leaf image for AI analysis
AI Assistant	Chat-based farming advisor
Weather	Forecast and disease risk analysis
Income Advisor	Crop profitability calculator
Govt Schemes	Agricultural schemes explorer
Proposal Board	Community innovation sharing
🧠 Tech Stack
Frontend

React

Vite

Tailwind CSS

Backend

Node.js

Express.js

Database

MongoDB Atlas

AI / ML

Custom ML model for crop disease detection

Gemini Vision API fallback

APIs

Weather: OpenWeatherMap

AI Chat: Gemini AI

Deployment

Frontend deployed on
Vercel

📂 Project Structure
<img width="615" height="631" alt="image" src="https://github.com/user-attachments/assets/c47ef1b8-8965-4f0d-a3ad-b9be25641f63" />


Create a .env file in the root directory.

NODE_ENV=development
PORT=3001
FRONTEND_URL=http://localhost:5173

# MongoDB
MONGODB_URI=your_mongodb_connection

# JWT
JWT_ACCESS_SECRET=your_secret
JWT_REFRESH_SECRET=your_secret

# AI
GEMINI_API_KEY=your_api_key

# Weather API
OPENWEATHER_API_KEY=your_api_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_name
🛠 Installation
1️⃣ Clone Repository
git clone https://github.com/nmanoj10/crop-disease.git
2️⃣ Navigate to project
cd crop-disease
3️⃣ Install dependencies
npm install
4️⃣ Run backend
npm run server
5️⃣ Run frontend
npm run dev

Open in browser:

http://localhost:3000
🔌 API Endpoints
Health Check
GET /api/health
Detect Disease
POST /api/detect

Upload leaf image and receive disease analysis.

Get Scan History
GET /api/scans
📊 Example Workflow

1️⃣ User uploads crop leaf image
2️⃣ ML model predicts disease
3️⃣ If confidence < threshold → Gemini AI fallback
4️⃣ Disease diagnosis returned
5️⃣ Treatment suggestions shown
6️⃣ Scan stored in database

<img width="1920" height="1200" alt="Screenshot 2026-03-13 224950" src="https://github.com/user-attachments/assets/dfbe5951-7fbc-4672-918d-794c2919096d">


<img width="1920" height="1200" alt="Screenshot 2026-03-13 225004" src="https://github.com/user-attachments/assets/dc52ed96-3461-4791-9a71-18266f6ffae4" />
 />


<img width="1920" height="1200" alt="Screenshot 2026-03-13 225015" src="https://github.com/user-attachments/assets/780a4346-15dd-49bf-96aa-66584889cf0e" />


<img width="1920" height="1200" alt="Screenshot 2026-03-13 225109" src="https://github.com/user-attachments/assets/079cdeb9-fa41-456e-841c-cfe47358fd65" />


<img width="1920" height="1200" alt="Screenshot 2026-03-13 225129" src="https://github.com/user-attachments/assets/f34b80ab-2921-491a-9326-e062baa70009" />


<img width="1920" height="1200" alt="Screenshot 2026-03-13 225138" src="https://github.com/user-attachments/assets/6f06171c-b651-46c5-b39c-386acfb72de1" />


<img width="1920" height="1200" alt="Screenshot 2026-03-13 225155" src="https://github.com/user-attachments/assets/28b67a7c-8503-472e-854b-58efd895ac93" />


<img width="1920" height="1200" alt="Screenshot 2026-03-13 225205" src="https://github.com/user-attachments/assets/473748e2-990a-4988-adf8-9d980cca516e" />


<img width="1920" height="1200" alt="Screenshot 2026-03-13 225214" src="https://github.com/user-attachments/assets/c9fb04a8-336b-4a15-8d32-060aa578af19" />


<img width="1920" height="1200" alt="Screenshot 2026-03-13 225224" src="https://github.com/user-attachments/assets/9fc8a40d-b879-4a8c-99af-f8b05105c05e" />


🎯 Use Cases

Farmers detecting crop diseases early

Agriculture students learning plant pathology

Smart farming systems

AgriTech startups

Agricultural research

🔮 Future Improvements

Mobile app for farmers

Drone crop scanning

Satellite crop monitoring

Soil sensor integration

Multilingual voice assistant

🤝 Contributing

Contributions are welcome.

Steps:

Fork the repo

Create a new branch

feature/your-feature

Commit changes

Push branch

Open Pull Request

📜 License

This project is licensed under MIT License.

👨‍💻 Author

Manoj

GitHub:
https://github.com/nmanoj10


