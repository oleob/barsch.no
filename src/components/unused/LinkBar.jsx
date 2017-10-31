import React from 'react';

import Github from '../icons/github.svg';
import Instagram from '../icons/instagram.svg';
import Linkedin from '../icons/linkedin.svg';
import Facebook from '../icons/facebook.svg';

import MediaLink from './MediaLink';

const LinkBar = () => (
  <div className="LinkBar">
    <MediaLink link="https://www.instagram.com/olebarsch/" icon={Instagram} />
    <MediaLink link="https://github.com/oleob/" icon={Github} />
    <MediaLink link="https://www.linkedin.com/in/ole-barsch/" icon={Linkedin} />
    <MediaLink link="https://www.facebook.com/olebarsch" icon={Facebook} />
  </div>
)

export default LinkBar;
