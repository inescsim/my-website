import React, { useState, useEffect } from 'react';
import './App.scss'; 
import Route from './components/Route';
import Section from './components/Section';
import Header from './components/Header';
import Settings from './components/Settings';

import AboutMe from './components/AboutMe';
import Experience from './components/Experience';

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const theme = darkTheme ? "dark" : "light";
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [useEnglishLanguage, setUseEnglishLanguage] = useState(true);
  const [currentPage, setCurrentPage] = useState("/");

  const content = [
    {
      url: "/", title: useEnglishLanguage ? "Welcome!" : "Olá!", id: "home", 
      content: <AboutMe useEnglishLanguage={useEnglishLanguage} />
    },
    {
      url: "/about", title: useEnglishLanguage ? "About me" : "Sobre mim", id: "about", 
      content: <AboutMe useEnglishLanguage={useEnglishLanguage} />
    },
    {
      url: "/experience", title: useEnglishLanguage ? "Experience" : "Experiência", id: "experience", 
      content: <Experience useEnglishLanguage={useEnglishLanguage} />
    },
    {
      url: "/skills", title: useEnglishLanguage ? "Skills" : "Competências", id: "skills", 
      content: <AboutMe  useEnglishLanguage={useEnglishLanguage} />
    },
    {
      url: "/contact", title: useEnglishLanguage ? "Contact" : "Contacto", id: "contact", 
      content: <AboutMe useEnglishLanguage={useEnglishLanguage} />
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
  }, [currentPage]);

  const renderedRoutes = content.map((c) => {
      return (
        <Route path={c.url} key={`${c.id}-route`}>
            <Section title={c.title} key={`${c.id}-section`}>
              {c.content}
            </Section>
        </Route>
      );
    });
    
    return (
      <div className={`${theme}-theme`}>
      <nav className="navbar">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </nav>
      <div id="main">
        <div className="left-section">
          {renderedRoutes}
        </div>
        <div className="right-section">
          <Settings open={settingsOpen} onSettingsClick={setSettingsOpen} useEnglishLanguage={useEnglishLanguage} setUseEnglishLanguage={setUseEnglishLanguage} darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        </div>
      </div> 
      <footer></footer>
    </div>
  );
}

export default App;