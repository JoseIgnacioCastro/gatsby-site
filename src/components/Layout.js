import React from 'react';
import { Link } from 'gatsby';
import {
  title,
  container,
  nav,
  linkItems,
  linkItem,
} from '../components/layoutStyle.module.css';

const Layout = ({ titlePage, children }) => {
  return (
    <div className={container}>
      <nav className={nav}>
        <div>
          <h1 className={title}>{titlePage}</h1>
        </div>
        <ul className={linkItems}>
          <li className={linkItem}>
            <Link to='/'>Home</Link>
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
