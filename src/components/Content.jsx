import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Content = () => {
  const { theme } = useTheme();

  return (
    <main className={`content ${theme}-theme`}>
      <h2>Content Section</h2>
      <p>This content automatically adapts to the selected theme.</p>
      
      <div className={`card ${theme}-theme`}>
        <h3>About Theme Switching</h3>
        <p>
          This application demonstrates how to implement theme switching using 
          React's Context API and a custom hook. The current theme is: 
          <span className="theme-indicator">{theme}</span>
        </p>
      </div>
      
      <div className={`card ${theme}-theme`}>
        <h3>Context API</h3>
        <p>
          React's Context API provides a way to share values like the current theme
          between components without having to explicitly pass a prop through every
          level of the component tree.
        </p>
      </div>
      
      <div className={`card ${theme}-theme`}>
        <h3>Custom Hooks</h3>
        <p>
          Custom hooks let you extract component logic into reusable functions.
          The useTheme hook encapsulates all theme-related functionality.
        </p>
      </div>
    </main>
  );
};

export default Content;