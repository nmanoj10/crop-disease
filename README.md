<div align="center">

<br/>

```
   ___                 _   _  _     _
  / _ \  __ _  _ __  | | | |(_)___(_)  ___  _ __
 / /_\ \/ _` || '__/ | |_| || / __| | / _ \| '_ \
|  _  || (_| || |    |  _  || \__ \ || (_) | | | |
|_| |_| \__, ||_|    |_| |_||_|___/_| \___/|_| |_|
         |___/
```

<img src="https://readme-typing-svg.demolab.com?font=Cabinet+Grotesk&weight=700&size=32&duration=3000&pause=1000&color=22C55E&center=true&vCenter=true&width=600&lines=AI-Powered+Crop+Disease+Detection;Smart+Farming+for+the+Future;Protect+Your+Harvest+with+AI" alt="Typing SVG" />

<br/>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Live-22c55e?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/AI-Gemini_Vision-4285F4?style=for-the-badge&logo=google&logoColor=white" />
  <img src="https://img.shields.io/badge/Stack-MERN-61DAFB?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-f59e0b?style=for-the-badge" />
</p>

<p align="center">
  <a href="https://crop-disease-seven.vercel.app/">
    <img src="https://img.shields.io/badge/🌐_Live_Demo-Visit_Now-16a34a?style=for-the-badge" />
  </a>
  &nbsp;&nbsp;
  <a href="https://github.com/nmanoj10/crop-disease/issues">
    <img src="https://img.shields.io/badge/🐛_Report_Bug-Open_Issue-dc2626?style=for-the-badge" />
  </a>
  &nbsp;&nbsp;
  <a href="https://github.com/nmanoj10/crop-disease/issues">
    <img src="https://img.shields.io/badge/💡_Request_Feature-Suggest-7c3aed?style=for-the-badge" />
  </a>
</p>

<br/>

> **AgroVision** is a full-stack AI platform that empowers farmers to detect crop diseases instantly, forecast weather-related risks, discover government schemes, and boost farm productivity — all from a single intelligent dashboard.

<br/>

</div>

---

## 📸 Platform Preview

<div align="center">

| Landing Page | Disease Detection |
|:---:|:---:|
| ![Landing](https://github.com/user-attachments/assets/dfbe5951-7fbc-4672-918d-794c2919096d) | ![Detection](https://github.com/user-attachments/assets/dc52ed96-3461-4791-9a71-18266f6ffae4) |

| AI Assistant | Weather & Risk |
|:---:|:---:|
| ![AI Chat](https://github.com/user-attachments/assets/780a4346-15dd-49bf-96aa-66584889cf0e) | ![Weather](https://github.com/user-attachments/assets/079cdeb9-fa41-456e-841c-cfe47358fd65) |

| Income Advisor | Government Schemes |
|:---:|:---:|
| ![Income](https://github.com/user-attachments/assets/f34b80ab-2921-491a-9326-e062baa70009) | ![Schemes](https://github.com/user-attachments/assets/6f06171c-b651-46c5-b39c-386acfb72de1) |

| Community Board | Admin Dashboard |
|:---:|:---:|
| ![Community](https://github.com/user-attachments/assets/28b67a7c-8503-472e-854b-58efd895ac93) | ![Admin](https://github.com/user-attachments/assets/473748e2-990a-4988-adf8-9d980cca516e) |

</div>

---

## 🌿 What is AgroVision?

AgroVision is a complete digital ecosystem built for modern agriculture. It bridges the gap between **cutting-edge AI technology** and **everyday farming challenges** — providing real-time disease detection, intelligent advisory, and data-driven insights that help farmers make smarter decisions and protect their livelihoods.

```
Upload a leaf image → AI detects the disease → Get treatment in seconds
```

No expertise required. No complicated setup. Just point, scan, and grow.

---

## ✨ Core Features

### 🌿 AI Crop Disease Detection
> Upload any crop leaf image and get an instant AI-powered diagnosis

- Drag-and-drop or capture leaf images directly
- Custom-trained ML model identifies diseases with high accuracy
- **Gemini Vision fallback** automatically activates when model confidence is low
- Returns detailed insights: disease name, symptoms, treatment plan, and prevention tips
- Every scan is saved to your personal history dashboard

### 🤖 AI Agricultural Assistant
> A Gemini-powered chatbot that answers your farming questions 24/7

- Ask anything: disease identification, pesticide guidance, fertilizer ratios
- Weather-sensitive crop advice based on your local conditions
- Best practices for soil health, irrigation, and seasonal planning
- Conversational interface — just type and get expert-level responses

### 🌦 Weather & Disease Risk Engine
> Know before it happens — forecast crop threats before they strike

- Real-time weather conditions from OpenWeatherMap
- Full 7-day weather forecast with farming impact analysis
- AI-generated disease risk alerts based on humidity, temperature, and environmental patterns
- Region-specific recommendations to prevent outbreak before it starts

### 💰 Income & Crop Recommendation Advisor
> Maximize your farm's profitability with data-driven crop planning

| Feature | Description |
|---|---|
| Profit Calculator | Estimate crop ROI before planting |
| Crop Recommender | AI suggests best crops for your land and season |
| Yield Insights | Compare seasonal yield projections |
| Water Requirements | Smart irrigation planning per crop |
| High-Yield Rankings | See the top-performing crops for your region |

### 🏛 Government Scheme Explorer
> Never miss a subsidy or government program again

Instant access to key agriculture schemes:

- 🌾 **PM-KISAN** — Direct income support for farmers
- 🛡 **PMFBY** — Pradhan Mantri Fasal Bima Yojana (Crop Insurance)
- 💳 **Kisan Credit Card** — Affordable credit for agricultural needs
- 💧 **Irrigation Subsidies** — Water infrastructure support programs
- 🌱 **Organic Farming Support** — Incentives to go chemical-free

### 💡 Community Innovation Board
> A collaborative space where farmers share and discover new ideas

- Submit innovative farming solutions or techniques
- Browse ideas from the community
- Receive feedback from agricultural experts
- Vote on proposals and help surface the best ideas

---

## 🏗 System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        AgroVision Platform                       │
├───────────────────┬─────────────────────┬───────────────────────┤
│    React Frontend │   Express Backend   │   External Services   │
│    (Vite + TW)   │   (Node.js REST)    │                       │
│                   │                     │  • Gemini Vision API  │
│  ┌─────────────┐  │  ┌───────────────┐  │  • Gemini Chat API   │
│  │  Landing    │  │  │ /api/detect   │  │  • OpenWeatherMap    │
│  │  Dashboard  │◄─┼─►│ /api/scans    │  │  • Cloudinary CDN    │
│  │  Detect     │  │  │ /api/weather  │  │  • MongoDB Atlas     │
│  │  AI Chat    │  │  │ /api/chat     │  │                       │
│  │  Weather    │  │  │ /api/schemes  │  └───────────────────────┘
│  │  Income     │  │  │ /api/proposals│
│  │  Schemes    │  │  └───────────────┘
│  │  Proposals  │  │         │
│  └─────────────┘  │         ▼
│                   │  ┌───────────────┐
│                   │  │  MongoDB Atlas │
│                   │  │  (Users,Scans) │
│                   │  └───────────────┘
└───────────────────┴─────────────────────┘
```

---

## 🔁 Disease Detection Workflow

```
                    ┌──────────────────┐
                    │  User Uploads    │
                    │   Leaf Image     │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  Cloudinary CDN  │
                    │  (Image Store)   │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  Custom ML Model │
                    │  (Disease CNN)   │
                    └────────┬─────────┘
                             │
               ┌─────────────▼─────────────┐
               │   Confidence ≥ threshold?  │
               └──────┬────────────┬────────┘
                      │ YES        │ NO
                      ▼            ▼
             ┌──────────────┐  ┌──────────────┐
             │ ML Prediction│  │ Gemini Vision │
             │  Returned    │  │  Fallback AI  │
             └──────┬───────┘  └──────┬────────┘
                    └─────────┬────────┘
                              ▼
                    ┌──────────────────┐
                    │  Disease Report  │
                    │ Name • Symptoms  │
                    │  Treatment Plan  │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  Saved to MongoDB│
                    │  Scan History    │
                    └──────────────────┘
```

---

## 🧠 Tech Stack

<div align="center">

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | React + Vite | Fast, component-based UI |
| **Styling** | Tailwind CSS | Utility-first responsive design |
| **Backend** | Node.js + Express | REST API server |
| **Database** | MongoDB Atlas | Cloud-hosted document storage |
| **Auth** | JWT + Refresh Tokens | Secure session management |
| **AI — Detection** | Custom ML Model | Crop disease CNN classifier |
| **AI — Fallback** | Gemini Vision API | Low-confidence image analysis |
| **AI — Chat** | Gemini AI | Agricultural assistant chatbot |
| **Weather** | OpenWeatherMap API | Forecast + environmental data |
| **Image Hosting** | Cloudinary | Leaf image storage + CDN |
| **Deployment** | Vercel | Frontend hosting + CI/CD |

</div>

---

## 📂 Project Structure

```
crop-disease/
│
├── client/                          # React Frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── DiseaseCard.jsx
│   │   │   ├── WeatherWidget.jsx
│   │   │   └── ChatInterface.jsx
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx      # Platform intro & features
│   │   │   ├── Dashboard.jsx        # Scan history & stats
│   │   │   ├── DetectDisease.jsx    # Image upload & AI analysis
│   │   │   ├── AIAssistant.jsx      # Gemini-powered chatbot
│   │   │   ├── Weather.jsx          # Forecast & risk alerts
│   │   │   ├── IncomeAdvisor.jsx    # Crop profitability tools
│   │   │   ├── Schemes.jsx          # Government scheme explorer
│   │   │   └── ProposalBoard.jsx    # Community innovation
│   │   ├── services/
│   │   │   ├── api.js               # Axios instance
│   │   │   └── auth.js              # Token management
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── vite.config.js
│
├── server/                          # Express Backend
│   ├── controllers/
│   │   ├── detectController.js      # ML + Gemini detection logic
│   │   ├── chatController.js        # AI assistant handler
│   │   ├── weatherController.js     # OpenWeatherMap integration
│   │   └── schemeController.js      # Government schemes data
│   ├── models/
│   │   ├── User.js                  # Mongoose user schema
│   │   ├── Scan.js                  # Disease scan history
│   │   └── Proposal.js             # Community proposals
│   ├── routes/
│   │   ├── detect.js
│   │   ├── auth.js
│   │   ├── weather.js
│   │   └── proposals.js
│   ├── middleware/
│   │   ├── auth.js                  # JWT verification
│   │   └── upload.js               # Multer + Cloudinary
│   └── server.js                   # Entry point
│
├── .env.example
├── package.json
└── README.md
```

---

## ⚡ Quick Start

### Prerequisites

Make sure you have the following installed:

- **Node.js** v18 or higher — [Download](https://nodejs.org/)
- **npm** v9 or higher
- **Git** — [Download](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/nmanoj10/crop-disease.git
cd crop-disease
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

```bash
cp .env.example .env
```

Then open `.env` and fill in your credentials:

```env
# ─── Server ───────────────────────────────────
NODE_ENV=development
PORT=3001
FRONTEND_URL=http://localhost:5173

# ─── Database ─────────────────────────────────
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/agrovision

# ─── Authentication ───────────────────────────
JWT_ACCESS_SECRET=your_jwt_access_secret_min_32_chars
JWT_REFRESH_SECRET=your_jwt_refresh_secret_min_32_chars

# ─── AI Services ──────────────────────────────
GEMINI_API_KEY=AIzaSy_your_gemini_api_key_here

# ─── Weather ──────────────────────────────────
OPENWEATHER_API_KEY=your_openweathermap_api_key

# ─── Image Storage ────────────────────────────
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

<details>
<summary>📋 Where to get each API key</summary>

| Key | Where to Get |
|---|---|
| `MONGODB_URI` | [MongoDB Atlas](https://cloud.mongodb.com) → Create free M0 cluster |
| `GEMINI_API_KEY` | [Google AI Studio](https://aistudio.google.com) → Get API Key |
| `OPENWEATHER_API_KEY` | [OpenWeatherMap](https://openweathermap.org/api) → Free tier |
| `CLOUDINARY_*` | [Cloudinary Console](https://cloudinary.com) → Dashboard credentials |

</details>

### 4. Run the Application

**Start the backend server:**
```bash
npm run server
```

**Start the frontend (new terminal):**
```bash
npm run dev
```

**Open in your browser:**
```
http://localhost:5173
```

---

## 🔌 API Reference

### Health Check
```http
GET /api/health
```
```json
{ "status": "ok", "timestamp": "2025-03-13T18:30:00.000Z" }
```

### Detect Disease
```http
POST /api/detect
Content-Type: multipart/form-data

Body: { image: <file> }
```
```json
{
  "disease": "Tomato Late Blight",
  "confidence": 0.94,
  "symptoms": ["Dark brown lesions", "White mold on underside"],
  "treatment": ["Apply copper-based fungicide", "Remove infected leaves"],
  "source": "ml_model"
}
```

### Get Scan History
```http
GET /api/scans
Authorization: Bearer <token>
```
```json
{
  "scans": [
    {
      "_id": "...",
      "disease": "Tomato Late Blight",
      "confidence": 0.94,
      "imageUrl": "https://res.cloudinary.com/...",
      "createdAt": "2025-03-13T18:30:00.000Z"
    }
  ],
  "total": 12
}
```

### AI Chat
```http
POST /api/chat
Content-Type: application/json

{ "message": "What pesticide should I use for powdery mildew?" }
```

### Weather + Risk
```http
GET /api/weather?lat=28.6139&lon=77.2090
```

---

## 📊 Platform Modules

| Module | Route | Description |
|---|---|---|
| 🏠 Landing Page | `/` | Platform intro, features, and CTA |
| 📊 Dashboard | `/dashboard` | Scan statistics and recent activity |
| 🌿 Disease Detect | `/detect` | Upload leaf → AI analysis |
| 🤖 AI Assistant | `/assistant` | Gemini-powered farming chatbot |
| 🌦 Weather | `/weather` | Forecast and crop risk analysis |
| 💰 Income Advisor | `/income` | Crop profitability calculator |
| 🏛 Gov. Schemes | `/schemes` | Agricultural scheme explorer |
| 💡 Proposal Board | `/proposals` | Community innovation platform |

---

## 🎯 Use Cases

```
🌾 Small & marginal farmers    — Get expert-level disease diagnosis for free
📚 Agriculture students        — Learn plant pathology with real AI feedback
🏢 AgriTech startups           — Integrate our ML model via API
🔬 Research institutions       — Collect labeled crop disease datasets
🌐 Smart farming systems       — Plug in IoT data for predictive alerts
```

---

## 🔮 Roadmap

- [ ] 📱 Native mobile app (React Native) for offline use in low-connectivity farms
- [ ] 🛸 Drone crop scanning integration for field-scale disease mapping
- [ ] 🛰 Satellite-based crop monitoring with NDVI analysis
- [ ] 🧪 Soil sensor integration for NPK and pH-based recommendations
- [ ] 🗣 Multilingual voice assistant (Hindi, Tamil, Telugu, Marathi)
- [ ] 🌍 Multi-region support with localized crop databases
- [ ] 📡 SMS alerts for disease risk notifications (no internet required)
- [ ] 🤝 Marketplace for farmers to buy/sell organic produce directly

---

## 🤝 Contributing

Contributions make the open-source community thrive. Any contribution is **greatly appreciated**.

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/crop-disease.git

# 3. Create a feature branch
git checkout -b feature/your-amazing-feature

# 4. Make your changes and commit
git add .
git commit -m "feat: add your amazing feature"

# 5. Push to your fork
git push origin feature/your-amazing-feature

# 6. Open a Pull Request on GitHub
```

### Commit Convention

| Prefix | Description |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation changes |
| `style:` | Formatting, no logic change |
| `refactor:` | Code restructure |
| `test:` | Adding tests |

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for full terms.

```
MIT License — Free to use, modify, and distribute with attribution.
```

---

## 👨‍💻 Author

<div align="center">

<img src="https://github.com/nmanoj10.png" width="100" style="border-radius:50%"/>

**Manoj N**

*Full-Stack Developer | AI Enthusiast | AgriTech Builder*

[![GitHub](https://img.shields.io/badge/GitHub-nmanoj10-181717?style=for-the-badge&logo=github)](https://github.com/nmanoj10)
[![Live Demo](https://img.shields.io/badge/Live_Demo-AgroVision-16a34a?style=for-the-badge&logo=vercel)](https://crop-disease-seven.vercel.app/)

</div>

---

<div align="center">

**Made with 🌱 for farmers everywhere**

*If AgroVision helped you, consider giving it a ⭐ on GitHub — it means a lot!*

</div>
