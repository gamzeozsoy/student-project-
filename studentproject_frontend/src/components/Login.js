import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import logo from './gib1.png';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate(); //başarılı login işleminden sonra yeni bir sayfaya yönlendirmek için

    useEffect(() => {
        //sayfa yüklendiğinde form alanlarını temizlemek için
        setEmail('');
        setPassword('');
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/studentproject/students/login', {
                email,
                password
            });
            console.log('Login response:', response.data);
            setSuccessMessage('Login successful');
            setErrorMessage(''); // Önceki hata mesajlarını temizle

            // Başarılı girişten sonra formu temizle
            setEmail('');
            setPassword('');

            // Kullanıcıyı dashboard sayfasına yönlendir
            navigate('/dashboard');
        } catch (error) {
            console.error('Failed to login:', error);
            setErrorMessage('Invalid email or password');
            setSuccessMessage(''); // Önceki başarılı giriş mesajını temizle
        }
    };

    return (
        <div className="login-container">
            <div className="header">
                <img src={logo} alt="Logo" className="logo" />
                
            </div>
            <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
};

export default Login;
