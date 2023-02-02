import React from 'react';
import Projects from '../Projects/Projects';
import './imageTextItem.css';


export default function ImageTextItem({ project }) {
  console.log(project.stack)
  return (
    <div className="imageTextCard">
      <img src={project.imgUrl} width={250} />
      <div className='cardTextContent'>
        <h3>{project.title}</h3>
        <p style={{ textAlign: "start" }}>{project.description}</p>
        <div className='techSpanContainer'>
          {project.stack.map((stack, index) => (
            <p className='techSpan'>{stack}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
