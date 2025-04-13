import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Employees.module.css';
import EmployeeForm from './EmployeeForm';
import DeleteModal from './DeleteModal';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState('firstName');
  const [sortAsc, setSortAsc] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [editingEmp, setEditingEmp] = useState(null);
  const [deleteEmp, setDeleteEmp] = useState(null);

  const perPage = 5;

  const getSortIcon = (field, current, asc) => {
    if (field !== current) return '⇅';
    return asc ? '↑' : '↓';
  };    

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    try {
      const [empRes, deptRes] = await Promise.all([
        axios.get('http://localhost:3000/employees', { withCredentials: true }),
        axios.get('http://localhost:3000/departments', { withCredentials: true }),
      ]);
      setEmployees(empRes.data.data || []);
      setDepartments(deptRes.data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const getDeptName = (id) => {
    return departments.find((d) => d.id === id)?.name || 'Unknown';
  };

  const filtered = employees.filter((e) => {
    const fullName = `${e.firstName} ${e.lastName}`.toLowerCase();
    return fullName.includes(search.toLowerCase());
  });

  const sorted = [...filtered].sort((a, b) => {
    let aVal = a[sortField];
    let bVal = b[sortField];
  
    if (sortField === 'hireDate') {
      aVal = new Date(aVal);
      bVal = new Date(bVal);
    } else if (sortField === 'firstName') {
      aVal = `${a.firstName} ${a.lastName}`.toLowerCase();
      bVal = `${b.firstName} ${b.lastName}`.toLowerCase();
    } else if (sortField === 'departmentId') {
      aVal = getDeptName(aVal).toLowerCase();
      bVal = getDeptName(bVal).toLowerCase();
    } else if (typeof aVal === 'string') {
      aVal = aVal.toLowerCase();
      bVal = bVal.toLowerCase();
    }
  
    return sortAsc ? (aVal > bVal ? 1 : -1) : (aVal < bVal ? 1 : -1);
  });
  

  const paginated = sorted.slice((currentPage - 1) * perPage, currentPage * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  const openForm = (emp = null) => {
    setEditingEmp(emp);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingEmp(null);
    fetchAll();
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/employees/${deleteEmp.id}`, {
        withCredentials: true,
      });
      setDeleteEmp(null);
      fetchAll();
    } catch (err) {
      console.error(err);
    }
  };

  const toggleSort = (field) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Employees</h2>
        <button className={styles.addBtn} onClick={() => openForm()}>Add Employee</button>
      </div>

      <input
        className={styles.search}
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className={styles.table}>
      <thead>
  <tr>
    <th onClick={() => toggleSort('firstName')}>
      Name {getSortIcon('firstName', sortField, sortAsc)}
    </th>
    <th onClick={() => toggleSort('email')}>
      Email {getSortIcon('email', sortField, sortAsc)}
    </th>
    <th onClick={() => toggleSort('hireDate')}>
      Hire Date {getSortIcon('hireDate', sortField, sortAsc)}
    </th>
    <th onClick={() => toggleSort('salary')}>
      Salary {getSortIcon('salary', sortField, sortAsc)}
    </th>
    <th onClick={() => toggleSort('departmentId')}>
      Department {getSortIcon('departmentId', sortField, sortAsc)}
    </th>
    <th>Actions</th>
  </tr>
</thead>
        <tbody>
          {paginated.map((e) => (
            <tr key={e.id}>
              <td>{e.firstName} {e.lastName}</td>
              <td>{e.email}</td>
              <td>{new Date(e.hireDate).toLocaleDateString()}</td>
              <td>${e.salary}</td>
              <td>{getDeptName(e.departmentId)}</td>
              <td>
                <button onClick={() => openForm(e)}>Edit</button>
                <button onClick={() => setDeleteEmp(e)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        {[...Array(totalPages).keys()].map((n) => (
          <button
            key={n}
            className={currentPage === n + 1 ? styles.active : ''}
            onClick={() => setCurrentPage(n + 1)}
          >
            {n + 1}
          </button>
        ))}
      </div>

      {showForm && (
        <EmployeeForm
          onClose={closeForm}
          existing={editingEmp}
          departments={departments}
        />
      )}
      {deleteEmp && (
        <DeleteModal
          message={`Delete ${deleteEmp.firstName} ${deleteEmp.lastName}?`}
          onConfirm={handleDelete}
          onCancel={() => setDeleteEmp(null)}
        />
      )}
    </div>
  );
};

export default Employees;
