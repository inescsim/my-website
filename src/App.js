import React, { useState, useEffect } from 'react';
import './App.scss'; 
import Route from './components/Route';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const theme = darkTheme ? "dark" : "light";
  const themeIcon = darkTheme ? "sun" : "moon";
  const [currentPage, setCurrentPage] = useState("/");

  const content = [
    {
      url: "/", id: "home", content: ""
    },
    {
      url: "/about", id: "about", content: <AboutMe />
    },
    {
      url: "/experience", id: "experience", content: <Experience />
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
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </nav>
      <div className="main-section">
        {renderedRoutes}
      </div> 
      <footer>
          <i className={`${themeIcon} icon`} onClick={() => setDarkTheme(!darkTheme)}></i>
      </footer>
    </div>
  );
}

export default App;