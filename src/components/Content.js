import React from 'react';
import { Link } from 'react-router-dom';

const Content = ({ darkTheme, setDarkTheme, background, componentToDisplay, photoCreditAuthor, photoID }) => {
    const theme = darkTheme ? "dark" : "light";
    const themeIcon = darkTheme ? "sun" : "moon";

    return (
        <div className={`${theme}-theme ${theme}-${background}`}>
            <nav className="navbar">
                <Link to="/"><i className="home icon rotate"></i></Link>
                <i className={`${themeIcon} icon rotate`} onClick={() => setDarkTheme(!darkTheme)}></i>
            </nav>
            <div className="main-section">
              <div className="main-section-content">
                {componentToDisplay}
              </div>
              <div className="right-margin"></div>
              <div className="left-margin"></div>
          </div>
          <footer>
            { photoCreditAuthor ? 
              <p>Photo by <a href={`https://unsplash.com/photos/${photoID}`} target="_blank" rel="noopener noreferrer">{photoCreditAuthor}</a></p>
            : "" }
          </footer>
        </div>
    );
};

export default Content;