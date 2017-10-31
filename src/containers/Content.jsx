import React from 'react';
import LinkBar from '../components/LinkBar';
import Construction from '../components/Construction';
//import HiddenMenu from '../components/HiddenMenu';
import Hexagon from '../components/Hexagon';

const Content = () => (
  <div className="Content">
    <div className="ContentCenter">
      {/* <HiddenMenu /> */}
      <Hexagon />
      <Construction />
      <h1>Under construction!</h1>
      <LinkBar />
    </div>
  </div>
)

export default Content;
