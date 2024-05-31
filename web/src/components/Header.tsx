import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header style={{ background: '#f8f9fa', padding: '10px 20px', boxShadow: '0 2px 4px rgba(0,0,0,.1)' }}>
            <nav>
                <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <li>
                        <Link to="/" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>LinkedIn Clone</Link>
                    </li>
                    <li>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <Link to="/posts/new" style={{ textDecoration: 'none', color: 'black' }}>New Post</Link>
                            <Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}>My Profile</Link>
                            <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>Login</Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
