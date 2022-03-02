import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home, AboutMe, Content, NotFound } from "./components";

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