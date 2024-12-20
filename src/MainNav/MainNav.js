import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../AdminLogin/UserContext'; // Import UserContext
import './MainNav.css';
import Translate from './Translate';
import AdminLogin from '../AdminLogin/AdminLogin';

function MainNav() {
    const { user, setUser } = useContext(UserContext); // Use user and setUser from context
    const [showLogin, setShowLogin] = useState(false); // State to manage visibility of AdminLogin

    // Function to handle logout
    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user'); // Remove user from localStorage
    };

    // Function to handle successful login
    const handleLoginSuccess = (user) => {
        setUser(user);
        setShowLogin(false); // Hide AdminLogin on successful login
    };

    // Function to check if a user is logged in on page refresh
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Set user from localStorage if they are logged in
        }
    }, [setUser]);

    return (
        <div className="header">
            <a href="/" className="logo">Supwils.</a>
            <div className='bx bx-menu' id="menu-icon"></div>
            <nav className="navbar">
                <a href="/#home" className="active">Home</a>
                <a href="/#about">About</a>
                <a href="/#exprience">Experience</a>
                <a href='/blogs'>Blogs</a>
                <a href="/#contact">Contact</a>

                {/* Show Manage Blog and Logout buttons only if user is logged in */}
                {user && user.username && user.token && (
                    <>
                        <a href="/admin-blog">Manage Blog</a>
                        <button className='btnLogin' onClick={handleLogout}>Logout</button>
                    </>
                )}

                {/* Show Admin Login button if no user is logged in */}
                {!user && (
                    <>
                        <button className='btnLogin' onClick={() => setShowLogin(!showLogin)}>Admin Login</button>
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