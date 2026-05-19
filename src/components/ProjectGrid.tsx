import { useState } from 'react';
import { PROJECTS, FILTER_CATEGORIES } from '../constants';
import ProjectCard from './ProjectCard';
import type { FilterCategory, Project } from '../types';
import '../../styles/Projects.css';

const ProjectGrid = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((project: Project) => project.tags.includes(activeFilter));

  return (
    <section className="projects" id="projects">
      {/* Structural alignment matching the exact pattern used in Skills section */}
      <p className="section-eyebrow">Selected Projects</p>
      
      <div className="projects-header-group">
        <div className="filter-bar">
          {FILTER_CATEGORIES.map((cat) => (
            <button 
              key={cat.value}
              className={`filter-pill ${activeFilter === cat.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;