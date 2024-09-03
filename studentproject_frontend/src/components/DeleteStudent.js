import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './DeleteStudent.css';

const DeleteStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        axios.delete(`http://localhost:8080/studentproject/students/delete/${id}`)
            .then(response => {
                alert('Student deleted successfully');
                navigate('/dashboard');
            })
            .catch(error => {
                console.error('Error deleting student:', error);
            });
    };

    const handleCancel = () => {
        navigate('/dashboard');
    };

    return (
        <div className="delete-student-container">
            <h2>Delete Student</h2>
            <div className="form-wrapper">
                <form className="delete-student-form">
                    <p>Are you sure you want to delete this student?</p>
                    <div className="button-container">
                        <button type="button" className="delete-button" onClick={handleDelete}>Delete</button>
                        <button type="button" className="delete-cancel-button" onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DeleteStudent;
