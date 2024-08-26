import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import pdfResume from "../image/Resume(Sara).pdf";
import '../styles/styles.css';
import '../styles/Aboutme.css';

const styleicon = { margin: '0rem 1rem'}


const Aboutme = () => {
    return (
        <section className="about-me">
            <h1>About Me</h1>
            <p>Hello! I'm a passionate Front-End Developer and UI/UX designer and I am using React.js framework. I enjoy creating user-friendly and visually appealing websites and applications. In my free time, I love exploring new technologies, reading about design trends, and contributing to open-source projects.</p>
            <p>Feel free to browse through my portfolio and check out my work. I'm always open to new opportunities and collaborations!</p>
            <a href={ pdfResume } className="resume-button" target="_blank" rel="noopener noreferrer">Resume</a>
                    <div className="about__links">
                        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="USERNAME_HERE" data-version="v1"><a href="https://www.linkedin.com/in/sara-ettehad/"><FaLinkedin  size="30px"/></a></div>
                        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="USERNAME_HERE" data-version="v1"><a href="mailto:parisa98ettehad@gmail.com?body=My custom mail body"><SiGmail style={styleicon}  size="30px"/></a></div>
                        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="USERNAME_HERE" data-version="v1"><a href="https://github.com/sara-ettehad"><FaGithub  size="30px"/></a></div>
                    </div>
        </section>
    );
};

export default Aboutme;