import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar ${theme}-theme`}>
      <div>
        <h1>Theme Switcher App</h1>
      </div>
      <div>
        <button 
          onClick={toggleTheme} 
          className={`theme-toggle ${theme}-theme`}
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;