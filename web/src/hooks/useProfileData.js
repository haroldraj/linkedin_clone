import { useState, useEffect } from 'react';
import ProfileService from '../components/Profile/ProfileService';

const useProfileData = (userId) => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await ProfileService.getProfile(userId);
                if (response.status === 200) {
                    setProfile(response.data);
                } else {
                    setError('Error fetching profile');
                }
            } catch (error) {
                setError('Error fetching profile');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [userId]);

    return { profile, loading, error, setProfile };
};

export default useProfileData;
