import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import BlogMain from './BlogPage/BlogMain';
import MainNav from './MainNav/MainNav';
import AthleticTraining from './ExpriencePage/AthleticTraining';
import WebDev from './ExpriencePage/WebDev/WebDev';
import DataScience from './ExpriencePage/DataScience/DataScience';
import SoftwareDev from './ExpriencePage/SoftwareDev/SoftwareDev';
import Footer from './Footer/Footer';
import GoogleAuth from './AdminLogin/GoogleAuth';
import BlogAdmin from './BlogAdmin/blogAdmin';
import AdminLogin from './AdminLogin/AdminLogin';
import { UserProvider } from './AdminLogin/UserContext';
import ProtectedRoute from './AdminLogin/ProtectedRoute';
import Unauthorized from './AdminLogin/Unauthorized';
import './App.css';

function App() {
    return (
        <UserProvider>
        <div className="App">
            <Router>
                <MainNav/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/blogs" element={<BlogMain />} />
                    <Route path="/athletic-training" element={<AthleticTraining />} />
                    <Route path="/web-development" element={<WebDev />} />
                    <Route path="/data-science" element={<DataScience />} />
                    <Route path="/software-development" element={<SoftwareDev />} />
                    <Route path="/admin-blog" element={<ProtectedRoute element={<BlogAdmin />} />} />
                    <Route path="/unauthorized" element={<Unauthorized />} />
                    </Routes>
                <Footer />
            </Router>
        </div>
        </UserProvider>
    );
}

export default App;