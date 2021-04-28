import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import { useForm } from 'react-hook-form';
import { API_URL } from '../../constants/api';
import { useHistory } from 'react-router-dom';

export const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loginErrMsg, setLoginErrMsg] = useState([]);
  const [errorPopup, setErrorPopup] = useState(false);

  const history = useHistory();

  const onSubmit = (loginData, e) => {
    const username = loginData.username;
    const password = loginData.password;
    const adminCred = { username, password };
    // e.target.reset();

    axios
      .post(`${API_URL}/signin`, adminCred)
      .then((res) => {
        localStorage.setItem('loggedIn', res.data.loggedIn);
        console.log(res);
        e.target.reset();
        history.push('/Admin');
      })
      .catch((err) => {
        setLoginErrMsg(err.message);
        console.log(err.message, 'err');
        setErrorPopup(true);
      });
  };

  return (
    <div className='wrapperloginContainer'>
      {errorPopup ? (
        <div className='errorPopup'>
          <div className='wrapperMsg'>
            {loginErrMsg === 'Request failed with status code 404' ? (
              <p>User dont exist!</p>
            ) : (
              <p>Wrong Password!</p>
            )}
          </div>
          <button
            className='closePopup'
            onClick={() => setErrorPopup(!errorPopup)}
          >
            close
          </button>
        </div>
      ) : null}
      <div className='container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='wrapperInput'>
            <div className='username'>
              <label>Username</label>
            </div>
            <input
              type='text'
              autocomplete='off'
              name='username'
              ref={register({ required: 'Username is required' })}
            />
            {errors.username ? (
              <p className='errormessage'>{errors.username.message}</p>
            ) : null}
          </div>
          <div className='wrapperInput'>
            <div className='password'>
              <label>Password</label>
            </div>
            <input
              type='password'
              name='password'
              ref={register({ required: 'Password is required' })}
            />
            {errors.password ? (
              <p className='errormessage'>{errors.password.message}</p>
            ) : null}
          </div>
          <button className='btnLogin' type='submit'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
