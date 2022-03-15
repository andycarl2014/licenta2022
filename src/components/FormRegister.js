import { Checkbox, FormControl } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from 'antd';
import React, { useState } from 'react';
import UserSchema from '../schemas/UserSchema';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');

  const RegisterClick = () => {
    const user = new UserSchema({
      firstName: first,
      lastName: last,
      email: email,
      password: password,
    });
    user.save();
  };
  return (
    <div className='containerAccount'>
      <div id='loginform'>
        <h2 id='headerTitle'>Register</h2>
        <div className='row '>
          <input
            type='text'
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            placeholder='First Name'
          />
        </div>
        <div className='row '>
          <input
            type='text'
            value={last}
            onChange={(e) => setLast(e.target.value)}
            placeholder='Last Name'
            autoComplete='false'
          />
        </div>
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
        </div>
        <div className='row '>
          <input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Confirma Parola'
          />
        </div>
        <div className='row ' id='button'>
          <Button type='primary' onClick={() => RegisterClick()}>
            Register
          </Button>
        </div>
        <div className='row ' id='button'>
          <Button type='default' className='default'>
            <a href='#/login' className='gotoRegister'>
              Go to Login!
            </a>
          </Button>
        </div>
        <div className='row'>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                sx={{ color: 'black !important' }}
                control={<Checkbox />}
                label='I agree to Terms of Service'
              />
            </FormGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Register;
