import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Navbar color="dark" dark expand="md" style={{justifyContent: 'flex-end'}}>
        <NavbarBrand tag={NavLink} to='/'>Home</NavbarBrand>
        <NavbarBrand tag={NavLink} to="/add">Add</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default NavBar;