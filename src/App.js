import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import BlogMain from "./BlogPage/BlogMain";
import MainNav from "./MainNav/MainNav";
import Hobbies from "./ExpriencePage/Hobbies/Hobbies";
import WebDev from "./ExpriencePage/WebDev/WebDev";
import DataScience from "./ExpriencePage/DataScience/DataScience";
import SoftwareDev from "./ExpriencePage/SoftwareDev/SoftwareDev";
import Footer from "./Footer/Footer";
import GoogleAuth from "./AdminLogin/GoogleAuth";
import BlogAdmin from "./BlogAdmin/blogAdmin";
import BlogView from "./BlogPage/BlogView/BlogView";
import AdminLogin from "./AdminLogin/AdminLogin";
import { UserProvider } from "./AdminLogin/UserContext";
import ProtectedRoute from "./AdminLogin/ProtectedRoute";
import Unauthorized from "./AdminLogin/Unauthorized";
import CreateBlog from "./BlogAdmin/CreateBlog/CreateBlog";
import UploadImage from "./BlogAdmin/EditBlog/uploadImage";
import Email from "./Footer/email";
import "./App.css";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <UserProvider>
      <div className="App">
        <Router>
          <MainNav />
          <div className="main-content">
            {" "}
            {/* Added this div for main content */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blogs" element={<BlogMain />} />
              <Route path="/blogs/:id" element={<BlogView />} />
              <Route path="/hobbies" element={<Hobbies />} />
              <Route path="/web-development" element={<WebDev />} />
              <Route path="/data-science" element={<DataScience />} />
              <Route path="/software-development" element={<SoftwareDev />} />
              <Route
                path="/admin-blog"
                element={<ProtectedRoute element={<BlogAdmin />} />}
              />
              <Route
                path="/create-blog"
                element={<ProtectedRoute element={<CreateBlog />} />}
              />
              <Route
                path="/upload-image"
                element={<ProtectedRoute element={<UploadImage />} />}
              />
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="/email" element={<Email />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
