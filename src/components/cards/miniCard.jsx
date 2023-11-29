import React from 'react';
import "./minicard.css"

const MiniCard = ({ image, heading, paragraph }) => {
  return (
    <div className="mini cardcomponent flex">
      <div className='widthone'>
          <h3>{heading}</h3>
        <p>{paragraph}</p>
            </div>
      <div className='width height'> <img src={image} alt="landingpage down-compo" /></div>

    </div>
  );
};

export default MiniCard;