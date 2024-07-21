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
            <h1><Link to="/">Sara Ettehad</Link></h1>
            <nav  className={isOpen ? 'nav-open' : ''}>
                <ul>
                    <li><Link to="/about">About Me</Link></li>
                    <li><a href="/#projects1">Coding Projects</a></li>
                    <li><a href="/#projects2">UI/UX Projects</a></li>                    
                    <li><a href= { pdfResume } target="_blank" rel="noopener noreferrer">Resume</a></li>
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
