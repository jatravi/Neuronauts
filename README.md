# Neuronauts

MAITRI/
 ├── frontend/                        # React app for UI, dashboard, etc.
 │    ├── public/
 │    │    └── index.html             # Main HTML file for React
 │    ├── src/
 │    │    ├── components/            # React components (e.g., Dashboard, Alerts)
 │    │    ├── App.jsx                # Main React App component
 │    │    ├── index.js               # Entry point for React app
 │    │    ├── styles.css             # Global CSS
 │    │    └── assets/                # Any media assets (images, logos)
 │    ├── package.json                # React dependencies
 │    └── tailwind.config.js          # Tailwind CSS config (if using)
 ├── backend/                         # Flask app for model inference & BLE
 │    ├── app.py                      # Main Flask API file
 │    ├── models/                     # Folder for model files
 │    │    ├── emotion_model.pkl      # Emotion detection model
 │    │    ├── voice_model.h5         # Voice emotion model
 │    │    └── model_weights.h5       # General model weights
 │    ├── services/                   # BLE and sensor communication logic
 │    │    ├── ble_service.py         # BLE data fetch logic
 │    │    └── health_monitor.py      # Health data processing (e.g., heart rate, BP)
 │    ├── routes/                     # Flask API routes
 │    │    └── api_routes.py          # Routes to process emotion, health, etc.
 │    ├── static/                     # Static assets for Flask (like images)
 │    ├── templates/                  # HTML templates (dashboard, emotions, etc.)
 │    └── requirements.txt            # Python dependencies
 ├── database/                        # SQLite database with encryption (SQLCipher)
 │    └── maitri.db                   # Main encrypted database (health logs, vitals)
 ├── electron/                        # Electron wrapper for offline app
 │    ├── main.js                     # Electron entry point to run Flask app locally
 │    └── preload.js                  # Preload script to connect React and Flask
 ├── README.md                        # Project documentation and setup instructions
 └── .gitignore                       # Ignore unnecessary files (e.g., node_modules, etc.)
