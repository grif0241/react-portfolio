// REACT
import React, { useContext } from 'react';

// STYLES
import { Play } from 'react-bootstrap-icons';
import './textImageItem.css';
import { DarkModeContext } from '../../context/DarkModeContext';


export default function TextImageItem({ project }) {

  const { darkMode } = useContext(DarkModeContext);
  const footerIconSize = 100;
  return (
    <div className="textImageCard">
      <div className='cardTextContent'>
        <h3>{project.title}</h3>
        <p style={{ textAlign: "start" }} >{project.description}</p>
        <div className='techSpanContainer'>
          {project.stack.map((stack, index) => (
            <p key={index} className='techSpan'>{stack}</p>
          ))}
        </div>
        <a target="_blank" href={project.link}><p className='screen-reader-text' >{project.title} Click here to see a demo</p>

        </a>
      </div>
      <a target="_blank" href={project.link}><p className='screen-reader-text' >{project.title} Click here to see a demo</p>
        <img className="projectImg" src={process.env.PUBLIC_URL + `/${project.fileName}`} width={250} alt={project.altText} />

      </a>


    </div>
  )
}
