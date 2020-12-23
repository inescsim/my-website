import React from 'react';
import Link from './Link';
import '../App.css'; 

const Header = () => {
    return (
        <React.Fragment>
            <ul className="nav-links">
                {
                    window.location.pathname !== "/" ?
                    <li className="nav-item">
                        <Link href="/">Home</Link>
                    </li>
                    : null
                }
                <li className="nav-item">
                    <Link href="/about">About me</Link>
                </li>
                <li className="nav-item">
                    <Link href="/experience">Experience</Link>
                </li>
                <li className="nav-item">
                    <Link href="/skills">Skills</Link>
                </li>
                <li className="nav-item">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </React.Fragment>
    );
};

export default Header;