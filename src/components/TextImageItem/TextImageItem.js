import React from 'react';
import './textImageItem.css';

export default function TextImageItem({ project }) {
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
      </div>
      <img src={process.env.PUBLIC_URL + `/${project.fileName}`} width={250} alt={project.altText} />

    </div>
  )
}
