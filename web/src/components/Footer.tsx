import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white text-center p-4 mt-8">
            <div className="container mx-auto px-4">
                <ul className="flex justify-center space-x-4 mb-2">
                    <li><a href="/about" className="hover:text-gray-300">About</a></li>
                    <li><a href="/careers" className="hover:text-gray-300">Careers</a></li>
                    <li><a href="/privacy" className="hover:text-gray-300">Privacy</a></li>
                    <li><a href="/terms" className="hover:text-gray-300">Terms</a></li>
                </ul>
                <p className="text-xs">
                    © {new Date().getFullYear()} LinkedIn Clone. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;