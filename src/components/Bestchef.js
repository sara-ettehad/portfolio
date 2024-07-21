import React from 'react';
import '../styles/styles.css';
import '../styles/UiuxProjectDetails.css';
import Bestchefsketch from'../image/sketchChef.png';
import Bestcheflow from'../image/lowchef.PNG';
import chefhigh1 from '../image/chatui.PNG';
import chefhigh2 from '../image/highchef.PNG';
import chefhigh3 from '../image/highmobchef.PNG';
import chegprototype from '../image/portochef.PNG';



const Bestchef = () => {

    return (
        <section className="UiuxProjectDetails">
            <h1>Description:</h1>
            <p>I prioritized the Best Chef website. I started by designing the Homepage because of its importance and designed the existing pages. After a while, I designed three landings, each dedicated to a branch, which had a significant impact on the income and registration of the company. after that, I designed Search page for search all the recipes that user needs and then add recipes page for see the recipes. I added comment Pop-Up page for see comments and add a new comments for the recipes.</p>
            <h1>Sketch:</h1>
            <img src={Bestchefsketch} alt="Bestchefsketch" />
            <h1>Low Fidelity:</h1>
            <img src={Bestcheflow} alt="Bestcheflow" />
            <h1>High Fidelity (Mockup):</h1>
            <img src={chefhigh1} alt="chefhigh" />
            <img src={chefhigh2} alt="chefhigh" />
            <img src={chefhigh3} alt="chefhigh" />
            <h1>Prototype:</h1>
            <img src={chegprototype} alt="chegprototype" />
        </section>
    );
};

export default Bestchef;