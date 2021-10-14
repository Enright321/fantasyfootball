import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header className='header-color'>
      <Navbar>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img src='/images/brand.png' alt='nothin' />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            className='justify-content-end'
            id='basic-navbar-nav'
          >
            <Nav className='ms-auto'>
              <LinkContainer to='/'>
                <Nav.Link className='links'>
                  <i>2021</i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/'>
                <Nav.Link className='links'>
                  <i>2020</i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/'>
                <Nav.Link className='links'>
                  <i>2019</i>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
