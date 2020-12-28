import React from 'react';

const Link = ({ href, currentPage, onLinkClick, children}) => {
    const onClick = (event) => {
        if(event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);

        onLinkClick(href);
    };

    return <a onClick={onClick} href={href} className={`underline ${href === currentPage ? "active" : ""}`}>{children}</a>
};

export default Link;