import React from 'react';
import NavLinks from './NavLinks';

const DesktopMenu = () => {
  return (
    <nav className="flex space-x-6 font-text text-menu">
      <NavLinks />
    </nav>
  );
};

export default DesktopMenu;
