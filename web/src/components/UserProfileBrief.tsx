import React from 'react';

interface UserProfileBriefProps {
    profile: {
        name: string;
        bio: string;
        currentJobTitle: string;
        industry: string;
        summary: string;
        headline: string;
        website: string;
        openForWork: boolean;
    };
}

const UserProfileBrief: React.FC<UserProfileBriefProps> = ({ profile }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <h2>{profile.name}</h2>
            <p><strong>Headline:</strong> {profile.headline}</p>
            <p><strong>Current Job Title:</strong> {profile.currentJobTitle}</p>
            <p><strong>Industry:</strong> {profile.industry}</p>
            <p><strong>Summary:</strong> {profile.summary}</p>
            <p><strong>Website:</strong> <a href={profile.website} target="_blank" rel="noopener noreferrer">{profile.website}</a></p>
            <p><strong>Open for Work:</strong> {profile.openForWork ? 'Yes' : 'No'}</p>
            <p>{profile.bio}</p>
        </div>
    );
};

export default UserProfileBrief;
