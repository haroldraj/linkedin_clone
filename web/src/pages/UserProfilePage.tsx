import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import profileAPI from '../api/profileAPI';
import UserProfileBrief from '../components/UserProfileBrief';
import PostCard from '../components/PostCard';

const UserProfilePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [profile, setProfile] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) {
            setError('Invalid profile ID');
            return;
        }

        const fetchProfile = async () => {
            try {
                const data = await profileAPI.getProfileById(id);
                setProfile(data);
            } catch (err) {
                setError('Failed to fetch profile');
            }
        };

        fetchProfile();
    }, [id]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <UserProfileBrief profile={profile} />
            <h2>Posts</h2>
            {profile.posts.map((post: any) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default UserProfilePage;
