import * as React from 'react';

function Navbar({handleScroll}) {
    return (
        <nav>
            <h3>
            <a href="#content-container">
                <span id='index-one' >01</span> About Me
            </a>
            </h3>
            <h3>
            <a href="#project-section" onClick={(e) => handleScroll(e, 'project-section')}>
                <span>02 Projects</span>
            </a>
            </h3>
            <h3>
            <a href="#contact-item-container" onClick={(e) => handleScroll(e, 'contact-item-container')}>
                <span>03 Contact</span>
            </a>
            </h3>
            <h3>
            <a href="#faq-section" onClick={(e) => handleScroll(e, 'faq-section')}>
                <span>04 FAQ</span>
            </a>
            </h3>
        </nav>
    )
}
export default Navbar