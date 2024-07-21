import React from 'react';
import '../styles/styles.css';
import '../styles/UiuxProjectDetails.css';
import Freshsketch from'../image/freshsketch.jpg'
import Freshhigh1 from '../image/freshDesk.png';
import Freshhigh2 from '../image/freshdesk2.png';
import Freshhigh3 from '../image/freshmob.png';


const Freshfind = () => {

    return (
        <section className="UiuxProjectDetails">
            <h1>Description:</h1>
            <p>I focused on redesigning the FreshFind e-commerce website based on my company needs and user testing. Usually I am finding several successfully relative designs as a refrences and then redesining 3 to 6 version of each pages and collaborate my team to desiged witch version is better and we can choose it as a final design. beginning with the redesign of its crucial Home page for both Desktop and Mobile platforms. Subsequently, I tackled the Sign-Up page design for both Desktop and Mobile interfaces. Following this, I undertook the redesign of the Fulfillment breadcrumb steps pages specifically for Desktop users. Presently, I am engaged in redesigning the About and Support pages for Desktop while concurrently developing their Mobile counterparts.</p>
            <h1>Sketch:</h1>
            <img src={Freshsketch} alt="Freshsketch" />
            <h1>High Fidelity (Mockup):</h1>
            <img src={Freshhigh1} alt="" />
            <img src={Freshhigh2} alt="" />
            <img src={Freshhigh3} alt="" />
        </section>
    );
};

export default Freshfind;