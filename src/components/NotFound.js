import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found-section">
            <h4>Well, you found the cat.</h4>
            <p>
                Unfortunately there's nothing else here.<br></br>
                <Link to="/">Go back to the home page.</Link> Or stay here - he doesn't mind.
            </p>
        </div>
    );
};

export default NotFound;