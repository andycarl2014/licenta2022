import React, { useEffect, useState } from 'react';
import logo1 from '../images/logo2.png';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { isAuthenticated, webAuth } from '../auth/auth0';
import { clientID } from '../helpers/CONSTANTS';

const NavbarGuest = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [err, setErr] = useState('');
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    isAuthenticated().then((value) => {
      setLoggedIn(value);
    });
  }, []);
  const handleClickLogout = () => {
    localStorage.clear();
    webAuth.logout({ returnTo: 'http://localhost:3000', clientID: clientID });
  };
  return !loggedIn ? (
    <Navbar className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
      <Container id='containerNavbar'>
        <Navbar.Brand href='/dashboard'>
          <img src={logo1} alt='logo' className='logo' />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/news'>News</Nav.Link>
          <Nav.Link href='/register'>Account</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  ) : (
    <Navbar className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
      <Container id='containerNavbar'>
        <Navbar.Brand href='/dashboard'>
          <img src={logo1} alt='logo' className='logo' />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/news'>News</Nav.Link>
          <Nav.Link href='/profile'>Profile</Nav.Link>
          <Nav.Link onClick={handleClickLogout}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarGuest;
