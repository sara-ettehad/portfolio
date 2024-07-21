import React from 'react';
import Profile from '../image/IMG_7733.JPEG'; 
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import pdfResume from "../image/Resume(Sara).pdf";



const styleicon = { margin: '0rem 1rem'}

const Hero = () => {
    return (
        <hero className="hero">
            <div className="hero__grid">

                <div className="hero__grid--first">
                    <h1> 
                        Hi there, <br/> I'm Sara (Parisa) Ettehad
                    </h1>
                    <p>I am Front-end developer</p>
                    <a href={ pdfResume } className="resume-button" target="_blank" rel="noopener noreferrer">Resume</a>
                    <div className="hero__links">
                        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="USERNAME_HERE" data-version="v1"><a href="www.linkedin.com/in/sara-ettehad"><FaLinkedin  size="30px"/></a></div>
                        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="USERNAME_HERE" data-version="v1"><a href="mailto:parisa98ettehad@gmail.com?body=My custom mail body"><SiGmail style={styleicon}  size="30px"/></a></div>
                        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="USERNAME_HERE" data-version="v1"><a href="https://github.com/sara-ettehad"><FaGithub  size="30px"/></a></div>
                    </div>
                </div>
                <div className="hero__grid--second">
                    <img src={Profile} alt="Profile" />
                </div>                
                
                
            </div>
        </hero>
    );
};

export default Hero;