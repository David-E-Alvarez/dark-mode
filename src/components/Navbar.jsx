import React, { useState } from 'react';
import { useDarkMode } from './hooks/useDarkMode';

const Navbar = () => {
  const [darkModeOn, setDarkModeOn] = useState(false);
  const [value, setValue] = useDarkMode("toggle", false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkModeOn(!darkModeOn);
    setValue(!value);
  };
  
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkModeOn ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
