import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <React.Fragment>
            <div className="welcome-section-left">
                <h2 className="welcome-text">Hello,<br></br> I'm Inês.</h2>
                <div className="welcome-subsection">
                    <p>
                        I'm a software developer based in London, UK.<br></br>
                        <Link to="/about">Learn more about me <i className="small chevron circle right icon"></i></Link>
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;