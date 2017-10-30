import React from 'react';

const MediaLink = (props) => (
  <div className="MediaLink">
    <a href={props.link}>
      <img alt="linkicon" className="MediaLinkIcon" src={props.icon} />
    </a>
  </div>
)

export default MediaLink;
