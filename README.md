# 🌌 NebulaCore

**NebulaCore** is a multi-service fraud detection platform designed to showcase scalable architecture, real-time visualization, and system-level backend logic.

Built with:
- 🧠 **AI-powered fraud detection** using Python + Gunicorn
- ⚛️ **React dashboard** for live updates
- ⚙️ **(WIP) C++ market engine** with CPR for async communication
- 🐳 **Dockerized** microservice setup using `docker-compose`

---

## 🧠 Features

| Module        | Description                                                  | Status        |
|---------------|--------------------------------------------------------------|----------------|
| `spectra-ai`  | Python Flask service to simulate fraud based on volume      | ✅ Complete     |
| `dash-ui`     | React dashboard polling the fraud detection API             | ✅ Complete     |
| `market-engine` | C++ matching engine (simulated logic + REST integration)   | ⚠️ In Progress  |

---

## 🚀 How to Run

> Requirements: Docker + Docker Compose

```bash
git clone https://github.com/your-username/nebula-core.git
cd nebula-core
docker-compose up --build
```

> UI: [http://localhost:3001](http://localhost:3001)  
> API: [http://localhost:6000/latest-alert](http://localhost:6000/latest-alert)

---

## 📁 Folder Structure

```text
nebula-core/
├── docker-compose.yml
├── market-engine/        # C++ engine (optional build)
├── spectra-ai/           # Flask AI backend
├── dash-ui/              # React dashboard
└── README.md
```

---

## 🛠 Tech Stack
- **Python 3.10** + Flask
- **React 18** + Hooks
- **C++17** + CMake + CPR (planned)
- **Docker Compose** for orchestration

---

## 🤖 AI Logic
If transaction `volume > 1,000,000`, it flags the request as fraud:
```python
if data["volume"] > 1000000:
    return {"fraud": True, "reason": "Volume spike"}
```

This simulates real-time anomaly detection for testing dashboards.

---

## 📌 Notes
- You can **disable `market-engine`** in `docker-compose.yml` if not using it yet
- React dashboard updates every 3 seconds with simulated traffic
- Great base for adding JWT auth, persistent storage, or charts

---

## 📷 Screenshots (optional)
_Add a screenshot of the dashboard with fraud alert showing._

---

## 🧠 Future Plans
- Connect C++ engine fully to AI endpoint
- Add fraud history graph
- WebSocket support instead of polling
- JWT-secured endpoints

---

## ⚖️ License
MIT

---

> Built with frustration, caffeine, and an urge to prove the recruiters wrong. 
> _Push now. Ship always._
