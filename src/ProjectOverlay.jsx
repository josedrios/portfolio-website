import * as React from 'react';
import Info from './info.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ProjectOverlay({isOverlayVisible, closeOverlay}) {
    return (
        <div id='project-overlay' className={`${isOverlayVisible ? 'slide' : 'hide-overlay'}`}>
            <button id='close-overlay-button' onClick={closeOverlay}>
                <FontAwesomeIcon className='icon' icon={faXmark} />
            </button>
            <table>
                <thead>
                <tr>
                    <th>Project</th>
                    <th id='date-col'>Date</th>
                    <th className='hide-overlay-col'>Skills</th>
                </tr>
                </thead>
                <tbody>
                {Info.projects.map((project,index) => (
                    <tr key={index}>
                    <td>
                        <a>
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        </a>
                        &nbsp;&nbsp;
                        {project.title}
                    </td>
                    <td className='td-middle'>{project.date}</td>
                    <td className='td-middle hide-overlay-col'>{project.skills}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProjectOverlay
