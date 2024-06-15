import React from 'react';
import logo from '../assets/linkedin_logo.png';  // Ensure the logo path is correct

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="/" className="flex items-center">
                    <img src={logo} alt="LinkedIn Logo" className="h-8" />
                    <span className="text-xl font-semibold text-blue-600 ml-3">
            LinkedIn
          </span>
                </a>
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="/home" className="text-gray-600 hover:text-gray-800">Home</a></li>
                        <li><a href="/network" className="text-gray-600 hover:text-gray-800">My Network</a></li>
                        <li><a href="/jobs" className="text-gray-600 hover:text-gray-800">Jobs</a></li>
                        <li><a href="/messaging" className="text-gray-600 hover:text-gray-800">Messaging</a></li>
                        <li><a href="/notifications" className="text-gray-600 hover:text-gray-800">Notifications</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
