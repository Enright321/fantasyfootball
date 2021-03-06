import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <>
      <header className='header-color'>
        <Navbar>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>
                <img src='/images/brand.png' alt='brand' />
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse
              className='justify-content-end'
              id='basic-navbar-nav'
            >
              <Nav className='ms-auto'>
                <LinkContainer to='/' className='nav-color'>
                  <Nav.Link className='links'>
                    <i className='nav-color'>2021</i>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/'>
                  <Nav.Link className='links'>
                    <i className='nav-color'>2020</i>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/'>
                  <Nav.Link className='links'>
                    <i className='nav-color'>2019</i>
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Navbar className='nav-bg'>
        <Container>
          <Nav className='m-auto'>
            <LinkContainer to='/gamescores'>
              <Nav.Link className='links'>
                <i>Game Scores</i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/matchscores'>
              <Nav.Link className='links'>
                <i>Match Scores</i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/freeagents'>
              <Nav.Link className='links'>
                <i>Free Agents</i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
              <Nav.Link className='links'>
                <i>About</i>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
