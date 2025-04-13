import React from 'react';
import styles from './DeleteModal.module.css';

const DeleteModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.box}>
        <p>{message}</p>
        <div className={styles.actions}>
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
