import React from 'react';

const NavigationBar: React.FC = () => {
    return (
        <nav className="bg-gray-800 text-white p-3">
            <ul className="flex justify-evenly">
                <li><a href="/home" className="hover:text-gray-300">Home</a></li>
                <li><a href="/network" className="hover:text-gray-300">Network</a></li>
                <li><a href="/jobs" className="hover:text-gray-300">Jobs</a></li>
                <li><a href="/messages" className="hover:text-gray-300">Messages</a></li>
                <li><a href="/notifications" className="hover:text-gray-300">Notifications</a></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
