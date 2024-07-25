import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pdfResume from "../image/Resume(Sara).pdf";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();



    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <h1>Sara Ettehad</h1>
            <nav  className={isOpen ? 'nav-open' : ''}>
                <ul>
                    <li><Link to="/portfolio">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>              
                    <li><a href= { pdfResume } rel="noopener noreferrer">Resume</a></li>
                </ul>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            </div>
        </header>
    );
};

export default Header;
