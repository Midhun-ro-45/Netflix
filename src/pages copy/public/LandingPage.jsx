import React from 'react';
import Heading from '../../components/heading/Heading';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import MiniCard from '../../components/card/Minicard';
import "./landingpage.css"
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (

    <div >

      <div className='container1 ' >

        <div className='layer flex flex-direction justify-content align-items'>

          <div className='navbar'>

            <div className='netflix-logo'>
              <svg xmlns="http://www.w3.org/2000/svg" width="11rem" height="8rem" viewBox="0 0 300 81.387" id="netflix"><g fill="#b81d24"><path d="M256.09 76.212c4.178.405 8.354.84 12.52 1.29l9.198-22.712 8.743 24.807c4.486.562 8.97 1.152 13.44 1.768l-15.328-43.501L299.996 0H287.01l-.135.186-8.283 20.455L271.32.003h-12.822l13.237 37.565-15.644 38.644zM246.393 75.322V0h-12.817v74.265c4.275.33 8.552.684 12.817 1.056M150.113 71.11c3.46 0 6.916.026 10.366.054V43.492h15.397V31.708H160.48v-19.91h17.733V0h-30.6v71.12c.831 0 1.666-.013 2.5-.01M110.319 71.83c4.27-.152 8.544-.28 12.824-.384V11.8h11.98V.003H98.339V11.8h11.982v60.03h-.002zM12.295 79.772V34.897L27.471 77.96c4.667-.524 9.341-1.017 14.028-1.483V.001H29.201v46.483L12.825.001H0v81.384h.077c4.063-.562 8.14-1.096 12.218-1.613M85.98 11.797V.001H55.377V75.202a1100.584 1100.584 0 0 1 30.578-2.211V61.184c-5.916.344-11.82.74-17.71 1.181V43.497h15.397V31.706H68.245V11.797H85.98zM203.614 60.62V-.003h-12.873v71.876c10.24.376 20.44.9 30.606 1.56V61.619c-5.9-.381-11.81-.712-17.733-1"></path></g></svg>
            </div>

            <div>
              <select name="language" id="lang">
                <option value="">English</option>
                <option value="">Hindi</option>
                <option value="">Tamil</option>
              </select>
              <Link to={"/login"} >
                <Button content={"sign in"} backgroundColor={"rgb(229, 9, 20)"} color={"rgb(255, 255, 255)"} padding="5px 10px" borderRadius={"0.25rem"} fontSize={"1rem"} width={"5rem"} />
              </Link>


            </div>

          </div>
          {/* landingcontent */}
          <div className='landingpagecontent'>
            <div className='landing-first-div'>
              <Heading content={"Laughter. Tears. Thrills. Find it all on Netflix."} fontSize={"2.7rem"} fontweight={"800"} />
              <Heading fontSize={"1.5rem"} fontWeight={"400"} content={"Endless entertainment starts at just ₹ 149. Cancel anytime."} />
              <Heading fontSize={"1.3rem"} fontweight={"400"} content={"Ready to watch? Enter your email to create or restart your membership."} />
            </div>
            <div className='button-input'>
              <Input width={"20rem"} height={"3.8rem"} placeholder={"Email address"} borderRadius={"5px"} backgroundColor={"rgba(0,0,0,0.7"} color={"white"} padding={"1.5rem 1rem 0.5rem"} />
              <Button height={"4rem"} content={"Get started"} backgroundColor={"rgb(229, 9, 20)"} color={"rgb(255, 255, 255)"} padding="0.75rem 1.5rem" borderRadius={"8px"} fontSize={"1.5rem"} />
            </div>
          </div>

        </div>
      </div>



      <div className='seperater'></div>
      <MiniCard content={"Enjoy on your TV"} paragraph={"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."} image={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"} />
      <div className='seperater'></div>
      <MiniCard content={"Download your shows to watch offline"} paragraph={"Save your favourites easily and always have something to watch."} image={"https://occ-0-2484-3663.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"} />
      <div className='seperater'></div>
      <MiniCard content={"Watch everywhere"} paragraph={"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."} image={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"} />
      <div className='seperater'></div>
      <MiniCard content={"Create profiles for kids"} paragraph={"Send children on adventures with their favourite characters in a space made just for them—free with your membership."} image={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"} />
      <div className='seperater'></div>

      <div className='last-text-container '>
        <p className='last-text'>Ready to watch? Enter your email to create or restart your membership.</p><br />
        <div className='ending-int'>
          <Input placeholder={"Email address"} height={"38px"} width={"20%"} backgroundColor={"grey"} padding={"0px 10px 0px 10px"} borderRadius={"8px"} />
          <Button content={"Get started"} backgroundColor={"rgb(229, 9, 20)"} color={"rgb(255, 255, 255)"} padding="0.75rem 1.5rem" borderRadius={"8px"} fontSize={"15px"} />
        </div>
      </div>
      <div>
        <Footer />
      </div>




    </div>

  );
};

export default LandingPage;