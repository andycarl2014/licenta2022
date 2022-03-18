import React, { useState } from 'react';
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import { isAuthenticated, webAuth } from '../auth/auth0';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleClickLogin = () => {
    webAuth.login(
      {
        realm: 'Username-Password-Authentication',
        email: email,
        password: password,
      },
      (err, result) => {
        console.log(err, result);
        if (err) return navigate('/register');
      },
    );
    isAuthenticated();
  };
  return (
    <div className='containerAccount'>
      <div id='loginform'>
        <h2 id='headerTitle'>Login</h2>
        <div className='row '>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='E-mail Address'
            autoComplete='new-password'
          />
        </div>
        <div className='row '>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Parola'
          />

          <a className='Reset' href='/reset'>
            Forgot Password?
          </a>
        </div>

        <div className='row ' id='button'>
          <Button type='primary' onClick={handleClickLogin}>
            Log in!
          </Button>
        </div>
        <div className='row ' id='button'>
          <Button type='default' className='default'>
            <a href='/register' className='gotoRegister'>
              Go to register!
            </a>
          </Button>
        </div>
        <hr />
        <div className='row'>
          <Typography
            style={{
              fontSize: '24px',
              paddingLeft: '3rem',
              paddingBottom: '3rem',
              textAlign: 'center',
            }}>
            Or login using your account with
          </Typography>
        </div>
        <div className='row column' style={{ paddingTop: 0 }}>
          <GoogleOutlined className='loginAlt' />
          <FacebookOutlined className='loginAlt' />
        </div>
      </div>
    </div>
  );
};

export default Register;
