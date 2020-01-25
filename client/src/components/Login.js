import React, { useState } from "react";

import { axiosWithAuth } from './utils/axiosWithAuth';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [error, setError] = useState();
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth()
      .post('/api/login', user)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)
        props.history.push('/bubble-page')
      })
      .catch(err => {
        setError(err)
      })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={handleSubmit}>
        {error && <div className='error'>{error}</div>}

        <input
          type='text'
          name='username'
          placeholder='Username'
          value={user.username}
          onChange={handleChange}
        />
        <input
          type='text'
          name='password'
          placeholder='Password'
          value={user.password}
          onChange={handleChange}
        />
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
