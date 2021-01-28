import React from 'react';
import Link from './Link';

const Home = () => {
    return (
        <React.Fragment>
            <div className="welcome-section-left">
                <h2 className="welcome-text">Hello,<br></br> I'm Inês.</h2>
                <div className="welcome-subsection">
                    <p>
                        I'm a software developer based in London, UK.<br></br>
                        <Link href="/about">Learn more about me <i className="small chevron circle right icon"></i></Link>
                    </p>
                </div>
            </div>
            <div className="welcome-section-right"></div>
        </React.Fragment>
    );
};

export default Home;