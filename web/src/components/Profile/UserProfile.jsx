import React, { useEffect, useState } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import ProfileService from './ProfileService';
import UserProfileBrief from './UserProfileBrief';
import PostCard from './PostCard';
import './UserProfile.module.css';
import EditProfile from './EditProfile';

const UserProfile = ({ userProfile, setUserProfile }) => {
    const [editMode, setEditMode] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await ProfileService.getProfile(userProfile.id);
                if (response.status === 200) {
                    setUserProfile(response.data);
                }
            } catch (error) {
                console.error('Error fetching profile', error);
            }
        };
        fetchProfile();
    }, [userProfile.id, setUserProfile]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await ProfileService.getPostsByUser(userProfile.id);
                if (response.status === 200) {
                    setPosts(response.data);
                }
            } catch (error) {
                console.error('Error fetching posts', error);
            }
        };
        fetchPosts();
    }, [userProfile.id]);

    const handleEdit = (postId) => {
        // Handle edit post logic
    };

    const handleDelete = async (postId) => {
        try {
            await ProfileService.deletePost(postId);
            setPosts(posts.filter(post => post.id !== postId));
        } catch (error) {
            console.error('Error deleting post', error);
        }
    };

    return (
        <Container className="profile-container">
            <UserProfileBrief userProfile={userProfile} />
            <Button variant="outline-primary" onClick={() => setEditMode(true)}>Edit Profile</Button>
            {editMode && (
                <Modal show={true} onHide={() => setEditMode(false)}>
                    <EditProfile userProfile={userProfile} setUserProfile={setUserProfile} setEditMode={setEditMode} />
                </Modal>
            )}
            <h3 className="mt-4">Posts</h3>
            {posts.map(post => (
                <PostCard key={post.id} post={post} onEdit={handleEdit} onDelete={handleDelete} />
            ))}
        </Container>
    );
};

export default UserProfile;
