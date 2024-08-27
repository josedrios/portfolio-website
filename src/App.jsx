import * as React from 'react';
import './styles/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGit, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function App() {
  const [mousePosition, setMousePosition] = React.useState({
      x: 0,
      y: -1000,
    }
  );
  console.log(mousePosition);

  const [isMouseOnScreen, setIsMouseOnScreen] = React.useState(true);

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
            <h1 id='fullname-title'>Jose De Jesus Rios</h1>
            <h2 id='job-title'>Web Developer & Software Engineer</h2>
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
              <FontAwesomeIcon className='icon' icon={faBars} />
            </a>
            <a href="">
              <FontAwesomeIcon className='icon' icon={faGithub} />
            </a>
            <a href="">
              <FontAwesomeIcon className='icon' icon={faLinkedin} />
            </a>
            <a href="">
              <FontAwesomeIcon className='icon' icon={faEnvelope} />
            </a>
          </div>
        </header>
        <main id="content-container">
          <div>
            1
          </div>
          <div>
            2
          </div>
          <div>
            3
          </div>
          <div>
            4
          </div>
        </main>
      </div>

    </>
  )
}

export default App