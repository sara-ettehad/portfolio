import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ title, projects }) => {
    return (
        <section className="project-list">
            <h2>{title}</h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />))
                }
            </div>
        </section>
    );
};

export default ProjectList;