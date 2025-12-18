# Task_manager
# Task Manager - Full Stack Application

A production-ready **full-stack Task Manager application** built using **Node.js, Express, PostgreSQL, React**, and **GitHub Actions CI/CD**.  
The project follows real-world Git workflows, secure authentication, and free-tier-friendly deployment.

---

## Live Application

- **Frontend**: https://task-manager-frontend.onrender.com/ 
- **Health Check**: https://task-manager-backend.onrender.com/api/health  


## Tech Stack

### Backend
- Node.js
- Express.js
- PostgreSQL
- Knex.js (migrations)
- JWT Authentication

### Frontend
- React (Vite)
- Fetch API
- LocalStorage for auth token

### DevOps & Tools
- Git & GitHub
- GitHub Actions (CI) -- focused on learning the commands.
- Render (Deployment)
- Curl / Postman for API testing


task-manager/
├─ backend/
│ ├─ src/
│ │ ├─ routes/ # API routes
│ │ ├─ services/ # Business logic
│ │ ├─ middleware/ # Auth middleware
│ │ ├─ db/ # Migration runner
│ │ └─ app.js
│ ├─ migrations/ # Knex migrations
│ ├─ knexfile.js
│ └─ package.json
│
├─ frontend/
│ ├─ src/
│ │ ├─ pages/ # Login, Dashboard
│ │ ├─ utils/ # Auth helpers
│ │ └─ App.jsx
│ └─ package.json
│
└─ README.md


## ⚙️ Local Setup

### 1️⃣ Backend Setup
```bash
cd backend
cp .env.example .env
npm install
npm run dev
