import React from 'react';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();  // Gets the current year for the copyright notice

    return (
        <footer style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                © {year} LinkedIn Clone. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
