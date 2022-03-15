import React from 'react';
import logo1 from '../images/logo2.png';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavbarGuest = () => {
  return (
    <Navbar className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
      <Container id='containerNavbar'>
        <Navbar.Brand href='#/dashboard'>
          <img src={logo1} alt='logo' className='logo' />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='#/news'>News</Nav.Link>
          <Nav.Link href='#/register'>Account</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarGuest;
