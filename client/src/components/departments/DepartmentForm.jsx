import React, { useState } from 'react';
import axios from 'axios';
import styles from './departmentForm.module.css';

const DepartmentForm = ({ onClose, existing }) => {
  const [name, setName] = useState(existing?.name || '');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = existing
        ? `http://localhost:3000/departments/${existing.id}`
        : 'http://localhost:3000/departments';

      const method = existing ? 'put' : 'post';

      await axios[method](url, { name }, { withCredentials: true });
      onClose();
    } catch (err) {
      console.error('Error saving department:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.formBox}>
        <h3>{existing ? 'Edit Department' : 'Add New Department'}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Department Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className={styles.actions}>
            <button type="submit" disabled={loading}>
              {loading ? 'Saving...' : 'Save'}
            </button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepartmentForm;
