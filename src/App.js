import React, { useState } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './App.scss'; 
import Home from './components/Home';
import AboutMe from './components/AboutMe';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const theme = darkTheme ? "dark" : "light";
  const themeIcon = darkTheme ? "sun" : "moon";

  return (
    <div className={`${theme}-theme`}>
      <HashRouter>
        <nav className="navbar">
          <Link to="/"><i className="large home icon rotate"></i></Link>
          <i className={`large ${themeIcon} icon rotate`} onClick={() => setDarkTheme(!darkTheme)}></i>
        </nav>
        <div className="main-section">
            <div className="main-section-content">
              <Route path="/" exact component={Home} />
              <Route path="/about" component={AboutMe} />
            </div>
            <div className="right-margin"></div>
            <div className="left-margin"></div>
        </div>
      </HashRouter>
      <footer></footer>
    </div>
  );
}

export default App;