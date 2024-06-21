import { ExperienceInfo } from "../../../../utils/profile-info";
import './ExperienceCard.css';

interface Props
{
    experience: ExperienceInfo;
}

export default function ExperienceCard({ experience }: Props)
{
    return (
        <div className="experience-item">
            <div className="experience-header">
                <img src="https://cdn-icons-png.flaticon.com/512/4091/4091968.png" alt="Company Logo" />
                <div>
                    <h3>{experience.jobTitle}</h3>
                    <p>{experience.companyName}</p>
                    <p>{experience.location}</p>
                    <p>From {experience.startDate} To {experience.endDate}</p>
                </div>
            </div>
        </div>
    )
}
