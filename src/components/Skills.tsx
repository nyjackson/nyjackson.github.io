import {SKILL_GROUPS} from '../constants'
import '../../styles/Skills.css'
import { Terminal, Layout, Database, Cloud, Settings, Brain } from 'lucide-react';

const iconMap:Record<string, any> = {
  Backend: <Terminal size={16} />,
  Frontend: <Layout size={16} />,
  Database: <Database size={16} />,
  Cloud: <Cloud size={16} />,
  Tooling: <Settings size={16} />,
  Concepts: <Brain size={16} />
};

const Skills = () => {
  return (
    <section className="skills" id="about">
      <p className="section-eyebrow">Skills</p>
      <div className="skills-grid">
        {SKILL_GROUPS.map((group) => (
          <div className="skill-card" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }} key={group.label}>
            {/* Display the Category Header once using the Display font */}
            {iconMap[group.label]}
            <p 
              className="skill-label" 
              style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
            >
              {group.label}
            </p>

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