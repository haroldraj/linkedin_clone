import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import profileAPI from '../api/profileAPI';  // Ensure you have this API utility to fetch user profiles

const UserProfilePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();  // Extracting the user ID from the URL
    const [profile, setProfile] = useState<any>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                // @ts-ignore
                const fetchedProfile = await profileAPI.getProfileById(id);
                setProfile(fetchedProfile);
            } catch (error) {
                console.error('Failed to fetch profile:', error);
            }
        };

        fetchProfile();
    }, [id]);

    return (
        <div className="container mx-auto px-4">
            {profile ? (
                <div className="bg-white p-6 rounded shadow">
                    <h1 className="text-2xl font-bold">{profile.name}</h1>
                    <h2 className="text-xl text-gray-600">{profile.title}</h2>
                    <p className="mt-2">{profile.bio}</p>
                </div>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
};

export default UserProfilePage;
