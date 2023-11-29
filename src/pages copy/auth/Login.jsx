import React, { useState } from 'react';
import Button from "../../components/button/Button";
import Heading from "../../components/heading/Heading";
import Input from "../../components/input/Input";

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
    <div>
      <Heading content={"Login to Netflix"}>Login to Netflix</Heading>
      <form>
        <Input
          type="text"
          placeholder="mailId"
          value={mailId}
          onChange={(e) => setMailId(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin} content={"login"}>Login</Button>
         <Button onClick={handleRegister} content={"register"}>Register</Button>
      </form>
    </div>
  );
};

export default LoginForm;
