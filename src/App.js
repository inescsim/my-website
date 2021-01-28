import React, { useState } from 'react';
import './App.scss'; 
import Route from './components/Route';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Link from './components/Link';

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [onHomePage, setOnHomePage] = useState(true);
  const theme = darkTheme ? "dark" : "light";
  const themeIcon = darkTheme ? "sun" : "moon";
  const useBackgroundImage = onHomePage ? "home-background" : "";

  const content = [
    {
      url: "/", id: "home", content: <Home />
    },
    {
      url: "/about", id: "about", content: <AboutMe />
    }
  ];

  const renderedRoutes = content.map((c) => {
    return (
      <Route path={c.url} key={`${c.id}-route`} setOnHomePage={setOnHomePage}>
          {c.content}
      </Route>
    );
  });

  return (
    <div className={`${theme}-theme ${useBackgroundImage}`}>
      <nav className="navbar">
        <Link href="/"><i className="large home icon rotate"></i></Link>
        <i className={`large ${themeIcon} icon rotate`} onClick={() => setDarkTheme(!darkTheme)}></i>
      </nav>
      <div className="main-section">
        <div className="main-section-content">
          {renderedRoutes}
        </div>
        <div className="right-margin"></div>
        <div className="left-margin"></div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;