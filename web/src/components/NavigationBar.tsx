import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar: React.FC = () => {
    return (
        <nav style={{ background: '#e3f2fd', padding: '10px' }}>
            <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
                <li>
                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/posts/new" style={{ textDecoration: 'none', color: 'black' }}>
                        Create Post
                    </Link>
                </li>
                <li>
                    <Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}>
                        Profile
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
