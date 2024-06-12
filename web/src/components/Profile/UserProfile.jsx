import React, { useEffect, useState } from 'react';
import { Card, Button, Image, Container, Row, Col } from 'react-bootstrap';
import ProfileService from './ProfileService';
import './UserProfile.module.css';
import EditProfile from './EditProfile';

const UserProfile = ({ userProfile, setUserProfile }) => {
    const [editMode, setEditMode] = useState(false);

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

    return (
        <Container className="profile-container">
            <Card className="profile-card">
                <Card.Body>
                    <div className="profile-header">
                        <Image src={userProfile.image} roundedCircle className="profile-image" />
                        <div className="profile-details">
                            <Card.Title>{userProfile.name} {userProfile.surname}</Card.Title>
                            <Card.Text>{userProfile.title}</Card.Text>
                            <Card.Text>{userProfile.location}</Card.Text>
                        </div>
                        <Button variant="outline-primary" onClick={() => setEditMode(true)}>Edit Profile</Button>
                    </div>
                </Card.Body>
            </Card>
            {editMode && <EditProfile userProfile={userProfile} setUserProfile={setUserProfile} setEditMode={setEditMode} />}
        </Container>
    );
};

export default UserProfile;
