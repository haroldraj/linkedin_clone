import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import ProfileService from './ProfileService';
import './EditProfile.module.css';

const EditProfile = ({ userProfile, setUserProfile, setEditMode }) => {
    const [profileData, setProfileData] = useState(userProfile);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await ProfileService.updateProfile(userProfile.id, profileData);
            if (response.status === 200) {
                setUserProfile(response.data);
                setEditMode(false);
            }
        } catch (error) {
            console.error('Error updating profile', error);
        }
    };

    return (
        <Modal show={true} onHide={() => setEditMode(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={profileData.name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formSurname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="surname"
                            value={profileData.surname}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={profileData.title}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            type="text"
                            name="location"
                            value={profileData.location}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default EditProfile;
