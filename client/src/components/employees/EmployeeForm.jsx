import React, { useState } from 'react';
import axios from 'axios';
import styles from './EmployeeForm.module.css';

const EmployeeForm = ({ onClose, existing, departments }) => {
  const [firstName, setFirstName] = useState(existing?.firstName || '');
  const [lastName, setLastName] = useState(existing?.lastName || '');
  const [email, setEmail] = useState(existing?.email || '');
  const [hireDate, setHireDate] = useState(existing?.hireDate?.split('T')[0] || '');
  const [salary, setSalary] = useState(existing?.salary || '');
  const [departmentId, setDepartmentId] = useState(existing?.departmentId || '');

  const isEdit = !!existing;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      firstName,
      lastName,
      email,
      hireDate,
      salary: Number(salary),
      departmentId: Number(departmentId),
    };

    try {
      const url = isEdit
        ? `http://localhost:3000/employees/${existing.id}`
        : `http://localhost:3000/employees`;

      const method = isEdit ? 'put' : 'post';

      await axios[method](url, payload, {
        withCredentials: true,
      });

      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.modal}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3>{isEdit ? 'Edit' : 'Add'} Employee</h3>

        <input value={firstName} required onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
        <input value={lastName} required onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
        <input value={email} required type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input value={hireDate} required type="date" onChange={(e) => setHireDate(e.target.value)} />
        <input value={salary} required type="number" onChange={(e) => setSalary(e.target.value)} placeholder="Salary" />
        <select value={departmentId} required onChange={(e) => setDepartmentId(e.target.value)}>
          <option value="">Select Department</option>
          {departments.map((d) => (
            <option key={d.id} value={d.id}>{d.name}</option>
          ))}
        </select>

        <div className={styles.actions}>
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
