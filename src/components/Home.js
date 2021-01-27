import React from 'react';
import Link from './Link';

const Home = () => {
    return (
        <div className="welcome-section">
            <div className="welcome-image"></div>
            <h2 className="welcome-text">Hello,<br></br> I'm Inês.</h2>
            <div className="welcome-subsection">
                <p>
                    I'm a software developer based in London, UK.<br></br>
                    <Link href="/about">Learn more about me <i className="small chevron circle right icon"></i></Link>
                </p>
            </div>
        </div>
    );
};

export default Home;