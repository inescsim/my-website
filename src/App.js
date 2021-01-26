import React, { useState, useEffect } from 'react';
import './App.scss'; 
import Route from './components/Route';
import Home from './components/Home';
import AboutMe from './components/AboutMe';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const theme = darkTheme ? "dark" : "light";
  const themeIcon = darkTheme ? "sun" : "moon";
  const [currentPage, setCurrentPage] = useState("/");

  const content = [
    {
      url: "/", id: "home", content: <Home />
    },
    {
      url: "/about", id: "about", content: <AboutMe />
    }
  ];

  useEffect(() => {
    const urls = content.map(function (c) { return c.url; });
    if(!urls.includes(window.location.pathname)) {
      window.history.pushState({}, '', "/");
      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent);
    }

    if(window.location.pathname !== currentPage) {
      setCurrentPage(window.location.pathname);
    }
  }, [currentPage, darkTheme]);

  const renderedRoutes = content.map((c) => {
    return (
      <Route path={c.url} key={`${c.id}-route`}>
          {c.content}
      </Route>
    );
  });

  return (
    <div className={`${theme}-theme`}>
      <nav className="navbar">
        <a href="/"><i className="large info icon"></i></a>
        <a href="/"><i className={`large ${themeIcon} icon`} onClick={() => setDarkTheme(!darkTheme)}></i></a>
      </nav>
      <div className="main-section">
        {renderedRoutes}
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;