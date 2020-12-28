import React from 'react';
import Link from './Link';
import '../App.scss'; 

const Header = ({ currentPage, setCurrentPage }) => {
    return (
        <React.Fragment>
            <ul className="nav-links">
                <li className="nav-item">
                    <Link href="/" currentPage={currentPage} onLinkClick={setCurrentPage}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link href="/about" currentPage={currentPage} onLinkClick={setCurrentPage}>About me</Link>
                </li>
                <li className="nav-item">
                    <Link href="/experience" currentPage={currentPage} onLinkClick={setCurrentPage}>Experience</Link>
                </li>
                <li className="nav-item">
                    <Link href="/skills" currentPage={currentPage} onLinkClick={setCurrentPage}>Skills</Link>
                </li>
                <li className="nav-item">
                    <Link href="/contact" currentPage={currentPage} onLinkClick={setCurrentPage}>Contact</Link>
                </li>
            </ul>
        </React.Fragment>
    );
};

export default Header;