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
                <div>
                    <div className="bg-white p-6 rounded shadow">
                        <h1 className="text-2xl font-bold">{profile.user.firstName + ' ' + profile.user.lastName}</h1>
                        <h2 className="text-xl text-gray-600">{profile.summary}</h2>
                        <p className="mt-2">{profile.headline}</p>
                    </div>
                    <div className="experiences">
                        <h2>Experiences</h2>
                        {profile.experiences.map((experience, index) => (
                            <div key={index}>
                                <h3>{experience.jobTitle} at {experience.companyName}</h3>
                                <p>Location: {experience.location}</p>
                                <p>Start Date: {new Date(experience.startDate).toLocaleDateString()}</p>
                                <p>End Date: {new Date(experience.endDate).toLocaleDateString()}</p>
                            </div>
                        ))}
                    </div>
                    <div className="educations">
                        <h2>Educations</h2>
                        {profile.educations.map((education, index) => (
                            <div key={index}>
                                <h3>{education.school}</h3>
                                <p>Degree: {education.degree}</p>
                                <p>Field of Study: {education.filedOfStudy}</p>
                                <p>Start Date: {new Date(education.startDate).toLocaleDateString()}</p>
                                <p>End Date: {new Date(education.endDate).toLocaleDateString()}</p>
                            </div>
                        ))}
                    </div>
                    <div className="skills">
                        <h2>Skills</h2>
                        {profile.skills.map((skill, index) => <p key={index}>{skill.name}</p>)}
                    </div>
                </div>
                
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
};

export default UserProfilePage;
