import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import profileAPI from '../../api/profileAPI';
import { ProfileInfo } from '../../utils/profile-info';
import './UserProfilePage.css';
import ExperienceSection from './components/experience/ExperienceSection';
import ActivitySection from './components/activity/ActivitySection';
import { USER_AVATAR_URL } from '../../utils/user-avatar';

const UserProfilePage: React.FC = () =>
{
    const { id = '' } = useParams<{ id: string }>();
    const [profile, setProfile] = useState<ProfileInfo>();

    useEffect(() =>
    {
        const fetchProfile = async () =>
        {
            try
            {
                const fetchedProfile = await profileAPI.getProfileById(id);
                setProfile(fetchedProfile);
            } catch (error)
            {
                console.error('Failed to fetch profile:', error);
            }
        };

        fetchProfile();
    }, [id]);

    return (
        <div className='profile'>
            {profile ? (
                <div className='profile_body'>
                    <div className='profile_top'>
                        <img src="https://img.freepik.com/free-vector/abstract-digital-science-fiction-matrix-like-background_587448-971.jpg" alt="profile_banner" />
                        <div className="profile_header">
                            <img className='profile_avatar' src={USER_AVATAR_URL} alt="profile_avatar" />
                            <h2 className='profile_name'>{profile.user.firstName + ' ' + profile.user.lastName}</h2>
                            <h4 className='profile_summary'>{profile.summary}</h4>
                            <p>{profile.headline}</p>
                        </div>

                    </div>
                    <ActivitySection profileId={id} />
                    <ExperienceSection experiences={profile.experiences} />

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
                        {profile.skills.map((skill, index) => (
                            <div className="skill">
                                <span className='skill_hash'>•</span>
                                <p key={index}>{skill.name}</p>
                            </div>

                        ))}
                    </div>

                </div>

            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
};

export default UserProfilePage;
