# Deals Dry Admin Panel

This project is a full-stack web application built with **Next.js** (for the frontend) and **Node.js** (for the backend). The application is designed for managing employees, including creating, updating, and deleting employee records. It uses **MongoDB** for the database and **Tailwind CSS** for styling.

## Table of Contents
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Tech Stack

### Frontend:
- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: TypeScript (`.tsx`)

### Backend:
- **Framework**: [Node.js](https://nodejs.org/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Authentication**: JWT (JSON Web Token)
- **Language**: JavaScript

## Project Structure

```bash
root/
├── frontend/                 # Frontend code (Next.js)
│   ├── src/
│   │   ├── app/              # Next.js app pages and layouts
│   │   ├── components/       # Reusable components
│   │   ├── styles/           # Global styles (Tailwind CSS)
│   │   └── public/           # Static assets
│   ├── package.json          # Frontend dependencies
│   └── next.config.js        # Next.js configuration
│
├── backend/                  # Backend code (Node.js)
│   ├── models/               # Mongoose models
│   ├── routes/               # Express routes
│   ├── controllers/          # Request handlers
│   ├── config/               # MongoDB connection
│   ├── middleware/           # Authentication middleware (JWT)
│   ├── server.js             # Express server entry point
│   └── package.json          # Backend dependencies
│
├── .env                      # Environment variables
└── README.md                 # Documentation
```

## Installation

### Prerequisites:
- Node.js installed on your machine (>= 14.x)
- MongoDB installed locally or a MongoDB cloud instance (e.g., MongoDB Atlas)

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/deals-dry-admin.git
cd deals-dry-admin
```

### Step 2: Install Dependencies

**Backend:**
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```

**Frontend:**
1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Step 1: Running the Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Run the backend server:
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:5000`.

### Step 3: Running the Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```
2. Run the frontend development server:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:3000`.

### Step 4: Access the Application
- Visit `http://localhost:3000` to view the frontend.
- The backend API can be accessed at `http://localhost:5000`.

## API Endpoints

### Authentication
- **POST** `/api/auth/login`: Log in with username and password. Returns a JWT token.

### Employee Management
- **GET** `/api/employees`: Get a list of all employees (requires JWT).
- **POST** `/api/employees`: Create a new employee (requires JWT).
- **PUT** `/api/employees/:id`: Update an employee (requires JWT).
- **DELETE** `/api/employees/:id`: Delete an employee (requires JWT).

## Environment Variables

You need the following environment variables for the application to work:

### Backend (`backend/.env`)
- `MONGO_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret for signing JWT tokens.
- `PORT`: Port for the backend server.

### Frontend (`frontend/.env.local`)
- `NEXT_PUBLIC_API_URL`: URL for the backend API.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This README should be updated as necessary as your project evolves. It provides setup instructions for developers looking to contribute, as well as running the project locally for testing.

Let me know if you need further adjustments!
