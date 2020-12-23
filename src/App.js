import React, { useState } from 'react';
import './App.css'; 
import Route from './components/Route';
import Section from './components/Section';
import Header from './components/Header';

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [language, setLanguage] = useState('en');
  const themeIcon = darkTheme ? "sun" : "moon";
  const theme = darkTheme ? "dark" : "light";

  return (
    <div className={`${theme}-theme`}>
      <nav className="navbar">
        <Header />
        <div className="icons">
          <i className={`${themeIcon} outline icon`} onClick={() => setDarkTheme(!darkTheme)}></i>
          
        </div>
      </nav>
      <div className="content">
        <Route path="/">
          <h3>Welcome</h3>
          <p>My name is Inês and this is my website.</p>
        </Route>
        <Route path="/about">
            <Section title="About me"></Section>
        </Route>
        <Route path="/experience">
            <Section title="Experience"></Section>
        </Route>
        <Route path="/skills">
            <Section title="Skills"></Section>
        </Route>
        <Route path="/contact">
            <Section title="Contact"></Section>
        </Route>
      </div>
    </div>
  );
}

export default App;