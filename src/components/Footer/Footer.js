// REACT
import React, { useContext } from 'react';

// STYLES
import { Github, Linkedin, Hash } from 'react-bootstrap-icons';
import './footer.css';

// CONTEXT
import { DarkModeContext } from '../../context/DarkModeContext';


export default function Footer() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const footerIconSize = 25;

  return (
    <footer className={darkMode ? "footer-light" : "footer-dark"}>
      <div className='footerLinksContainer'>

        <a target="_blank" href="https://github.com/grif0241"> <p className='screen-reader-text'>Website Link</p>
          <Github color={darkMode ? "ghostwhite" : "#282c34"} size={footerIconSize} />
        </a>

        <a target='_blank' href="https://www.linkedin.com/in/tyler-griffin-a1558b188/" ><p className='screen-reader-text'>LinkedIn Link</p>
          <Linkedin color={darkMode ? "ghostwhite" : "#282c34"} size={footerIconSize} />
        </a>

        <a target="_blank" href="https://tylerg.hashnode.dev/"> <p className='screen-reader-text'>Blog Link</p>
          <Hash color={darkMode ? "ghostwhite" : "#282c34"} size={footerIconSize} />
        </a>


      </div>
      <p style={{ fontSize: 12, marginTop: 5 }}>&copy; {new Date().getFullYear()} Tyler Griffin, BScN, RN</p>
    </footer>
  )
}