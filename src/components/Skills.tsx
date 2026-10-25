import {SKILL_GROUPS} from '../constants'
import '../../styles/Skills.css'
import type { ReactNode } from 'react';
import { Terminal, Layout, Database, Cloud, Settings, Brain } from 'lucide-react';

const iconMap: Record<string, ReactNode> = {
  Backend: <Terminal size={20} />,
  Frontend: <Layout size={20} />,
  Database: <Database size={20} />,
  Cloud: <Cloud size={20} />,
  Tooling: <Settings size={20} />,
  Concepts: <Brain size={20} />
};

const Skills = () => {
  return (
    <section className="skills" id="about">
      <h2 className="section-eyebrow">Skills</h2>
      <div className="skills-grid">
        {SKILL_GROUPS.map((group) => (
          <div className="skill-card" key={group.label}>
            {/* Display the Category Header once using the Display font */}
            {iconMap[group.label]}
            <h3 className="skill-label">{group.label}</h3>

            {/* Loop through the skills within this category */}
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;