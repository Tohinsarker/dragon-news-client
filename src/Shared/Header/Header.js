import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link className='text-white m-2 text-xl' to='/'>News</Link>
            <Link className='text-white m-2 text-xl' to='/portal'>Portal</Link>
            <Link className='text-white m-2 text-xl' to='/contact'>Contact</Link>
            <Link className='text-white m-2 text-xl' to='/about'>About</Link>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;