import React from 'react';
import Home from './pages/Home';
import User from './pages/User';
import NotFound from './pages/NotFound';

const Routes = ({ page }) => {
  let Component;

  switch (page) {
    case 'Home': {
      Component = Home;
      break;
    }
    case 'User': {
      Component = User;
      break;
    }
    default: {
      Component = NotFound;
      break;
    }
  }

  return <Component />;
};

export default Routes;