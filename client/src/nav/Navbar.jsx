import React, {useContext} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
    await logout(); // calls backend to clear cookie
    navigate('/login');
    };


  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Employee Manager</div>

      <div className={styles.links}>
        <NavLink to="/employees" className={({ isActive }) => isActive ? styles.active : ''}>Employees</NavLink>
        <NavLink to="/departments" className={({ isActive }) => isActive ? styles.active : ''}>Departments</NavLink>
        <NavLink to="/register" className={({ isActive }) => isActive ? styles.active : ''}>Register</NavLink>
        <button onClick={handleLogout} className={styles.logout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
