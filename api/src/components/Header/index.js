import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => (
  <div id="header-wrapper">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/joke">Joke of the Day</Link>
      </li>
      <li>
        <Link to="/movies">Movies</Link>
      </li>
    </ul>
  </div>
);

export default Header;
