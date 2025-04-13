import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './departments.module.css';
import DepartmentForm from './DepartmentForm';

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [search, setSearch] = useState('');
  const [sortAsc, setSortAsc] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingDept, setEditingDept] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const departmentsPerPage = 5;

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const res = await axios.get('http://localhost:3000/departments', {
        withCredentials: true
      });
      setDepartments(res.data.data || []);
    } catch (err) {
      console.error('Error fetching departments:', err);
    }
  };

  const handleSort = () => setSortAsc(!sortAsc);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const filtered = departments.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) =>
    sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );

  const indexOfLast = currentPage * departmentsPerPage;
  const indexOfFirst = indexOfLast - departmentsPerPage;
  const current = sorted.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filtered.length / departmentsPerPage);

  const openForm = (dept = null) => {
    setEditingDept(dept);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingDept(null);
    fetchDepartments();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Departments</h2>
        <button className={styles.addBtn} onClick={() => openForm()}>
          Add Department
        </button>
      </div>

      <input
        className={styles.search}
        placeholder="Search department..."
        value={search}
        onChange={handleSearchChange}
      />

      <table className={styles.table}>
        <thead>
          <tr>
            <th onClick={handleSort} className={styles.sortable}>
              Name {sortAsc ? '▲' : '▼'}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {current.map((dept) => (
            <tr key={dept.id}>
              <td>{dept.name}</td>
              <td>
                <button onClick={() => openForm(dept)}>Edit</button>
              </td>
            </tr>
          ))}
          {current.length === 0 && (
            <tr>
              <td colSpan={2}>No departments found.</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className={styles.pagination}>
        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num}
            className={currentPage === num + 1 ? styles.active : ''}
            onClick={() => setCurrentPage(num + 1)}
          >
            {num + 1}
          </button>
        ))}
      </div>

      {showForm && (
        <DepartmentForm onClose={closeForm} existing={editingDept} />
      )}
    </div>
  );
};

export default Departments;
