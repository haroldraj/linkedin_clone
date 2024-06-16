import React from 'react';

interface UserProfileProps
{
    name: string;
    title: string;
    bio: string;
}

const UserProfileBrief: React.FC<UserProfileProps> = ({ name, title, bio }) =>
{
    return (
            <div className="bg-white shadow-lg rounded-lg p-4 m-4">
                <h3 className="text-xl text-gray-800 font-bold">{name}</h3>
                <h5 className="text-md text-gray-600">{title}</h5>
                <p className="text-gray-600 text-sm mt-2">
                    {bio}
                </p>
            </div>
    );
};

export default UserProfileBrief;
