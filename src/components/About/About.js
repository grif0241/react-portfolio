// REACT
import React from 'react';

// STYLES
import './about.css';

export default function About() {
  return (
    <div className='aboutContainer'>
      <h1 style={{ marginBottom: 0, textAlign: "center", fontSize: 70, fontWeight: 900 }}>Tyler G</h1>
      <p className='titles-text'>Web and Mobile App Developer</p>
      <p style={{ textAlign: "start" }} >
        Hi, my name is Tyler and welcome to my page. I'm a web and mobile app developer based in Ottawa, Canada. Checkout some of my projects below by viewing their demos.
      </p>
      <p style={{ textAlign: "start" }}>
        Don't hesitate to connect with me!
      </p>
    </div>
  )
}
