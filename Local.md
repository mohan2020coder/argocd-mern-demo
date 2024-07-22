# Project Setup and Configuration

# Local Setup

## Overview

This project includes a frontend React application, a backend Node.js service, and a MongoDB database. 
This guide will walk you through setting up and running the application using Docker and Docker Compose.

## Configuration

### MongoDB URI

In the `server.js` file, the MongoDB connection URI is set up as follows:

```javascript
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/todo';

```

API Endpoint
In the App.js file of your React frontend, the API endpoint for fetching todos is configured as follows:


```javascript

const API_URL = 'http://127.0.0.1:5000/todos';

```




### compose up and access the app in browser

docker compose up