🌱 AgroVision — AI Crop Disease Detection Platform

AgroVision is an AI-powered smart agriculture platform that helps farmers detect crop diseases early, monitor weather risks, and improve farm productivity using machine learning and intelligent tools.

The platform provides a complete digital ecosystem for modern agriculture, integrating crop disease detection, AI farming assistance, weather forecasting, crop profitability insights, and government scheme discovery.

🔗 Live Demo:
https://crop-disease-seven.vercel.app/

🚀 Key Features
🌿 AI Crop Disease Detection

Detect plant diseases instantly by uploading a leaf image.

Features:

Upload crop leaf images

Detect diseases using a trained machine learning model

Gemini Vision fallback when prediction confidence is low

Provides detailed insights including:

Disease name

Symptoms

Treatment recommendations

🤖 AI Agricultural Assistant

An intelligent chat assistant designed to help farmers with agricultural queries.

Capabilities:

Crop disease diagnosis guidance

Pesticide recommendations

Fertilizer suggestions

Weather-related farming advice

Best farming practices

Powered by Gemini AI.

🌦 Weather & Disease Risk Prediction

Real-time weather insights combined with crop disease risk analysis.

Features:

Current weather conditions

7-day forecast

Disease risk alerts based on:

humidity

temperature

environmental patterns

Powered by OpenWeatherMap API.

💰 Income & Crop Recommendation

Data-driven crop profitability analysis.

Features:

Profit calculator

Crop recommendation system

Seasonal yield insights

Water requirement comparison

High-yield crop suggestions

🏛 Government Schemes for Farmers

Centralized platform for accessing agriculture schemes.

Includes information on:

PM-KISAN

PMFBY (Crop Insurance)

Kisan Credit Card

Irrigation Subsidies

Organic Farming Support Programs

💡 Community Innovation Board

A collaborative space for agricultural innovation.

Users can:

Submit farming solutions

Share innovative agricultural ideas

Receive expert feedback

Vote and support community proposals

🖥 Platform Modules
Module	Description
Landing Page	Platform introduction and feature overview
Dashboard	Scan statistics and quick actions
Detect Disease	Upload crop leaf image for AI analysis
AI Assistant	Chat-based farming advisor
Weather	Weather forecast and crop risk analysis
Income Advisor	Crop profitability calculator
Government Schemes	Agricultural schemes explorer
Proposal Board	Community innovation platform
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

AI / Machine Learning

Custom ML model for crop disease detection

Gemini Vision API fallback

Gemini AI for agricultural chatbot

External APIs

Weather Data

OpenWeatherMap API

AI Integration

Gemini AI

Deployment

Frontend hosted on
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


