import * as React from 'react'
import Info from './info.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Projects() {
    return (
        <div id='project-section' className='content-item'>
            <h1 className='content-item-header' id='project-content-header'>Projects</h1>
            <div className='content-item-body' id='project-item-container'>
                {Info.projects.slice(0,4).map((project, index) => (
                    <div className="project-item" key={index}>
                        <div className='project-header-container'>
                            <a href={project.link} id='project-icon-container' target="_blank" rel="noopener noreferrer">
                                <h1 className="project-header">{project.title}</h1>
                                <FontAwesomeIcon className='icon' icon={faArrowRight} />
                            </a>
                        </div>
                        <p className="project-date">{project.date}</p>
                        <p className="project-skills">Skills: {project.skills}</p>
                        <p className="project-summary">{project.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Projects 