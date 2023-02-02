import React, { useContext } from 'react';

import '../../App.css';
import './container.css'
import { DarkModeProvider, DarkModeContext } from '../../context/DarkModeContext';
// import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { BrightnessHigh, Moon } from 'react-bootstrap-icons';
// import { LogoNodejs,  } from 'react-ionicons'; 

import Navibar from '../Navibar/Navibar';
// import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Form from '../Form/Form';
import { Nav } from 'react-bootstrap';
import Footer from '../Footer/Footer';

export default function Container() {


  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleSwitch = () => {
    toggleDarkMode();
  }

  // serves as a container for the app to apply dark and light mode
  return (
    // TODO fix light switch going all the way to edge for large screens
    <div className={darkMode ? `App-container-dark` : `App-container-light`}>
      {/* {darkMode ? <WbSunnyOutlinedIcon className='light-switch-background-dark' onClick={handleSwitch} /> : <DarkModeOutlinedIcon className='light-switch-background-light' onClick={handleSwitch} />} */}
      {darkMode ? <BrightnessHigh size={35} className='light-switch-background-dark' onClick={handleSwitch} /> : <Moon size={35} className='light-switch-background-light' onClick={handleSwitch} />}

      {/* <BrightnessHigh /> */}
      <Navibar />
      <About />
      <Projects />
      <Form />
      <Footer />

    </div>
  )
}
