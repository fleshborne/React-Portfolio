import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' sticky='top'>
      <Navbar.Brand href='#home'>Welcome!</Navbar.Brand>
    </Navbar>
  );
}
