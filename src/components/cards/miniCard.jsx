import React from 'react';

const miniCard = ({ image, heading, paragraph }) => {
  return (
    <div className="mini cardcomponent">
      <img src={image} alt="landing page down-component" />
      <h3>{heading}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default miniCard;