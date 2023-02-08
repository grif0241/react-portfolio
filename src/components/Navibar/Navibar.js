// REACT
import React, { useContext } from 'react';

// STYLES
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrightnessHigh, Moon } from 'react-bootstrap-icons';
// import { CodeSlash } from 'react-bootstrap-icons';
import './navibar.css';

// CONTEXT
import { DarkModeContext } from '../../context/DarkModeContext';

function Navibar({ handleSwitch }) {
  function refreshPage() {
    window.location.reload(true);
  }

  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className='navContainer'>
      <Navbar className='navBar' variant={darkMode ? "dark" : "light"} bg="transparent" expand="sm">
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={refreshPage}>Home</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      {darkMode ? <BrightnessHigh size={35} className='light-switch-background-dark' onClick={handleSwitch} /> : <Moon size={35} className='light-switch-background-light' onClick={handleSwitch} />}

    </div>
  );
}

export default Navibar;
