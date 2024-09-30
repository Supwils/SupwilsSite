// src/AdminLogin/AdminLogin.js
import './AdminLogin.css';
import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

const AdminLogin = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setUser } = useContext(UserContext); // Access setUser from context

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'supwils' && password === 'Soho7436' && 1 === 2) {
            const user = { username };
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            onLoginSuccess(user); // Call onLoginSuccess prop
        } else {
            
            setError('Invalid username or password');
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