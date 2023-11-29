import React, { useState } from 'react';
import Button from "../../components/button/Button";
import Heading from "../../components/heading/Heading";
import Input from "../../components/input/Input";
import "./login.css"

const LoginForm = () => {
  const [mailId, setMailId] = useState('');
  const [password, setPassword] = useState('');




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
    <div className='flex flex-direction justify-content align-items bg-color hewi'>
      <Heading content={"Login to Netflix"}>Login to Netflix</Heading>
      <form>
        <Input
          type="text"
          placeholder="mailId"
          value={mailId}
          onChange={(e) => setMailId(e.target.value)}
        /><br/>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button onClick={handleLogin} content={"login"} >Login</Button><br />
         <Button onClick={handleRegister} content={"register"}>Register</Button>
      </form>
    </div>
  );
};

export default LoginForm;
