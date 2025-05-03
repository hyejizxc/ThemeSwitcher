import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

// AppContent component to access the theme context
const AppContent = () => {
  const { theme } = useTheme();
  
  // Apply theme class to body element
  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);
  
  return (
    <div className={`App theme-transition ${theme}-theme`}>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;