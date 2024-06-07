import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import profileAPI from '../api/profileAPI';
import UserProfileBrief from '../components/UserProfileBrief';
import PostCard from '../components/PostCard';

const UserProfilePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [profile, setProfile] = useState<any>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const data = await profileAPI.getProfileById(id);
            setProfile(data);
        };
        fetchProfile();
    }, [id]);

    if (!profile) return <div>Loading...</div>;

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
