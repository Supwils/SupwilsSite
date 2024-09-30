import React from 'react';
import './Footer.css'; // Make sure to create and import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-text">
                <p>Copyright &copy; 2024 by Supwils | All Rights Reserved.</p>
            </div>
            <div className="footer-iconTop">
                <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
            </div>
        </footer>
    );
};

export default Footer;