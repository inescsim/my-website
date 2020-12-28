import React, { useState, useEffect } from 'react';
import './App.scss'; 
import Route from './components/Route';
import Section from './components/Section';
import Header from './components/Header';

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const theme = darkTheme ? "dark" : "light";
  const [useEnglishlanguage, setUseEnglishLanguage] = useState(true);
  const [currentPage, setCurrentPage] = useState("/");

  const content = [
    {
      url: "/", title: useEnglishlanguage ? "Welcome!" : "Olá!", id: "home",
      content: useEnglishlanguage ? ["My name is Inês and this is my website."] : ["O meu nome é Inês e este é o meu site."]
    },
    {
      url: "/about", title: useEnglishlanguage ? "About me" : "Sobre mim", id: "about",
      content: useEnglishlanguage ? ["CONTENT."] : ["CONTENT."]
    },
    {
      url: "/experience", title: useEnglishlanguage ? "Experience" : "Experiência", id: "experience",
      content: useEnglishlanguage ? ["CONTENT."] : ["CONTENT."]
    },
    {
      url: "/skills", title: useEnglishlanguage ? "Skills" : "Competências", id: "skills",
      content: useEnglishlanguage ? ["CONTENT."] : ["CONTENT."],
    },
    {
      url: "/contact", title: useEnglishlanguage ? "Contact" : "Contacto", id: "contact",
      content: useEnglishlanguage ? ["CONTENT."] : ["CONTENT."]
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
            <Section title={c.title} key={`${c.id}-section`} id={c.id}>
                {c.content}
            </Section>
        </Route>
      );
  });

  return (
    <div className={`${theme}-theme`}>
      <nav className="navbar">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </nav>
      <div id="main">
        <div className="left-section">
          {renderedRoutes}
        </div>
        <div className="right-section"></div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;