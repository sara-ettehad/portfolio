import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h1>{project.title}</h1>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <p>{project.using}</p>
            <Link to={project.link}>View Project</Link>
        </div>
    );
};

export default ProjectCard;