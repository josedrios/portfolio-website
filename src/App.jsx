import * as React from 'react';
import './styles/main.scss';
import resume from './Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUpRightFromSquare, faBars, faCircleXmark, faClipboard, faClipboardCheck, faCoffee, faCopy, faFile, faFileCircleXmark, faLink, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGit, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

const aboutMe = "Hello, I am Jose and I enjoy building things that I can deliver to the real world. My obsession for programming began when I joined the Robotics Club in high school and was surrounded by intellectual, innovative minds with the same goal in mind, to build. This would ignite my desire to go down the computer science path and be a part of a field that constantly evolves and shapes the future. "
// NOTE: When using bold text for a phrase, reference bold-text id (SASS)

const projects = [
  {
    title: "Lord of The Rings",
    skills: "React, JS, CSS, HTML",
    date: "July 1954",
    summary: "The Lord of the Rings is amazing because it masterfully combines epic storytelling with deep, immersive world-building. J.R.R. Tolkien created an entire universe, complete with its own history, languages, and cultures, making Middle-earth feel incredibly real and alive. The characters are rich and complex, from the bravery of Frodo and Sam to the wisdom of Gandalf and the redemption of Aragorn. The themes of friendship, sacrifice, and the struggle between good and evil resonate on a universal level. Its blend of adventure, myth, and human emotion makes it a timeless masterpiece that continues to inspire generations."
  },
  {
    title: "One Piece",
    skills: "C++, VMWare, VS Code",
    date: "July 1997",
    summary: "One Piece is amazing because it combines thrilling adventure, deep emotional storytelling, and a vast, richly detailed world. Eiichiro Oda masterfully balances humor, action, and drama as Monkey D. Luffy and his crew pursue their dreams across the seas. Each character is uniquely developed with their own compelling backstories and motivations, making the Straw Hat Pirates feel like a true family. The overarching themes of friendship, freedom, and perseverance resonate deeply with fans. With its intricate world-building, epic battles, and heartfelt moments, One Piece remains a beloved masterpiece in anime and manga."
  },
  {
    title: "Gears of War",
    skills: "Java, IntelliJ",
    date: "November 2006",
    summary: "Gears of War is amazing because it revolutionized the third-person shooter genre with its intense, cover-based combat system and gritty, cinematic storytelling. The game’s dark, post-apocalyptic setting, combined with visceral action, creates an immersive and adrenaline-pumping experience. The characters, like Marcus Fenix and Dom Santiago, are compelling and relatable, offering emotional depth amidst the chaos of war. The cooperative gameplay, whether in campaign or multiplayer modes, adds a strategic layer that makes teamwork crucial. Its iconic chainsaw gun and larger-than-life enemies make Gears of War a standout in gaming history."
  },
  {
    title: "Assassin's Creed 2",
    skills: "Python, Django, SQL",
    date: "November 2009",
    summary: "Assassin’s Creed 2 is a standout in the series, praised for its rich narrative, engaging historical settings, and refined gameplay mechanics. Players follow the story of Ezio Auditore as he navigates Renaissance Italy, seeking vengeance and unraveling a larger conspiracy. The game’s open-world design, parkour movement, and stealth-based combat were revolutionary, providing players with a sense of freedom and immersion. Its blend of action, exploration, and historical intrigue makes Assassin’s Creed 2 a beloved classic in gaming."
  },
  {
    title: "Batman: Arkham Asylum",
    skills: "JavaScript, Node.js, MongoDB",
    date: "August 2009",
    summary: "Batman: Arkham Asylum set a new standard for superhero games with its gripping narrative, atmospheric setting, and groundbreaking combat system. Players step into the boots of Batman as he faces off against his greatest foes within the confines of Gotham’s infamous asylum. The game’s fluid free-flow combat, detective elements, and immersive environment create a truly authentic Batman experience. Arkham Asylum’s blend of stealth, action, and storytelling makes it a defining entry in the superhero genre."
  },
  {
    title: "Elden Ring",
    skills: "React, Redux, TypeScript",
    date: "February 2022",
    summary: "Elden Ring is an expansive action RPG that combines FromSoftware’s signature challenging combat with an open-world setting. Co-created by Hidetaka Miyazaki and George R.R. Martin, the game offers a richly detailed world filled with lore, challenging enemies, and epic boss battles. Players explore vast landscapes, discover secrets, and customize their character in an experience that is both punishing and rewarding. Elden Ring’s deep narrative, engaging gameplay, and breathtaking design have solidified it as a modern masterpiece."
  },
  {
    title: "Berserk",
    skills: "C#, .NET, SQL Server",
    date: "October 1989",
    summary: "Berserk is a dark fantasy manga that is lauded for its complex characters, intricate plot, and brutally beautiful artwork. Created by Kentaro Miura, it follows Guts, a lone warrior with a tragic past, as he battles against monstrous foes and his own inner demons. The series explores themes of betrayal, revenge, and the struggle for freedom, all set against a backdrop of medieval warfare. Berserk’s intense storytelling and detailed world-building make it one of the most influential works in the dark fantasy genre."
  },
  {
    title: "GTO (Great Teacher Onizuka)",
    skills: "Ruby, Rails, PostgreSQL",
    date: "June 1997",
    summary: "Great Teacher Onizuka (GTO) is a beloved manga and anime that follows the unconventional teaching methods of Eikichi Onizuka, a former gang member turned high school teacher. With humor, heart, and a rebellious spirit, Onizuka tackles the challenges of education, helping his students overcome their personal struggles. GTO blends comedy, drama, and social commentary, making it a unique and inspirational story about growth, friendship, and the power of a good teacher."
  },
  {
    title: "Call of Duty: Modern Warfare 3",
    skills: "Unity, C#, Game Design",
    date: "November 2011",
    summary: "Modern Warfare 3 is a first-person shooter that delivers a high-octane, action-packed experience. As a direct continuation of the Modern Warfare series, the game offers an intense campaign, robust multiplayer, and engaging Spec Ops missions. The game’s tight mechanics, immersive storytelling, and iconic moments solidified it as a fan-favorite in the Call of Duty franchise."
  },
  {
    title: "Hunter x Hunter",
    skills: "HTML, CSS, JavaScript",
    date: "March 1998",
    summary: "Hunter x Hunter is a critically acclaimed anime and manga known for its complex characters, intricate plot, and inventive battles. Created by Yoshihiro Togashi, it follows Gon Freecss, a young boy searching for his father, a legendary Hunter. The series is renowned for its deep world-building, unique power system (Nen), and intense story arcs. Its exploration of themes like friendship, ambition, and morality has made Hunter x Hunter a standout in the shounen genre."
  },
  {
    title: "Dr. Stone",
    skills: "Python, Flask, Data Science",
    date: "March 2017",
    summary: "Dr. Stone is a unique shounen series that combines science, adventure, and survival. It follows Senku Ishigami, a brilliant scientist who wakes up in a world where humanity has been petrified for thousands of years. Using his knowledge of science, he embarks on a mission to rebuild civilization from scratch. The series is celebrated for its educational approach, innovative problem-solving, and compelling characters. Dr. Stone’s blend of humor, science, and adventure makes it a refreshing and inspiring story."
  },
  {
    title: "Vagabond",
    skills: "React, GraphQL, TypeScript",
    date: "March 1999",
    summary: "Vagabond is a critically acclaimed manga that reimagines the life of Musashi Miyamoto, one of Japan’s most famous swordsmen. Created by Takehiko Inoue, the series is known for its breathtaking artwork, deep philosophical themes, and intense character development. Vagabond explores the journey of a warrior seeking purpose and self-understanding, set against the backdrop of feudal Japan. Its blend of action, introspection, and historical detail makes it a standout in samurai storytelling."
  },
  {
    title: "One Punch Man",
    skills: "Angular, TypeScript, Node.js",
    date: "June 2012",
    summary: "One Punch Man is a satirical superhero anime and manga that follows Saitama, a hero who can defeat any opponent with a single punch. Despite his overwhelming strength, Saitama struggles with the mundane aspects of heroism and the lack of a true challenge. The series is celebrated for its humor, stunning action scenes, and subversion of superhero tropes. One Punch Man’s unique blend of comedy, action, and existential musings makes it a standout in the genre."
  },
  {
    title: "Stray",
    skills: "Unity, C#, Game Design",
    date: "July 2022",
    summary: "Stray is a unique adventure game where players control a stray cat navigating a neon-lit, dystopian city inhabited by robots. The game combines platforming, puzzle-solving, and stealth elements, creating an immersive experience that captures the curiosity and agility of a cat. Its atmospheric world, engaging gameplay, and emotional storytelling make Stray a standout indie title."
  },
  {
    title: "Castle Crashers",
    skills: "C++, OpenGL, Game Development",
    date: "August 2008",
    summary: "Castle Crashers is a co-op beat 'em up game known for its vibrant hand-drawn art style, humorous tone, and addictive gameplay. Players battle their way through colorful levels, upgrading their characters, and taking on unique bosses. Its simple yet engaging mechanics, combined with a lighthearted art style, make Castle Crashers a fun and timeless multiplayer experience"
  }
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

  const [isOverlayVisible, setOverlayVisibility] = React.useState(false);

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

  const openOverlay = () => {
    setOverlayVisibility(true);
    document.body.style.overflow = 'hidden';
  }

  const closeOverlay = () => {
    document.body.style.overflow = '';
    setOverlayVisibility(false);
  }

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
            {projects.slice(0,5).map((project, index) => (
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
          <button id='view-all-projects' onClick={openOverlay}>View All Projects</button>
          <div id='project-overlay' className={`${isOverlayVisible ? 'slide' : 'hide-overlay'}`}>
            <button id='close-overlay-button' onClick={closeOverlay}>
              <FontAwesomeIcon className='icon' icon={faXmark} />
            </button>
            <table>
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Date</th>
                  <th>Skills</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project,index) => (
                  <tr key={index}>
                    <td>
                      {project.title}
                      &nbsp;
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon>
                    </td>
                    <td className='td-middle'>{project.date}</td>
                    <td className='td-middle'>{project.skills}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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