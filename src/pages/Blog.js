import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const Blog = ({ data }) => {
  return (
    <Layout titlePage='Blog'>
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default Blog;
