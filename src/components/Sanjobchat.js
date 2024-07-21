import React from 'react';
import '../styles/styles.css';
import '../styles/UiuxProjectDetails.css';
import Lowsan from '../image/lowsan.PNG';
import Highsan1 from '../image/sanui.PNG';
import Highsan2 from '../image/highSan.PNG';
import sanpro from '../image/porsan.PNG';




const SanjobChat = () => {

    return (
        <section className="UiuxProjectDetails">
            <h1>Description:</h1>
            <p>I prioritized the Sanjob Chat page. I started by designing the Chat page because of its importance. After a while, I designed SIgnUp and SignIn page for starting chat as a member of the Sanjob chat page.</p>
            <h1>Low Fidelity:</h1>
            <img src={Lowsan} alt="Low Fidelity" />
            <h1>High Fidelity (Mockup):</h1>
            <img src={Highsan1} alt="Highsan" />
            <img src={Highsan2} alt="Highsan" />
            <h1>Prototype:</h1>
            <img src={sanpro} alt="sanpro" />
        </section>
    );
};

export default SanjobChat;