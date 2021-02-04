import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './App.scss'; 
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Content from './components/Content';

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
      </Switch>
    </HashRouter>
  );
}

export default App;