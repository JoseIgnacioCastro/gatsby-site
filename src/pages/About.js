import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const About = () => {
  return (
    <Layout titlePage='About Me'>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
      <StaticImage
        src='../images/bg-fortnite-temp-6.jpg'
        alt="alt='Imagen Background Fortnite Temp.5'"
      />
    </Layout>
  );
};

export default About;
