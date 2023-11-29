import React from 'react';
import MiniCard from '../../components/cards/miniCard';
import Heading from '../../components/heading/Heading';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import "./landingpage.css"

const LandingPage = () => {
  return (
 <>
 <div >
       <div className='heightwidth flex flex-direction justify-content align-items bg-img' >
        <select name="language" id="lang">
          <option value=""></option>
          <option value="">English</option>
          <option value="">Hindi</option>
          <option value="">Tamil</option>
        </select>
        <Button content={"sign up"}/>
        <div><Heading content={"Laughter. Tears. Thrills. Find it all on Netflix."} fontfamily={""} fontweight={"800"}/></div>
        <div><Heading content={"Endless entertainment starts at just ₹ 149. Cancel anytime."}/></div>
        <div><Heading content={"Ready to watch? Enter your email to create or restart your membership."}/></div>
       <div>
         <Input placeholder={"email address"}/>
        <Button content={"Get started"}/>
       </div>
    </div>
    <div className='hw flex justify-content align-items'>
        <MiniCard Heading={"Enjoy on your TV"} paragraph={"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."}/>
    </div>
    <div className='hw flex justify-content align-items'>
        <MiniCard Heading={"Download your shows to watch offline"} paragraph={"Save your favourites easily and always have something to watch."}/>
    </div>
     <div className='hw flex justify-content align-items'>
        <MiniCard Heading={"Watch everywhere"} paragraph={"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."}/>
    </div>
    <div className='hw flex justify-content align-items'>
        <MiniCard Heading={"Create profiles for kids"} paragraph={"Send children on adventures with their favourite characters in a space made just for them—free with your membership."}/>
    </div>

    <div>
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      <div>
        <Input placeholder={"email address"}/>
        <Button content={"get started"}/>
      </div>
    </div>

 </div>
 </>

  );
};

export default LandingPage;