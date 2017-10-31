import React from 'react';
import {Link} from 'react-router-dom';

const LocalMenuNode = (props) => (
  <Link to={props.link} >
    <img alt="linkicon" className="MenuIcon" src={props.icon} />
  </Link>
);

export default LocalMenuNode;
