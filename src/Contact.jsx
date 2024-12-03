import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faClipboard, faClipboardCheck, } from '@fortawesome/free-solid-svg-icons';

function Contact ({handleCopyText}) {
    return (
        <div className='content-item' id='contact-item-container'>
            <h1 id='contact-section' className='content-item-header'>Contact</h1>
            <div className="contact-info-item">
                <div className='contact-item-header'>Email: </div>
                <div className="contact-item-content">
                  <div id='email-contact-container' onClick={() => handleCopyText('copy-icon-contact', 'check-icon-contact')}>
                    josederios<br id="responsive-email-snap"/>@outlook.com
                    <FontAwesomeIcon className='icon' id='copy-icon-contact' icon={faClipboard} />
                    <FontAwesomeIcon className="icon" id='check-icon-contact' icon={faClipboardCheck} title='Email'/>
                  </div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className='contact-item-header'>LinkedIn: </div>
                <div className="contact-item-content">
                  <a  href="https://www.linkedin.com/in/jose-rios-3b9505254/" target="_blank" rel="noopener noreferrer">
                    Jose Rios
                    <FontAwesomeIcon id='contact-icon-external' className='icon' icon={faArrowUpRightFromSquare} />
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className='contact-item-header'>Github: </div>
                <div className="contact-item-content">
                  <a href="https://github.com/josedrios" target="_blank" rel="noopener noreferrer">
                    josedrios
                    <FontAwesomeIcon id='contact-icon-external' className='icon' icon={faArrowUpRightFromSquare} />
                  </a>
                </div>
            </div>
        </div>
    )
}

export default Contact