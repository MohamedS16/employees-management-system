import React, { useState } from 'react';
import axios from 'axios';
import styles from './createDepartment.module.css';

const CreateDepartment = () => {
  const [departmentName, setDepartmentName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(
        'http://localhost:3000/departments',
        { name: departmentName },
        { withCredentials: true }
      );
      setMessage(response.data.message || 'Department created successfully!');
      setDepartmentName('');
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to create department.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create New Department</h2>
      <form className={styles.form} onSubmit={handleSubmit}>

      {message && <p className={styles.success}>{message}</p>}
      {error && <p className={styles.error}>{error}</p>}

        <div className={styles.inputGroup}>
          <label>Department Name</label>
          <input
            type="text"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
            required
          />
        </div>



        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default CreateDepartment;
