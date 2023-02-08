// REACT
import React, { useContext } from 'react';

// STYLES
import '../../App.css';
import './container.css'

// CONTEXT
import { DarkModeContext } from '../../context/DarkModeContext';

// COMPONENTS
import Navibar from '../Navibar/Navibar';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';

export default function Container() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleSwitch = () => {
    toggleDarkMode();
  }

  // serves as a container for the app to apply dark and light mode
  return (
    <div className={darkMode ? `App-container-dark` : `App-container-light`}>
      <Navibar handleSwitch={handleSwitch} />
      <About />
      <Projects />
      <Form />
      <Footer />
    </div>
  )
}
