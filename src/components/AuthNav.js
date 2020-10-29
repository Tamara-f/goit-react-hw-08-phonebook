import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <>
    <NavLink to="/register" className="nav" activeClassName="active-nav">
      Register
    </NavLink>
    <NavLink to="/login" className="nav" activeClassName="active-nav">
      Login
    </NavLink>
  </>
);

export default AuthNav;
