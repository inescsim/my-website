import React from 'react';

const Home = () => {
    return (
        <div className="welcome-section">
            <div className="yellow-rectangle"></div>
            <h2 className="welcome-text">Hello,<br></br> I'm Inês.</h2>
            <div className="welcome-subsection">
                <p>
                    I'm a software developer, based in London, UK.<br></br>
                    <a href="/about" className="home-about-btn">Learn more about me <i className="chevron circle right icon"></i></a>
                </p>
            </div>
        </div>
    );
};

export default Home;