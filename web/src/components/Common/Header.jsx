import React from 'react';
import './Header.module.css';

function Header() {
    return (
        <header className="header">
            <img src="/assets/linkedin_logo.png" alt="LinkedIn Logo" className="logo" />
            <nav>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/new-post">New Post</a></li>
                    <li><a href="/profile">Profile</a></li>
                </ul>
            </nav>
            <button className="logout-button">Logout</button>
        </header>
    );
}

export default Header;
