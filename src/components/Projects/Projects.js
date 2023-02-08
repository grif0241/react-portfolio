// REACT
import React from 'react';

// STYLES
import './projects.css';

// COMPONENTS
import ImageTextItem from '../ImageTextItem/ImageTextItem';
import TextImageItem from '../TextImageItem/TextImageItem';
import HorizontalLine from '../HorizontalLine/HorizontalLine';

// DATA
import portfolio from '../../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className='projectsContainer'>
      {/* TODO: get links to project repos or demos */}

      <h2 className='containerTitle' >Projects</h2>

      <ImageTextItem project={portfolio[0]} />
      <HorizontalLine color="#6F38C5" height="3px" />
      <TextImageItem project={portfolio[1]} />
      <HorizontalLine color="#6F38C5" height="3px" />
      <ImageTextItem project={portfolio[2]} />
      <HorizontalLine color="#6F38C5" height="3px" />
      <TextImageItem project={portfolio[3]} />

    </section>
  );
}
