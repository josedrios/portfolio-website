import * as React from 'react';
import resume from './Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FaInstagram } from "react-icons/fa";

function LinkSection() {
    const handleMailTo = (event) => {
        event.preventDefault();
        window.location.href = 'mailto:josederios@outlook.com';
    };
    
    return (
        <div id='links-section'>
            <a href="https://github.com/josedrios" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="icon" icon={faGithub} title='Github'/>
            </a>
            <a href="https://www.linkedin.com/in/jose-rios-3b9505254/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="icon" icon={faLinkedin} title='LinkedIn'/>
            </a>
            <a onClick={handleMailTo} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon className="icon" id="envelope-icon" icon={faEnvelope} title="Email" />
            </a>
            <a href="https://www.instagram.com/jose.de.rios/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" id="ig-icon" icon="fa-brands fa-instagram" />
            </a>
            <a href={resume} download>
                <FontAwesomeIcon className="icon" icon={faFile} title='Resume'/>
            </a>
        </div>
    )
}
export default LinkSection