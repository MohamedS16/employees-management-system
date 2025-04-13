import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [employeeCount, setEmployeeCount] = useState(0);
  const [recentHires, setRecentHires] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCount = axios.get('http://localhost:3000/employees/count', {
      withCredentials: true
    });

    const fetchRecentHires = axios.get('http://localhost:3000/employees/newHires', {
      withCredentials: true
    });

    Promise.all([fetchCount, fetchRecentHires])
      .then(([countRes, hiresRes]) => {
        setEmployeeCount(countRes.data.data || 0);
        setRecentHires(hiresRes.data.data || []);
      })
      .catch((err) => {
        console.error('Dashboard fetch error:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Admin Dashboard</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Total Employees</h3>
            <p className={styles.count}>{employeeCount}</p>
          </div>

          <div className={styles.card}>
            <h3>Recent Hires</h3>
            <ul className={styles.list}>
              {recentHires.length === 0 ? (
                <li>No recent hires</li>
              ) : (
                recentHires.map((hire, index) => (
                  <li key={index}>{hire.firstName} {hire.lastName} - {hire?.department?.name}</li>
                ))
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
