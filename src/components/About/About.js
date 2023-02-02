import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className='aboutContainer'>
      {/* TODO fix styling here */}

      <h1 style={{ marginBottom: 0, textAlign: "center", fontSize: 70, fontWeight: 900 }}>Tyler G</h1>
      <p className='titles-text'>Web and Mobile App Developer & Registered Nurse</p>
      <p style={{ textAlign: "start" }} >
        Hi, my name is Tyler and welcome to my page. I am a Registered Nurse & web and mobile application development student and I enjoy building projects with a mobile-first approach. I'm available for work as a developer after my last winter 2023 semester.
      </p>
    </div>
  )
}
