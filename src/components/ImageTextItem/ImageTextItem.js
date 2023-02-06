import React from 'react';
import Projects from '../Projects/Projects';
import './imageTextItem.css';


export default function ImageTextItem({ project }) {

  return (
    <div className="imageTextCard">
      <img src={process.env.PUBLIC_URL + `/${project.fileName}`} width={250} alt={project.altText} />
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
