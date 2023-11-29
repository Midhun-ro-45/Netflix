import React from 'react';

const MiniCard = ({ image, heading, paragraph }) => {
  return (
    <div className="mini cardcomponent">
      <h3>{heading}</h3>
      <p>{paragraph}</p>
      <div> <img src={image} alt="landing page down-component" /></div>

    </div>
  );
};

export default MiniCard;