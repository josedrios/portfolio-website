import * as React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import FAQ from './FAQ';

function Mainer({openOverlay}) {
    return(
        <main id="content-container">
            <AboutMe/>
            <Projects/>
            <button id='view-all-projects' onClick={openOverlay}>View All Projects</button>
            <Contact/>
            <FAQ/>
            <footer id="copyright-section">&copy; Jose Rios. All Rights Reserved</footer>
        </main>
    )
} 
export default Mainer