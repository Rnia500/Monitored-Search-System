Monitored Search System
Overview
Monitored Search System is a web and mobile application that interacts with Bluetooth-enabled devices to fetch real-time data, stores it in a database, and provides an interactive map with real-time monitoring and search functionality

Features
Bluetooth Integration: Connect and fetch data from Bluetooth devices.

Real-time Data: Track real-time device locations and routes on an interactive map.

User Authentication: User registration and login functionality.

Search Monitoring: Real-time search data monitoring.

Dashboard: A dashboard displaying user statistics and search monitoring data.

API: RESTful API for interacting with data and devices.

Folder Structure
Backend
Contains everything related to the backend logic of the system
backend/
├── database/
│   ├── models/        # Defines data structures (tables) for the database
│   ├── routes/        # API endpoint logic
│   └── db.js          # Database connection logic
├── node_modules/      # Installed packages (npm managed)
├── public/            # Static files like CSS, images, client-side JS
├── swagger/           # OpenAPI documentation (swagger.json or swagger.yaml)
├── views/             # Template files (e.g., .ejs, .pug) for rendering HTML
├── bluetooth.js       # Bluetooth functionality
├── errorHandling.js   # Centralized error handling logic
├── index.js           # Main entry point of the backend server
├── mapping.js         # Logic related to maps (e.g., GPS, routes)
├── package.json       # Project metadata and dependencies
├── package-lock.json  # Locks installed package versions
└── .env               # Environment variables (e.g., DB credentials)