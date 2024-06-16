
import './ProfilePage.css';

export default function ProfilePage()
{
    return (
        <div className="profile-page">
            <div className="profile-header">
                <img src="profile-picture.jpg" alt="Profile" className="profile-picture" />
                <h2 className="profile-name">John Doe</h2>
                <p className="profile-title">Software Engineer at XYZ</p>
            </div>
            <div className="profile-body">
                <div className="profile-about">
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="profile-experience">
                    <h3>Experience</h3>
                    <div className="experience-item">
                        <h4>Software Engineer</h4>
                        <p>XYZ</p>
                        <p>Jan 2020 - Present</p>
                    </div>
                </div>
                <div className="profile-education">
                    <h3>Education</h3>
                    <div className="education-item">
                        <h4>Computer Science</h4>
                        <p>ABC University</p>
                        <p>2016 - 2020</p>
                    </div>
                </div>
            </div>
        </div>
    );
}