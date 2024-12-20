import './AdminLogin.css';
import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

const AdminLogin = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setUser } = useContext(UserContext); // Access setUser from context
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request using the fetch API to the backend login endpoint
            const response = await fetch(`${BACKEND_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            // If the response is not ok, throw an error
            if (!response.ok) {
                throw new Error('Invalid credentials');
            }

            const data = await response.json();

            // Assuming the response contains a JWT token
            const { token } = data;

            // Store the user and token in localStorage
            const user = { username, token };
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));

            // Notify the parent component of successful login
            onLoginSuccess(user);
        } catch (err) {
            // Handle the error
            setError(err.message);
            setTimeout(() => {
                setError('');
            }, 3000);
        }
    };

    return (
        <div>
            <form className='admin-login' onSubmit={handleLogin}>
                <div>
                    <label>Admin</label>
                    <input className='login-input'
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input className='login-input'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button className='login-button' type="submit">Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;