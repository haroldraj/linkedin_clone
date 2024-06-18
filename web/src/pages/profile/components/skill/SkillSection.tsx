import { SkillInfo } from "../../../../utils/profile-info"
import './SkillSection.css'

interface Props
{
    skills: SkillInfo[];
}

export default function SkillSection({skills}: Props)
{
  return (
      <div className="skills">
          <h2>Skills</h2>
          {skills && skills.map((skill) => (
              <div className="skill">
                  <span className='skill_hash'>•</span>
                  <p key={skill.id}>{skill.name}</p>
              </div>

          ))}
      </div>
  )
}
