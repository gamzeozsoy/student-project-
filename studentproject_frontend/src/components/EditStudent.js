import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './EditStudent.css';

const EditStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        age: '',
        job: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/studentproject/students/byId/${id}`)
            .then(response => {
                setFormData(response.data);
            })
            .catch(error => {
                console.error('Error fetching student:', error);
            });
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/studentproject/students/update/${id}`, formData)
            .then(response => {
                alert('Student updated successfully');
                navigate('/dashboard');
            })
            .catch(error => {
                console.error('Error updating student:', error);
            });
    };

    const handleCancel = () => {
        navigate('/dashboard');
    };

    return (
        <div className="edit-student-container">
            <h2>Edit Student</h2>
            <form onSubmit={handleUpdate} className="edit-student-form">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                />
                <label>Surname</label>
                <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    placeholder="Surname"
                    required
                />
                <label>Age</label>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Age"
                    required
                />
                <label>Job</label>
                <input
                    type="text"
                    name="job"
                    value={formData.job}
                    onChange={handleInputChange}
                    placeholder="Job"
                    required
                />
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                />
                <div className="button-container">
                    <button type="submit" className="update-button">Update</button>
                    <button type="button" className="edit-cancel-button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default EditStudent;
