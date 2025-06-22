# Student List Management System

This project is a **MERN (MongoDB, Express, React, Node.js)** stack application designed to manage a list of students. It includes a **frontend** built with React and TypeScript and a **backend** built with Express and TypeScript. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on student data.

---

## Project Structure

### Frontend

The frontend is built using **React**, **TypeScript**, and **Vite**. It provides a user interface for managing students, including adding new students and displaying the list of students in a table.

#### Key Features:
- **Add Student**: A form to add new students.
- **Student Table**: Displays the list of students in a tabular format.
- **API Integration**: Fetches and sends data to the backend using RESTful APIs.

#### Folder Structure:
```
frontend/
├── public/               # Static assets
├── src/                  # Source code
│   ├── api/              # API calls
│   ├── components/       # React components
│   ├── utils/            # Utility files
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Entry point
│   ├── index.css         # Global styles
│   └── vite-env.d.ts     # Vite environment types
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── tsconfig.app.json     # TypeScript configuration for the app
├── tsconfig.node.json    # TypeScript configuration for Vite
├── vite.config.ts        # Vite configuration
└── .gitignore            # Git ignore rules
```

#### Frontend Setup:
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build the project for production:
   ```bash
   npm run build
   ```

---

### Backend

The backend is built using **Express** and **TypeScript**. It provides RESTful APIs to manage student data stored in a **MongoDB** database.

#### Key Features:
- **GET /students**: Fetch all students.
- **POST /students**: Add a new student.
- **PUT /students/:id**: Update a student by ID.
- **DELETE /students/:id**: Delete a student by ID.

#### Folder Structure:
```
backend/
├── src/                  # Source code
│   ├── models/           # Mongoose models
│   ├── routers/          # Express routers
│   └── index.ts          # Entry point
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── nodemon.json          # Nodemon configuration
└── dist/                 # Compiled JavaScript files (generated after build)
```

#### Backend Setup:
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build the project for production:
   ```bash
   npm run build
   ```
5. Start the production server:
   ```bash
   npm start
   ```

---

## Environment Setup

### Prerequisites:
- **Node.js**: Install the latest version of Node.js from [Node.js Official Website](https://nodejs.org/).
- **MongoDB**: Install MongoDB and ensure it is running locally on `mongodb://localhost:27017/students`.

### Environment Variables:
The backend connects to MongoDB using the following connection string:
```bash
mongodb://localhost:27017/students
```
You can modify this in the `backend/src/index.ts` file if needed.

---

## How to Run the Project

1. **Start MongoDB**:
   Ensure MongoDB is running locally or update the connection string in the backend.

2. **Start the Backend**:
   ```bash
   cd backend
   npm run dev
   ```

3. **Start the Frontend**:
   ```bash
   cd frontend
   npm run dev
   ```

4. Open the application in your browser at:
   ```
   http://localhost:5173
   ```

---

## Technologies Used

### Frontend:
- **React**: For building the user interface.
- **TypeScript**: For type-safe development.
- **Vite**: For fast development and build tooling.
- **Material-UI**: For UI components.

### Backend:
- **Express**: For building RESTful APIs.
- **TypeScript**: For type-safe development.
- **Mongoose**: For interacting with MongoDB.

---


## License
This project is licensed under the MIT License.