import * as React from 'react';
import './styles/main.scss';
import resume from './Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUpRightFromSquare, faBars, faClipboard, faClipboardCheck, faCoffee, faCopy, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGit, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

const aboutMe = "Hello, I am Jose and I enjoy building things that I can deliver to the real world. My obsession for programming began when I joined the Robotics Club in high school and was surrounded by intellectual, innovative minds with the same goal in mind, to build. This would ignite my desire to go down the computer science path and be a part of a field that constantly evolves and shapes the future. "
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

const faqContent = [
  {
    question: "What is the purpose of this platform?",
    answer:   "The primary purpose of this platform is to connect users with resources and tools that help improve productivity, collaboration, and overall efficiency in their personal and professional lives. We offer a wide range of services, from project management tools to community-driven knowledge-sharing, all designed to support various industries and interests."
  },
  {
    question: "How can I reset my password?",
    answer:   "If you've forgotten your password or want to reset it, simply go to the login page and click on the 'Forgot Password?' link. You will be prompted to enter your registered email address, and we'll send you instructions on how to reset your password securely. Make sure to check your spam or junk folders if you don't see the email within a few minutes."
  },
  {
    question: "What is the refund policy for premium memberships?",
    answer:   "We offer a 30-day money-back guarantee for all premium memberships. If you're unsatisfied with the service during this period, you can request a full refund by contacting our support team. Beyond the 30-day window, refunds are generally not provided, but exceptions can be made in certain circumstances, such as technical issues or billing errors."
  },
  {
    question: "How can I contact customer support?",
    answer:   "You can reach our customer support team via multiple channels. For immediate assistance, you can use our live chat feature on the website during business hours. Alternatively, you can send an email to support@ourplatform.com, or call us at (123) 456-7890. We aim to respond to all queries within 24 hours on business days."
  },
  {
    question: "Is my data secure on this platform?",
    answer:   "We take data security very seriously. Our platform uses advanced encryption technologies to ensure that your data is protected both at rest and during transmission. We also regularly update our systems and undergo security audits to protect against unauthorized access and data breaches. Your privacy is our top priority."
  },
  {
    question: "Can I upgrade my subscription plan at any time?",
    answer:   "Yes, you can upgrade your subscription plan at any time from your account settings. Once upgraded, your new features will be available immediately, and your billing will be adjusted accordingly. If you're on a free plan, you'll only be charged once you confirm the upgrade, and the pricing will depend on the plan you choose."
  },
  {
    question: "What integrations are available with this platform?",
    answer:   "Our platform offers integrations with a wide variety of third-party services, including popular tools like Google Drive, Slack, Zoom, and Trello. These integrations are designed to streamline your workflow, allowing you to seamlessly collaborate, manage tasks, and share resources across platforms. You can manage integrations in your account settings."
  }
];


function App() {
  const [mousePosition, setMousePosition] = React.useState({
      x: 0,
      y: -1000,
    }
  );

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

  const handleCopyText = (hideID, showID) => {
    const email = "josederios@outlook.com";
    const initialIcon = document.getElementById(hideID);
    const checkIcon = document.getElementById(showID);
  
    navigator.clipboard.writeText(email)
      .then(() => {
        initialIcon.style.opacity = "0";
        checkIcon.style.opacity = "1";
        setTimeout(() => {
          initialIcon.style.opacity = "1";
          checkIcon.style.opacity = "0"
        }, 1000)
      })
      .catch((err) => {
        console.log("TEXT COPY ERROR:", err);
      });
  };
  
  const handleScroll = (e,targetID) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetID);
    const offset = 30;
    const elementPosition = targetElement.offsetTop;
    const offsetPosition = elementPosition - offset;

    window.scroll({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }

  const handleMailTo = (event) => {
    event.preventDefault();
    window.location.href = 'mailto:josederios@outlook.com';
  };

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
            <h1 class='fullname-title' id='shortname'>Jose Rios</h1>
            <h2 id='job-title'>Web&nbsp;Developer & Software&nbsp;Engineer</h2>
          </div>
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
            <a href={resume} download>
              <FontAwesomeIcon className="icon" icon={faFile} title='Resume'/>
            </a>
          </div>
        </header>
        <main id="content-container">
          <div className='content-item' id='about-me-section'>
            <h1 id='about-me' className='content-item-header'>About Me</h1>
            <p className='content-item-body'>{aboutMe}</p>
          </div>
          <div id='project-section' className='content-item'>
            <h1 className='content-item-header' id='project-content-header'>Projects</h1>
            <div className='content-item-body' id='project-item-container'>
            {projects.map((project, index) => (
              <div className="project-item" key={index}>
                <div className='project-header-container'>
                  <a href="#" id='project-icon-container'>
                    <h1 className="project-header">{project.title}</h1>
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
          <button id='view-all-projects'>View All Projects</button>
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
          <div id='faq-section' className='content-item'>
            <h1 className='content-item-header'>FAQ</h1>
            <div id='faq-container'>
              {faqContent.map((faqContent, index) => (
                <div className="faq-pair" key={index}>
                    <h1 className='question-header'>{faqContent.question}</h1>
                    <div className='answer-header'>{faqContent.answer}</div>
                </div>
              ))}
            </div>
          </div>
          <footer id="copyright-section">&copy; Jose Rios. All Rights Reserved</footer>
        </main>
      </div>

    </>
  )
}

export default App