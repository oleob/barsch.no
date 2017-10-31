import React from 'react';

import CircularMenu from '../../components/CircularMenu';
import MenuNode from '../../components/MenuNode';
import LocalMenuNode from '../../components/LocalMenuNode';

import Github from '../../icons/github.svg';
import Instagram from '../../icons/instagram.svg';
import Linkedin from '../../icons/linkedin.svg';
import Facebook from '../../icons/facebook.svg';
import Info from '../../icons/info.svg';

const Home = () => (
  <div className="ContentCenter">
    <CircularMenu radius={250} >
      <MenuNode link="https://www.instagram.com/olebarsch/" icon={Instagram} />
      <MenuNode link="https://github.com/oleob/" icon={Github} />
      <MenuNode link="https://www.linkedin.com/in/ole-barsch/" icon={Linkedin} />
      <MenuNode link="https://www.facebook.com/olebarsch" icon={Facebook} />
      <LocalMenuNode link="/about" icon={Info} />
    </CircularMenu>
  </div>
);

export default Home;
