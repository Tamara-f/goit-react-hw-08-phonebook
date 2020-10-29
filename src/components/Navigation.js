import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { authSelectors } from '../redux/auth';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact className="nav" activeClassName="active-nav">
      Home
    </NavLink>

    {isAuthenticated && (
      <NavLink to="/contacts" className="nav" activeClassName="active-nav">
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});
export default connect(mapStateToProps)(Navigation);
