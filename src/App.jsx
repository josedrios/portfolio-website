import * as React from 'react';
import './styles/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUpRightFromSquare, faBars, faCoffee, faCopy, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGit, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const aboutMe = "Welcome to my website! This is a placeholder About Me paragraph created specifically for testing purposes. I'm currently tweaking the CSS, layout, and other design elements, so the content here is purely fictional. Imagine this space describing my hobbies, professional background, and passions—but for now, it's just text to see how everything looks and functions. Feel free to ignore this text as I continue to refine the overall look and feel of the site. Thanks for your patience during this testing phase! -Written by AI"
// NOTE: When using bold text for a phrase, reference bold-text id (SASS)

const projects = [
  {
    title: "Lord of The Rings",
    skills: "React, JS, CSS, HTML",
    date: "August 2024",
    summary: "The Lord of the Rings is amazing because it masterfully combines epic storytelling with deep, immersive world-building. J.R.R. Tolkien created an entire universe, complete with its own history, languages, and cultures, making Middle-earth feel incredibly real and alive. The characters are rich and complex, from the bravery of Frodo and Sam to the wisdom of Gandalf and the redemption of Aragorn. The themes of friendship, sacrifice, and the struggle between good and evil resonate on a universal level. Its blend of adventure, myth, and human emotion makes it a timeless masterpiece that continues to inspire generations."
  },
  {
    title: "One Piece",
    skills: "C++, VMWare, VS Code",
    date: "May 2022",
    summary: "One Piece is amazing because it combines thrilling adventure, deep emotional storytelling, and a vast, richly detailed world. Eiichiro Oda masterfully balances humor, action, and drama as Monkey D. Luffy and his crew pursue their dreams across the seas. Each character is uniquely developed with their own compelling backstories and motivations, making the Straw Hat Pirates feel like a true family. The overarching themes of friendship, freedom, and perseverance resonate deeply with fans. With its intricate world-building, epic battles, and heartfelt moments, One Piece remains a beloved masterpiece in anime and manga."
  },
  {
    title: "Gears of War",
    skills: "Java, IntelliJ",
    date: "Sept 2024",
    summary: "Gears of War is amazing because it revolutionized the third-person shooter genre with its intense, cover-based combat system and gritty, cinematic storytelling. The game’s dark, post-apocalyptic setting, combined with visceral action, creates an immersive and adrenaline-pumping experience. The characters, like Marcus Fenix and Dom Santiago, are compelling and relatable, offering emotional depth amidst the chaos of war. The cooperative gameplay, whether in campaign or multiplayer modes, adds a strategic layer that makes teamwork crucial. Its iconic chainsaw gun and larger-than-life enemies make Gears of War a standout in gaming history."
  },
]

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
              <span>
                <span id='index-one' >01</span> About Me
              </span>
            </h3>
            <h3>
              <span>02 Projects</span>
            </h3>
            <h3>
              <span>03 Contact</span>
            </h3>
            <h3>
              <span>04 FAQ</span>
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
            <p className='content-item-body'>{aboutMe}</p>
          </div>
          <div className='content-item'>
            <h1 className='content-item-header' id='project-content-header'>Projects</h1>
            <div className='content-item-body' id='project-item-container'>
            {projects.map((project, index) => (
              <div className="project-item" key={index}>
                <div className='project-header-container'>
                  <h1 className="project-header">{project.title}</h1>
                  <a href="#" id='project-icon-container'>
                    <FontAwesomeIcon className='icon' icon={faArrowRight} />
                  </a>
                </div>
                <p className="project-date">{project.date}</p>
                <p className="project-skills">Skills: {project.skills}</p>
                <p className="project-summary">{project.summary}</p>
              </div>
            ))}
            </div>
          </div>
          <div className='content-item' id='contact-item-container'>
            <h1 className='content-item-header'>Contact</h1>
              <div className="contact-info-item">
                <div className='contact-item-header'>Email: </div>
                <div className="contact-item-content">
                  <div>
                    josederios@outlook.com
                    <FontAwesomeIcon className='icon' icon={faCopy} />
                  </div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className='contact-item-header'>LinkedIn: </div>
                <div className="contact-item-content">
                  <a href="">
                    Jose Rios
                    <FontAwesomeIcon id='contact-icon-external' className='icon' icon={faArrowUpRightFromSquare} />
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className='contact-item-header'>Github: </div>
                <div className="contact-item-content">
                  <a href="">
                    josedrios
                    <FontAwesomeIcon id='contact-icon-external' className='icon' icon={faArrowUpRightFromSquare} />
                  </a>
                </div>
              </div>
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