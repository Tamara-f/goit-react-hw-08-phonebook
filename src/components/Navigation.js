import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../routes';

const Navigation = () => (
  <nav>
    {routes.map(route => (
      <NavLink
        exact={route.exact}
        key={route.label}
        to={route.path}
        className="nav"
        activeClassName="active-nav"
      >
        {route.label}
      </NavLink>
    ))}
  </nav>
);

export default Navigation;
