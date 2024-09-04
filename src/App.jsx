import * as React from 'react';
import './styles/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCoffee, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGit, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function App() {
  const [mousePosition, setMousePosition] = React.useState({
      x: 0,
      y: -1000,
    }
  );
  console.log(mousePosition);

  React.useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })

    }
    window.addEventListener("mousemove", mouseMove)
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  return (
    <>
      <div 
        style={{
          position: 'fixed',
          left: `${mousePosition.x - 200}px`,
          top: `${mousePosition.y - 200}px`,
        }} 
        className="gradient-bubble"
      />

      <div id='layout-container'>
        <header id="header-container">
          <div>
            <h1 class='fullname-title' id='longname'>Jose De Jesus Rios</h1>
            <h1 class='fullname-title' id='shortname'>Jose D. Rios</h1>
            <h2 id='job-title'>Web&nbsp;Developer & Software&nbsp;Engineer</h2>
          </div>
          <nav>
            <h3>
              <span id='index-one' >01</span> About Me
            </h3>
            <h3>
              <span>02</span> Projects
            </h3>
            <h3>
              <span>03</span> Contact
            </h3>
            <h3>
              <span>04</span> FAQ
            </h3>
          </nav>
          <div id='links-section'>
            <a href="">
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
            <a href="">
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </a>
            <a href="">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
            </a>
            <a href="">
              <FontAwesomeIcon className="icon" icon={faFile} />
            </a>
          </div>
        </header>
        <main id="content-container">
          <div className='content-item'>
            <h1 className='content-item-header'>About Me</h1>
            <p className='content-item-body'>Welcome to my <span className='bold-section'>website</span>! This is a placeholder "About Me" paragraph created specifically for testing purposes. I'm currently tweaking the CSS, layout, and other design elements, so the <span className='bold-section'>content</span> here is purely fictional. Imagine this space describing my hobbies, professional background, and passions—but for now, it's just text to see how everything looks and functions. Feel free to ignore this text as I continue to refine the overall look and feel of the site. Thanks for your patience during this testing phase! -Written by AI</p>
          </div>
          <div className='content-item'>
            <h1 className='content-item-header'>Projects</h1>
            <div className='content-item-body' id='project-item-container'>
              <div className="project-item">
                <h1 className="project-header">Portfolio Website</h1>
                <p className="project-skills">Skills: React / Javascript / CSS</p>
                <p className="project-summary">This project is a web application that allows users to create and manage personal to-do lists with real-time updates using React and Firebase. It features user authentication, task prioritization</p>
              </div>
              <div className="project-item">
                <h1 className="project-header">Portfolio Website</h1>
                <p className="project-skills">Skills: React / Javascript / CSS</p>
                <p className="project-summary">This project is a web application that allows users to create and manage personal to-do lists with real-time updates using React and Firebase. It features user authentication, task prioritization</p>
              </div>
              <div className="project-item">
                <h1 className="project-header">Portfolio Website</h1>
                <p className="project-skills">Skills: React / Javascript / CSS</p>
                <p className="project-summary">This project is a web application that allows users to create and manage personal to-do lists with real-time updates using React and Firebase. It features user authentication, task prioritization</p>
              </div>
            </div>
          </div>
          <div className='content-item'>
            <h1 className='content-item-header'>Contact</h1>
            <p className='content-item-body'>Paragraph</p>
          </div>
          <div className='content-item'>
            <h1 className='content-item-header'>FAQ</h1>
            <p className='content-item-body'>Script Like Structure</p>
          </div>
        </main>
      </div>

    </>
  )
}

export default App