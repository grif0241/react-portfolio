import React from 'react';
import portfolio from '../../data/portfolio';
import './projects.css';
import ImageTextItem from '../ImageTextItem/ImageTextItem';
import TextImageItem from '../TextImageItem/TextImageItem';

import HorizontalLine from '../HorizontalLine/HorizontalLine';

export default function Projects() {
  console.log(portfolio);
  return (
    <section id="projects" className='projectsContainer'>
      {/* TODO: get links to project repos or demos */}

      <h2 className='containerTitle' >Projects</h2>
      {/* <HorizontalLine color="#6F38C5" height="3px" /> */}
      <ImageTextItem project={portfolio[0]} />
      <HorizontalLine color="#6F38C5" height="3px" />
      <TextImageItem project={portfolio[1]} />
      <HorizontalLine color="#6F38C5" height="3px" />
      <ImageTextItem project={portfolio[2]} />
      <HorizontalLine />
      {/* <HorizontalLine color="#6F38C5" height="3px" /> */}
    </section>
  );
}
