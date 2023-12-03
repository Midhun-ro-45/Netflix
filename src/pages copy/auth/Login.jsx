import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from "../../components/button/Button";
import Heading from "../../components/heading/Heading";
import Input from "../../components/input/Input";
import Footer from '../../components/footer/Footer';
import "./login.css"



const LoginForm = () => {
  const [mailId, setMailId] = useState('');
  const [password, setPassword] = useState('');

  const navigator = useNavigate()




  const handleLogin = () => {
    const storedData = JSON.parse(localStorage.getItem('userData'));

    if (storedData && mailId === storedData.mailId && password === storedData.password) {
      console.log('Login successful!');
    } else {
      console.log('Invalid mailId or password');
    }
  };

  const handleRegister = () => {

    const userData = { mailId, password };

    localStorage.setItem('userData', JSON.stringify(userData));

    console.log('Registration successful!');
  };

  return (
    <div className=' bg-img-signin '>
      <div className='shadow-layer flex flex-direction-column justify-content align-items'>
        <div className='svg-netflix'><svg xmlns="http://www.w3.org/2000/svg" width="180" height="40px" viewBox="0 0 300 81.387" id="netflix"><g fill="#b81d24"><path d="M256.09 76.212c4.178.405 8.354.84 12.52 1.29l9.198-22.712 8.743 24.807c4.486.562 8.97 1.152 13.44 1.768l-15.328-43.501L299.996 0H287.01l-.135.186-8.283 20.455L271.32.003h-12.822l13.237 37.565-15.644 38.644zM246.393 75.322V0h-12.817v74.265c4.275.33 8.552.684 12.817 1.056M150.113 71.11c3.46 0 6.916.026 10.366.054V43.492h15.397V31.708H160.48v-19.91h17.733V0h-30.6v71.12c.831 0 1.666-.013 2.5-.01M110.319 71.83c4.27-.152 8.544-.28 12.824-.384V11.8h11.98V.003H98.339V11.8h11.982v60.03h-.002zM12.295 79.772V34.897L27.471 77.96c4.667-.524 9.341-1.017 14.028-1.483V.001H29.201v46.483L12.825.001H0v81.384h.077c4.063-.562 8.14-1.096 12.218-1.613M85.98 11.797V.001H55.377V75.202a1100.584 1100.584 0 0 1 30.578-2.211V61.184c-5.916.344-11.82.74-17.71 1.181V43.497h15.397V31.706H68.245V11.797H85.98zM203.614 60.62V-.003h-12.873v71.876c10.24.376 20.44.9 30.606 1.56V61.619c-5.9-.381-11.81-.712-17.733-1"></path></g></svg></div>
        <div className='flex flex-direction  bg-color-div hewi justify-content align-items padding min-height'>
          <div className=' font-size'><Heading content={"Sign In"} fontSize={"30px"} fontWeight={"300"}>Login to Netflix</Heading></div>
          <div className='signup-content'>
            <Input
              type="text"
              placeholder="Email"
              value={mailId}
              onChange={(e) => setMailId(e.target.value)}
              height={"20%"}
              width={"100%"}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              height={"20%"}
              width={"100%"}

            />
            <Link to="/home">
              <Button onClick={handleLogin} content={"sign in"} height={"3rem"} borderRadius={"4px"} fontSize={"1rem"} backgroundColor={"rgb(229,9,20)"} color={"white"} >Signin</Button>
            </Link>
          </div>

          <div>
            <div className='flex flex-direction-row gap'>
              <div className='color-white'><Input type={"checkbox"} />Remember me</div>
              <div><a href="#" className='need-link'>Need help?</a></div>
            </div>

          </div>
          <div className='flex '>
            <div className='color-white'>New to Netflix?</div><div><Link to="/signup" className='signspan'>Signup now</Link></div>
          </div>



        </div>
        <div className='foot-div'>
          <Footer />
        </div></div>
    </div>
  );
};

export default LoginForm;