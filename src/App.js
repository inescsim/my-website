import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import './App.scss'; 
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Content from './components/Content';
import NotFound from './components/NotFound';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
      <Routes>
          <Route
              path="/"
              element={
                  <Content
                      darkTheme={darkTheme}
                      setDarkTheme={setDarkTheme}
                      background="home-background"
                      componentToDisplay={<Home/>}
                      photoCreditAuthor="Maria Stewart"
                      photoID="EKrOmnkwABg"
                  />
              }
          />
          <Route
              path="/about"
              element={
                  <Content
                      darkTheme={darkTheme}
                      setDarkTheme={setDarkTheme}
                      componentToDisplay={<AboutMe/>}
                  />
              }
          />
          <Route
              path="*"
              element={
                  <Content
                      darkTheme={darkTheme}
                      setDarkTheme={setDarkTheme}
                      background="not-found-background"
                      componentToDisplay={<NotFound/>}
                      photoCreditAuthor="Paul Hanaoka"
                      photoID="LcAZcVWsCIo"
                  />
              }
          />
      </Routes>
  );
}

export default App;