import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import profileAPI from '../api/profileAPI';  
import { ProfileInfo } from '../utils/profile-info';

const UserProfilePage: React.FC = () => {
    const { id = '' } = useParams<{ id: string }>();  
    const [profile, setProfile] = useState<ProfileInfo>(); 

    useEffect(() => {
        const fetchProfile = async () => {
            try {
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
                    <h1 className="text-2xl font-bold">{profile.user.firstName + ' ' + profile.user.lastName}</h1>
                    <h2 className="text-xl text-gray-600">{profile.summary}</h2>
                    <p className="mt-2">{profile.headline}</p>
                </div>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
};

export default UserProfilePage;
