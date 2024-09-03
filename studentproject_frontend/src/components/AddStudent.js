import React, { useState } from 'react';
import axios from 'axios';
import './AddStudent.css';

const AddStudent = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const [job, setJob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleAddStudent = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/students/add', {
                name,
                surname,
                age,
                job,
                email,
                password
            });
            console.log('Student added:', response.data);
        } catch (error) {
            console.error('Failed to add student:', error);
        }
    };

    return (
        <div className="add-student-container">
            <h2>Add Student</h2>
            <form onSubmit={handleAddStudent} className="add-student-form">
                <div className="form-wrapper">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label>Surname:</label>
                    <input
                        type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        required
                    />
                    <label>Age:</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                    <label>Job:</label>
                    <input
                        type="text"
                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                        required
                    />
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="submit-button">Add Student</button>
                </div>
            </form>
        </div>
    );
};

export default AddStudent;
