
import { ExperienceInfo } from '../../../../utils/profile-info';
import ExperienceCard from './ExperienceCard';
import './ExperienceSection.css'

interface Props
{
    experiences: ExperienceInfo[];
}

export default function ExperienceSection({ experiences }: Props)
{
    return (
        <div className="experiences">
            <h2>Experiences</h2>
            {
                experiences && experiences.map((experience) => (
                    <ExperienceCard key={experience.id} experience={experience} />
                ))
            }
        </div>
    )
}
