import React from 'react';
import miniCard from '../../components/cards/miniCard';
import Heading from '../../components/heading/Heading';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

const LandingPage = () => {
  return (
 <>
 <div>
       <div>
        <div><Heading content={"Laughter. Tears. Thrills. Find it all on Netflix."}/></div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, alias.</p>
       <div>
         <Input placeholder={"email address"}/>
        <Button content={"get started"}/>
       </div>
    </div>
    <div>
        <miniCard Heading={"Enjoy on your TV"} paragraph={"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."}/>
    </div>
    <div>
        <miniCard Heading={"Download your shows to watch offline"} paragraph={"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."}/>
    </div>
    <div>
        <miniCard Heading={"WCreate profiles for kids"} paragraph={"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."}/>
    </div>

 </div>
 </>

  );
};

export default LandingPage;