// src/UserContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create User Context
export const UserContext = createContext();

// UserContext Provider to wrap around components that need access to the user state
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};