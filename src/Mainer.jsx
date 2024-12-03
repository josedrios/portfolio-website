import * as React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ProjectOverlay from './ProjectOverlay';
import Contact from './Contact';
import FAQ from './FAQ';

function Mainer() {
    const [isOverlayVisible, setOverlayVisibility] = React.useState(false);
    const openOverlay = () => {
        setOverlayVisibility(true);
        document.body.style.overflow = 'hidden';
    }
    const closeOverlay = () => {
        document.body.style.overflow = '';
        setOverlayVisibility(false);
    }

    return(
        <main id="content-container">
            <AboutMe/>
            <Projects/>
            <button id='view-all-projects' onClick={openOverlay}>View All Projects</button>
            <ProjectOverlay isOverlayVisible={isOverlayVisible} closeOverlay={closeOverlay}/>
            <Contact/>
            <FAQ/>
          <footer id="copyright-section">&copy; Jose Rios. All Rights Reserved</footer>
        </main>
    )
} 
export default Mainer