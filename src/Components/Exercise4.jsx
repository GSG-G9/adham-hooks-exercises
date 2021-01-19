import React, { useState } from 'react';

export default function Exercise4() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState('');
  const [errorMeassage, setErrorMeassage] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
    setValidPassword('');
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = () => {
    if (!email || !password || !validPassword) {
      alert('None of your inputs can be embty');
    }
  };

  const handleReEnterpassword = ({ target: { value } }) => {
    value === password ? setValidPassword(true) : setValidPassword(false);
    console.log(validPassword);
  };
  const showErrorMeassage = (e) => {
    setErrorMeassage(true);
  };

  return (
    <div>
      <input
        placeholder="Enter Your EMAIL"
        type="email"
        name="email"
        onChange={handleEmail}
      />
      <input
        placeholder="Enter Your Password"
        type="password"
        name="password"
        onChange={handlePassword}
      />
      <input
        placeholder="Enter Your Password again"
        type="password"
        name="confirmPassword"
        onChange={handleReEnterpassword}
      />
      {!validPassword && <p>Hello</p>}
      <button type="submit">submit</button>
    </div>
  );
}
