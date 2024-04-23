import PicGrid from './pic-grid';
import classes from './about.module.scss';
import React from 'react';
import Footer from './footer';

type Pic = {
  id: string;
  name: string;
  pic: string;
};

const PICS: Pic[] = [
  {
    id: 'p1',
    name: 'Pic1',
    pic: '/images/site/about.png',
  },
  {
    id: 'p2',
    name: 'Pic2',
    pic: '/images/site/about.png',
  },
  {
    id: 'p3',
    name: 'Pic3',
    pic: '/images/site/about.png',
  },
  {
    id: 'p4',
    name: 'Pic4',
    pic: '/images/site/about.png',
  },
  {
    id: 'p5',
    name: 'Pic5',
    pic: '/images/site/about.png',
  },
  {
    id: 'p6',
    name: 'Pic6',
    pic: '/images/site/about.png',
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="image-and-div-stack">
      <img src="/images/site/bg.png" alt="An image showing" width={'100%'} height={743} />
      <div className="overlay-div">
        <div className={classes.about}>
          <p className={classes.title}>Who we are?</p>
          <p>We champion the incredible creativity of differently abled individuals,</p>
          <p>including those with conditions like Autism, Down syndrome, Learning disabilities(LD), and</p>
          <p>Pervasive developmental disorders (PDD), by turning their artwork into intricately crafted tarot cards,</p>
          <p>and each collection will have 50 different cards for you to shuffle</p>
          <PicGrid pics={PICS} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
