import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './App.scss'; 
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Content from './components/Content';
import NotFound from './components/NotFound';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <HashRouter>
      <Switch>
        <Route 
          path="/" exact
          render={(props) => (
            <Content {...props}
              darkTheme={darkTheme}
              setDarkTheme={setDarkTheme}
              background="home-background"
              componentToDisplay={<Home/>}
              photoCreditAuthor="Maria Stewart"
              photoID="EKrOmnkwABg"
            />
          )}
        />
        <Route 
          path="/about"
          render={(props) => (
            <Content {...props}
              darkTheme={darkTheme}
              setDarkTheme={setDarkTheme}
              componentToDisplay={<AboutMe/>}
            />
          )}
        />
        <Route 
          path="*"
          render={(props) => (
            <Content {...props}
              darkTheme={darkTheme}
              setDarkTheme={setDarkTheme}
              background="not-found-background"
              componentToDisplay={<NotFound/>}
              photoCreditAuthor="Paul Hanaoka"
              photoID="LcAZcVWsCIo"
            />
          )}
        />
      </Switch>
    </HashRouter>
  );
}

export default App;