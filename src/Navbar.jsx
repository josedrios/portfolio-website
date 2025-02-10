import { useEffect } from "react";

function Navbar({handleScroll}) {
    useEffect(() => {
        const sections = document.querySelectorAll("content-item");
        const navlinks = document.querySelectorAll("nav-link");

        // const observer = new IntersectionObserver
    })
    
    return (
        <nav>
            <h3>
            <a href="#content-container" className='nav-link'>
                <span id='index-one' >01</span> About Me
            </a>
            </h3>
            <h3>
            <a href="#project-section" className='nav-link' onClick={(e) => handleScroll(e, 'project-section')}>
                <span>02 Projects</span>
            </a>
            </h3>
            <h3>
            <a href="#contact-item-container" className='nav-link' onClick={(e) => handleScroll(e, 'contact-item-container')}>
                <span>03 Contact</span>
            </a>
            </h3>
            <h3>
            <a href="#faq-section" className='nav-link' onClick={(e) => handleScroll(e, 'faq-section')}>
                <span>04 FAQ</span>
            </a>
            </h3>
        </nav>
    )
}
export default Navbar