import React from 'react';

const MenuNode = (props) => (
  <a href={props.link} target="_blank">
    <img alt="linkicon" className="MenuIcon" src={props.icon} />
  </a>
);

export default MenuNode;
