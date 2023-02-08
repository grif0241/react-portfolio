// REACT
import React, { useContext } from 'react';

// COMPONENTS
import './imageTextItem.css';

import { DarkModeContext } from '../../context/DarkModeContext';

export default function ImageTextItem({ project }) {

  return (
    <div className="imageTextCard">
      <a target="_blank" href={project.link}> <p className='screen-reader-text' >{project.title} Click here to see demo</p>
        <img className='projectImg' src={process.env.PUBLIC_URL + `/${project.fileName}`} width={250} alt={project.altText} />
      </a>

      <div className='cardTextContent'>
        <h3>{project.title}</h3>
        <p style={{ textAlign: "start" }}>{project.description}</p>
        <div className='techSpanContainer'>
          {project.stack.map((stack, index) => (
            <p key={index} className='techSpan'>{stack}</p>
          ))}
        </div>

      </div>
    </div>
  )
}
