import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoutes';
import Login from './components/login/Login';
import Employees from './components/employees/Employees';
import Departments from './components/departments/Departments';
import Dashboard from './components/dashboard/Dashboard';
import Register from './components/register/Register';
import Navbar from './nav/Navbar';

function App() {
  return (
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Dashboard />
                </>
              }
            />
            <Route
              path="/employees"
              element={
                <>
                  <Navbar />
                  <Employees />
                </>
              }
            />
            <Route
              path="/departments"
              element={
                <>
                  <Navbar />
                  <Departments />
                </>
              }
            />
            <Route
              path="/register"
              element={
                <>
                  <Navbar />
                  <Register />
                </>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
  );
}

export default App;
