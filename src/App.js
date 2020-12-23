import React, { useState } from 'react';
import './App.scss'; 
import Route from './components/Route';
import Section from './components/Section';
import Header from './components/Header';
// import Dropdown from './components/Dropdown';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const theme = darkTheme ? "dark" : "light";
  const [useEnglishlanguage, setUseEnglishLanguage] = useState(true);

  return (
    <div className={`${theme}-theme`}>
      <nav className="navbar">
        <Header />
        <div className="toggleWrapper">
          <input type="checkbox" className="dn" id="dn" onClick={() => setDarkTheme(!darkTheme)}/>
          <label htmlFor="dn" className="toggle" id="theme">
            <span className="toggle__handler">
              <span className="crater crater--1"></span>
              <span className="crater crater--2"></span>
              <span className="crater crater--3"></span>
            </span>
            <span className="star star--1"></span>
            <span className="star star--2"></span>
            <span className="star star--3"></span>
            <span className="star star--4"></span>
            <span className="star star--5"></span>
            <span className="star star--6"></span>
          </label>
        </div>
        <div className="toggleWrapper">
          <input type="checkbox" className="dn" id="flag" onClick={() => setUseEnglishLanguage(!useEnglishlanguage)}/>
          <label htmlFor="flag" className="toggle" id="flags">
            <span className="toggle__handler">
            </span>
          </label>
        </div>
      </nav>
      <div className="content">
        <Route path="/">
          <h3>{useEnglishlanguage ? "Welcome!" : "Bem vindo!"}</h3>
          <p>{useEnglishlanguage ? "My name is Inês and this is my website." : "O meu nome é Inês e este é o meu site."}</p>
        </Route>
        <Route path="/about">
            <Section title={useEnglishlanguage ? "About me" : "Sobre mim"}></Section>
        </Route>
        <Route path="/experience">
            <Section title={useEnglishlanguage ? "Experience" : "Experiência"}></Section>
        </Route>
        <Route path="/skills">
            <Section title="Skills"></Section>
        </Route>
        <Route path="/contact">
            <Section title={useEnglishlanguage ? "Contact" : "Contacto"}></Section>
        </Route>
      </div>
    </div>
  );
}

export default App;