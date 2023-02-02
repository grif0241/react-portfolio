import React, { useContext } from 'react';
import './footer.css';

import { DarkModeProvider, DarkModeContext } from '../../context/DarkModeContext';

import { Github, Linkedin, Hash } from 'react-bootstrap-icons';

export default function Footer() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const footerIconSize = 25;


  return (
    <footer className={darkMode ? "footer-light" : "footer-dark"}>
      <div className='footerLinksContainer'>

        <a target="_blank" href="https://github.com/grif0241">
          <Github color={darkMode ? "ghostwhite" : "#282c34"} size={footerIconSize} />
        </a>

        <a target='_blank' href="https://www.linkedin.com/in/tyler-griffin-a1558b188/" >
          <Linkedin color={darkMode ? "ghostwhite" : "#282c34"} size={footerIconSize} />
        </a>

        <a target="_blank" href="https://tylerg.hashnode.dev/">
          <Hash color={darkMode ? "ghostwhite" : "#282c34"} size={footerIconSize} />
        </a>


      </div>
      <p style={{ fontSize: 12 }}>&copy; {new Date().getFullYear()} Tyler Griffin, BScN, RN</p>
    </footer>
  )
}


// https://acrobat.adobe.com/link/acrobat/add-comment?x_api_client_id=adobe_com&x_api_client_location=add_comment