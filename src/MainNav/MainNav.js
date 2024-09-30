// src/MainNav/MainNav.js
import React, { useContext, useState } from 'react';
import { UserContext } from '../AdminLogin/UserContext'; // Import UserContext
import './MainNav.css';
import Translate from './Translate';
import AdminLogin from '../AdminLogin/AdminLogin';

function MainNav() {
    const { user, setUser } = useContext(UserContext); // Use user and setUser from context
    const [showLogin, setShowLogin] = useState(false); // State to manage visibility of AdminLogin

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user'); // Remove user from localStorage
    };

    const handleLoginSuccess = (user) => {
        setUser(user);
        setShowLogin(false); // Hide AdminLogin on successful login
    };

    return (
        <div className="header">
            <a href="/" className="logo">Supwils.</a>
            <div className='bx bx-menu' id="menu-icon"></div>
            <nav className="navbar">
                <a href="/#home" className="active">Home</a>
                <a href="/#about">About</a>
                <a href="/#exprience">Experience</a>
                {/* <a href="/#projects">Projects</a> */}
                <a href='/blogs'>Blogs</a>
                <a href="/#contact">Contact</a>
                {user && user.username === 'supwils' && (
                    <>
                        <a href="/admin-blog">Manage Blog</a>
                        <button className='btnLogin' onClick={handleLogout}>Logout</button>
                    </>
                )}
                {!user && (
                    <>
                        <button className='btnLogin' onClick={() => setShowLogin(!showLogin)}>AdmLogin</button>
                        {showLogin && <AdminLogin onLoginSuccess={handleLoginSuccess} />}
                    </>
                )}
                <div className='translate'>
                    <Translate />
                </div>
            </nav>
        </div>
    );
}

export default MainNav;