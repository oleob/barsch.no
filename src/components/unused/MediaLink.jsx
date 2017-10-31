import React from 'react';

const MediaLink = (props) => (
  <div className="MediaLink">
    <a href={props.link} target="_blank">
      <img alt="linkicon" className="MediaLinkIcon" src={props.icon} />
    </a>
  </div>
)

export default MediaLink;
