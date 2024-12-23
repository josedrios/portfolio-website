import * as React from 'react';
import Info from './info.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

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
                    <tr className='project-row' key={index}>
                        <td>
                            <a className='project-row-link' href="https://www.google.com/">{project.title}</a>
                        </td>
                        <td className='td-middle'>
                            <a href="https://www.google.com/">{project.date}</a>
                        </td>
                        <td className='td-middle hide-overlay-col'>
                            <a href="https://www.google.com/">{project.skills}</a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProjectOverlay
