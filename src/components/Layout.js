import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import {
  titleH,
  container,
  nav,
  linkItems,
  linkItem,
} from '../components/layoutStyle.module.css';

const Layout = ({ titlePage, children }) => {
  // *** UseStatciQuery solo se llama una vez
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  // *** Destrucuring Query
  const { title } = data.site.siteMetadata;

  return (
    <div className={container}>
      <title>
        {titlePage} | {title}
      </title>
      <header>
        <h2 className={titleH}>{title}</h2>
      </header>
      <nav className={nav}>
        <div>
          <h1 className={titleH}>{titlePage}</h1>
        </div>
        <ul className={linkItems}>
          <li className={linkItem}>
            <Link to='/'>Home</Link>
          </li>
          <li className={linkItem}>
            <Link to='/Blog'>Blog</Link>
          </li>
          <li className={linkItem}>
            <Link to='/About'>About</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
