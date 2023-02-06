import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { DarkModeContext } from '../../context/DarkModeContext';

import { CodeSlash } from 'react-bootstrap-icons';

import './navibar.css';

// TODO: put light switch inside nav bar to far right; collapsed navbar to far left; expanded navbar to far left
function Navibar() {
  function refreshPage() {
    window.location.reload(true);
  }

  const { darkMode } = useContext(DarkModeContext);
  return (
    <Navbar className='navBar' variant={darkMode ? "dark" : "light"} bg="transparent" expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={refreshPage}><CodeSlash size={50} /></Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;
