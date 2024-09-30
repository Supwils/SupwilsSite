// src/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const ProtectedRoute = ({ element }) => {
    // const { user } = useContext(UserContext);
    const user = localStorage.getItem('user');
    // Check if user is logged in and is an admin
    if (!user)
    {
        
        return <Navigate to="/unauthorized" />; // Redirect to Unauthorized page if not logged in as admin
    }

    return element;
};

export default ProtectedRoute;