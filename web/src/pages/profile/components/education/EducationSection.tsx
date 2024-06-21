import { EducationInfo } from "../../../../utils/profile-info";
import EducationCard from "./EducationCard";
import './EducationSection.css';

interface Props
{
    educations: EducationInfo[];
}

export default function EducationSection({ educations }: Props)
{
    return (
        <div className="educations">
            <div className="educations_header">
                <h2>Educations</h2>
            </div>
            {
                educations && educations.map((education) => (
                    <EducationCard key={education.id} education={education} />
                ))
            }
        </div>
    )
}
