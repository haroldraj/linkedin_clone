import { EducationInfo } from "../../../../utils/profile-info";
import './EducationCard.css';

interface Props
{
    education: EducationInfo;
}

export default function ExperienceCard({ education }: Props)
{
    return (
        <div className="education-item">
            <div className="education-header">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/009/584/446/small_2x/3d-illustration-toga-hat-and-books-for-education-png.png" alt="School Logo" />
                <div>
                    <h3>{education.degree}</h3>
                    <p>{education.school}</p>
                    <p>{education.filedOfStudy}</p>
                    <p>From {education.startDate} To {education.endDate}</p>
                </div>
            </div>
        </div>
    )
}
