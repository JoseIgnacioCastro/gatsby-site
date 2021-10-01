import * as React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

// markup
const IndexPage = () => {
  return (
    <Layout titlePage='Home'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src='../images/bg-fortnite-temp-5.jpg'
        alt='Imagen Background Fortnite Temp.4'
      />
    </Layout>
  );
};

export default IndexPage;
