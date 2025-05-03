import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`footer ${theme}-theme`}>
      <p>
        Theme Switcher App - Week 7 Laboratory Assessment
      </p>
      <p>
        <small>
          Current Theme: <span className="theme-indicator">{theme}</span> | Built with React Context and Custom Hooks
        </small>
      </p>
    </footer>
  );
};

export default Footer;