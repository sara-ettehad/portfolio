import React from 'react';
import { Link } from 'react-router-dom';
import pdfResume from "../image/Resume(Sara).pdf";

const Header = () => {
    return (
        <header className="header">
            <h1><Link to="/">Sara Ettehad</Link></h1>
            <nav>
                <ul>
                    <li><Link to="/about">About Me</Link></li>
                    <li><a href="/#projects1">Coding Projects</a></li>
                    <li><a href="/#projects2">UI/UX Projects</a></li>                    
                    <li><a href= { pdfResume } target="_blank" rel="noopener noreferrer">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;