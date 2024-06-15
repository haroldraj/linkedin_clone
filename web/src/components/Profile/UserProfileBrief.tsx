import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './UserProfile.module.css';

interface UserProfileBriefProps {
    userProfile: {
        id: string;
        name: string;
        surname: string;
        title: string;
        location: string;
        image: string;
    };
}

const UserProfileBrief: React.FC<UserProfileBriefProps> = ({ userProfile }) => {
    return (
        <Card className="profile-brief-card">
            <Card.Body className="d-flex align-items-center">
                <Image src={userProfile.image} roundedCircle className="profile-brief-image" />
                <div className="ml-3">
                    <Card.Title>{userProfile.name} {userProfile.surname}</Card.Title>
                    <Card.Text>{userProfile.title}</Card.Text>
                    <Card.Text>{userProfile.location}</Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
};

export default UserProfileBrief;
