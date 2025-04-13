# Employee Management System

An Employee Management System built with **Node.js**, **Express**, **React** (with **Vite**), **SQL** (using Sequelize), and various other libraries to handle employee data efficiently.

This system allows users to manage employee records, assign them to departments, view their details, and perform CRUD operations. It also includes authentication features like login and registration.

## Features

- **User Authentication**
  - Register a new user
  - Login with JWT tokens
  - User profile retrieval
  - Logout functionality

- **Employee Management**
  - View all employees
  - Add a new employee
  - Update employee details
  - Delete an employee
  - Get employee by ID

- **Department Management**
  - View all departments
  - Create, update, and delete departments

- **Statistics**
  - Count total number of employees
  - Retrieve latest hired employees

- **Swagger API Documentation**
  - Interactive API documentation powered by Swagger UI

## Technologies Used

- **Backend**: 
  - Node.js
  - Express.js
  - Sequelize (for SQL database ORM)
  - JWT for user authentication
  - Swagger for API documentation

- **Frontend**:
  - React (with Vite)
  - Axios (for making API requests)

- **Database**:
  - SQL Database
  - Sequelize ORM

- **Other Libraries**:
  - `bcryptjs` for password hashing
  - `jsonwebtoken` for JWT-based authentication
  - `swagger-jsdoc` & `swagger-ui-express` for API documentation
  - `dotenv` for environment variables

## Installation

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/MohamedS16/employees-management-system
    cd employees-management-system
    ```

2. Navigate to the backend folder and install dependencies:
    ```bash
    cd server
    npm install
    ```

3. Configure your environment variables:
    - Create a `.env` file in the `server` folder.
    - Add the following:
      ```bash
      PORT=3000
      JWT_SECRET=yoursecret
      NODE_ENV=development

      ```

4. Run the migrations to set up the database schema:
    ```bash
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all
    ```

5. Start the backend server:
    ```bash
    nodemon app.js
    ```

### Frontend Setup

1. Navigate to the frontend folder:
    ```bash
    cd client
    ```

2. Install the frontend dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm run dev
    ```

4. Open the frontend in your browser:
    - Navigate to `http://localhost:3000` to access the frontend.

## API Documentation

The API is fully documented using Swagger. You can access the interactive documentation at:

