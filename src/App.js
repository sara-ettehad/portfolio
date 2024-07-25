import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import Aboutme from './components/Aboutme';
import Twars from './components/Twars';
import Freshfind from './components/Freshfind'; 
import Bestchef from './components/Bestchef';
import Sanjobchat from './components/Sanjobchat';
import Rolehead from './image/Rolehead.png';
import DetaileChat from './image/detaileChat.png';
import SanjobChat from './image/Sanjob Chat.png';
import Fashion from './image/ss.png';
import TinDog from './image/Tindog.PNG';
import PJStudio from './image/pjstudio.PNG';
import Academy from './image/Academy.png';
import Axies from './image/Axis.png';
import WeCare from './image/weCare.PNG';
import SanjobFrom from './image/sanfrom.jpg';
import TWAR from './image/Twars.PNG';
import './styles/styles.css';
import './styles/Header.css';
import './styles/Hero.css';
import './styles/Project.css';
import './styles/Footer.css';


const App = () => {
  const uiuxProjects = [
    {
      title: '',
      description: 'A UI Design for T-WAR$ website with ready UX Design detail from clien.',
      using: 'design tools: Figma',
      image: TWAR,
      link: "/twars",
    },
    {
      title: '',
      description: 'FreshFind is an eCommerce responsive website which makes your sales and shop easier.',
      using: 'design tools: Figma',
      image: Rolehead,
      link: "/freshfind",
    },
    {
      title: '',
      description: 'A cook learning website that make your cooking easier.',
      using: 'design tools: Figma',
      image: DetaileChat,
      link: '/bestchef',
    },
    {
      title: '',
      description: 'A chat platform for Sanjob website that help you comunication wit sanjob members.',
      using: 'design tools: Figma',
      image: SanjobChat,
      link: '/sanjobchat',
    },
  ];

  const CodingProjects = [
    
    {
      title: 'Sanjob From (Coming soon)',
      description: 'Responsive page that Codding by HTML, CSS, JavaScript, React.js, and Node.js',
      image: SanjobFrom,
      link: 'https://github.com/sara-ettehad/sanjob-from',
    },
    {
      title: 'Fashion Landing Page (Coming soon)',
      description: 'Responsive page that Codding by HTML, CSS, JavaScript, React.js, and Node.js',
      image: Fashion,
      link: 'https://github.com/sara-ettehad/fashion',
    },
    {
      title: 'TinDog Website',
      description: 'Responsive website that Codding by HTML, CSS, JavaScript, and Bootstrap',
      image: TinDog,
      link: 'https://github.com/sara-ettehad/TinDog',
    },
    {
      title: ' Academy Home Page',
      description: 'desktop-base Home page that Codding by HTML, CSS, and JavaScript',
      image: Academy,
      link: 'https://sara-ettehad.github.io/Academy/',
    },
    
    {
      title: ' Axies Home Page',
      description: 'desktop-base Home page that Codding by HTML, CSS, and JavaScript',
      image: Axies,
      link: 'https://sara-ettehad.github.io/Axies/',
    },
    {
      title: ' PJ-Studio Landing Page',
      description: 'Responsive page that Codding by HTML, CSS, and JavaScript',
      image: PJStudio,
      link: 'https://github.com/sara-ettehad/PJ-Studio-online',
    },
    {
      title: 'WeCare Landing Page',
      description: 'Desktop based page that Codding by HTML, CSS, and JavaScript',
      image: WeCare,
      link: 'https://github.com/sara-ettehad/We.care',
    },
  ];

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/portfolio" element={
            <>
              <Hero />
              <div id="projects1">
                <ProjectList title="Coding Projects" projects={CodingProjects} />
              </div>
              <div id="projects2">
                <ProjectList title="UI/UX Projects" projects={uiuxProjects} />
              </div>
              
            </>
          } />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/twars" element={<Twars />} />
          <Route path="/freshfind" element={<Freshfind />} />
          <Route path="/bestchef" element={<Bestchef />} />
          <Route path="/sanjobchat" element={<Sanjobchat />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;