import React from 'react';
import '../styles/styles.css';
import Twarproto from '../image/flow.PNG';
import '../styles/UiuxProjectDetails.css';


const Twars = () => {
    return (
        <section className="UiuxProjectDetails">
            <h1>Description:</h1>
            <p>A UI Design for T-WAR$ website with ready UX Design detail from clien in Upwork</p>
            <h1>Prototype:</h1>
            <img src={Twarproto} alt="Twarproto" />
        </section>
    );
};

export default Twars;