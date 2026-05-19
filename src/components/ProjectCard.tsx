import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import type { Project } from '../types';
import '../../styles/Projects.css';

const ProjectCard = ({ 
  title, 
  year, 
  description, 
  techStack, 
  stats, 
  links, 
  featured 
}: Project) => {
  return (
    <div className={`project-card ${featured ? 'featured' : ''}`}>
      <div className="card-header">
        <span className="project-year">{year}</span>
        <h3 className="project-title">{title}</h3>
      </div>

      <p className="project-description">{description}</p>

      {/* Impact Stats - The proof of "High Stakes" work */}
      {stats && stats.length > 0 && (
        <div className="project-stats">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Tech Stack - Flex container to prevent "blobs" */}
      <div className="tech-stack">
        {techStack.map((tech: string) => (
          <span key={tech} className="tech-pill">
            {tech}
          </span>
        ))}
      </div>

      {/* Links - Separated from tags for better hierarchy */}
      <div className="project-links">
        {links && links.length > 0 ? (
          links.map(link => (
            <a 
              key={link.label} 
              href={link.url} 
              target="_blank" 
              rel="noreferrer" 
              className="project-link"
            >
              {link.label.toLowerCase() === 'github' ? <FaGithub /> : <FiExternalLink />}
              {link.label}
            </a>
          ))
        ) : (
          featured && (
            <span className="internal-lock">
              Proprietary System • Internal Access Only
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default ProjectCard;