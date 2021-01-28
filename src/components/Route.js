import { useState, useEffect } from 'react';

const Route = ({ path, setOnHomePage, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    const onLocationChange = () => {
        setCurrentPath(window.location.pathname);
        window.scrollTo({top: 0, behavior: 'smooth'});
        setOnHomePage(window.location.pathname === "/"); 
    };

    useEffect(() => {
        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, []);

    return currentPath === path ? children : null;
};

export default Route;