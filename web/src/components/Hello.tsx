import React from 'react';

const Hello: React.FC<{ name: string }> = ({ name }) => {
    return (
        <div className="p-4 shadow rounded bg-blue-100">
            <h1 className="text-lg text-blue-800">Hello, {name}!</h1>
            <p>Welcome to your professional community.</p>
        </div>
    );
};

export default Hello;
