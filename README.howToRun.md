# Tasteful - AI-Powered Recipe Generator

A web application that helps users discover and generate recipes using AI technology.

## Prerequisites

Before running the application, make sure you have:
- Node.js (v18 or higher)
- PostgreSQL
- Google Cloud Platform account (for Google OAuth)
- Gemini API key

## Server Setup

1. Navigate to the server directory:

```
cd server
```

2. Install dependencies:
```
npm install
```


3. Create a `.env` file in the server directory with the following variables:
```
JWT_SECRET = your_jwt_secret
GEMINI_KEY = your_gemini_api_key
GOOGLE_CLIENT_ID = your_google_client_id
GOOGLE_CLIENT_SECRET = your_google_client_secret
AUDIENCE = your_audience_url
DATABASE_URL = your_database_url
```


4. Set up the database:

```
bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```


5. Run the server:
- For development:

```
bash
npm run dev
```

- For production:
```
bash
npm start
```


## Client Setup

1. Navigate to the client directory:
```
bash
cd client/client_side
```


2. Install dependencies:
```
bash
npm install
```

3. Create a `.env` file in the client directory with necessary environment variables.

4. Run the client:
- For development:

```
bash
npm run dev
```

- For production:
```
bash
npm run build
npm run preview
```


## Testing

To run tests on the server:
```
bash
cd server
npm test
```


## Features

- AI-powered recipe generation
- User authentication (Google OAuth)
- Recipe management
- Responsive design
- Interactive UI with animations

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- SweetAlert2

### Backend
- Express.js
- PostgreSQL
- Sequelize
- JWT Authentication
- Google Cloud APIs
- Gemini AI API

## Deployment

The client can be deployed using Firebase Hosting, and the server can be deployed to any platform that supports Node.js applications.

