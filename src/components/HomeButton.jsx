import React from 'react';
import {Link} from 'react-router-dom';

import Home from '../icons/home.svg';

const HomeButton = () => (
  <Link to="/" className="HomeButton">
    <img alt="linkicon" className="HomeIcon" src={Home} />
  </Link>
);

export default HomeButton;
