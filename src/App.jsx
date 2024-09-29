import * as React from 'react';
import './styles/main.scss';
import resume from './Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUpRightFromSquare, faBars, faCircleXmark, faClipboard, faClipboardCheck, faCoffee, faCopy, faFile, faFileCircleXmark, faLink, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGit, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

const aboutMe = "Hello, I am Jose and I enjoy building things that I can deliver to the real world. My obsession for programming began when I joined the Robotics Club in high school and was surrounded by intellectual, innovative minds with the same goal in mind, to build. This would ignite my desire to go down the computer science path and be a part of a field that constantly evolves and shapes the future. "

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
  },
  {
    title: "Demon's Souls",
    skills: "Java, Spring Boot, SQL",
    date: "February 2009",
    summary: "Demon’s Souls is the game that laid the groundwork for FromSoftware’s renowned 'Souls' series. Known for its punishing difficulty, deep combat mechanics, and atmospheric world, the game introduced players to a challenging experience filled with strategic battles and intricate level design. Its influence can be seen in the entire Soulsborne genre that followed."
  },
  {
    title: "Dark Souls",
    skills: "C++, Unreal Engine, OpenGL",
    date: "September 2011",
    summary: "Dark Souls is celebrated for its unforgiving gameplay, intricate world-building, and deep lore. Players navigate a dark, interconnected world filled with challenging enemies and complex combat mechanics. Its focus on exploration, player choice, and the high risk-reward combat system set the standard for modern action RPGs."
  },
  {
    title: "Dark Souls II",
    skills: "JavaScript, React, Node.js",
    date: "March 2014",
    summary: "Dark Souls II continues the series' tradition of difficult combat, obscure lore, and immersive environments. The game is known for its flexible build system, variety of weapons, and challenging boss fights. While it deviated slightly in design philosophy, it remains a core part of the Souls series with memorable locations and enemies."
  },
  {
    title: "Dark Souls III",
    skills: "Python, Flask, SQLAlchemy",
    date: "March 2016",
    summary: "Dark Souls III is the final chapter in the Dark Souls trilogy, combining elements from its predecessors with faster gameplay and refined mechanics. The game’s interconnected world, atmospheric storytelling, and intense combat are complemented by stunning visuals and a haunting score, making it a fitting conclusion to the series."
  },
  {
    title: "Bloodborne",
    skills: "Ruby, Rails, PostgreSQL",
    date: "March 2015",
    summary: "Bloodborne is set in a dark, Gothic world where players hunt nightmarish creatures. Known for its fast-paced combat and aggressive playstyle, the game stands out with its unique setting and Lovecraftian themes. Its atmospheric design, complex lore, and intense difficulty have made it a beloved classic among fans."
  },
  {
    title: "Sekiro: Shadows Die Twice",
    skills: "C#, Unity, Game Design",
    date: "March 2019",
    summary: "Sekiro: Shadows Die Twice offers a departure from traditional Souls games with its focus on precision combat and stealth. Set in a reimagined Sengoku-era Japan, players take on the role of a shinobi battling powerful foes. The game is known for its challenging parry system, unique resurrection mechanic, and rewarding boss battles."
  },
  {
    title: "Halo: Reach",
    skills: "C++, DirectX, Network Programming",
    date: "September 2010",
    summary: "Halo: Reach is a prequel to the original Halo series, showcasing the fall of the planet Reach through the eyes of Noble Team. Known for its engaging campaign, refined multiplayer modes, and deep customization options, Reach is celebrated for its emotional storytelling and polished gameplay, marking a high point in the Halo franchise."
  },
  {
    title: "Red Dead Redemption",
    skills: "C#, Unreal Engine, Game Physics",
    date: "May 2010",
    summary: "Red Dead Redemption is an open-world action-adventure game set in the dying days of the American frontier. Players control former outlaw John Marston as he seeks to bring justice to his past. Known for its immersive world, compelling story, and deep characters, Red Dead Redemption is widely considered one of the greatest games of all time."
  },
  {
    title: "Red Dead Redemption 2",
    skills: "Python, Flask, SQLAlchemy",
    date: "October 2018",
    summary: "Red Dead Redemption 2 is a prequel to the first game, following Arthur Morgan, a member of the Van der Linde gang. With its stunning open world, rich storytelling, and intricate character development, RDR2 sets a new benchmark for realism and narrative depth in gaming, offering a profound look at the outlaw lifestyle."
  },
  {
    title: "The Last of Us",
    skills: "JavaScript, React, Node.js",
    date: "June 2013",
    summary: "The Last of Us is a post-apocalyptic action-adventure game following Joel and Ellie as they navigate a world ravaged by a fungal infection. Praised for its gripping story, deep character development, and emotional impact, it’s considered one of the best narrative-driven games ever made, blending stealth, combat, and exploration."
  },
  {
    title: "The Last of Us Part II",
    skills: "TypeScript, Redux, Express.js",
    date: "June 2020",
    summary: "The Last of Us Part II continues Ellie’s journey, delivering an emotionally intense story of revenge, love, and loss. With improved gameplay mechanics, stunning graphics, and a complex narrative that challenges players' perspectives, it pushes the boundaries of storytelling in video games, cementing its place as a modern classic."
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    skills: "Alchemy, Adventure, Action, Fantasy",
    date: "April 2009",
    summary: "Fullmetal Alchemist: Brotherhood is highly praised for its deep plot, memorable characters, and moral complexities. It follows the Elric brothers on a quest to restore their bodies using alchemy, blending action with emotional storytelling and philosophical themes about sacrifice and human nature."
  },
  {
    title: "Steins;Gate",
    skills: "Time Travel, Sci-Fi, Thriller, Mystery",
    date: "April 2011",
    summary: "Steins;Gate combines mind-bending time travel with intense character development and suspenseful storytelling. It uniquely handles the consequences of altering timelines, creating an engaging and emotional experience with plenty of twists and turns."
  },
  {
    title: "Cowboy Bebop",
    skills: "Space Western, Action, Adventure, Drama",
    date: "April 1998",
    summary: "Cowboy Bebop is celebrated for its stylish blend of genres, memorable characters, and jazz-infused soundtrack. The show follows a group of bounty hunters in space, exploring deep themes like loneliness and redemption with a unique, melancholic vibe."
  },
  {
    title: "Bleach",
    skills: "Supernatural, Action, Shinigami, Adventure",
    date: "October 2004",
    summary: "Bleach is known for its extensive universe, dynamic fight scenes, and an intriguing mix of samurai and supernatural elements. Following Ichigo Kurosaki as he takes on the responsibilities of a Soul Reaper, it balances intense battles with character growth."
  },
  {
    title: "JoJo's Bizarre Adventure",
    skills: "Action, Adventure, Supernatural, Fantasy",
    date: "October 2012",
    summary: "JoJo's Bizarre Adventure stands out for its unique art style, creative combat strategies, and a multigenerational story filled with eccentric characters. Its mix of supernatural powers, humor, and bizarre storytelling makes it a cult favorite."
  },
  {
    title: "Your Lie in April",
    skills: "Music, Drama, Romance, Slice of Life",
    date: "October 2014",
    summary: "Your Lie in April beautifully combines music with an emotional narrative about love, loss, and personal growth. Its stunning animation and moving soundtrack elevate the story of a piano prodigy overcoming his past traumas with the help of a spirited violinist."
  },
  {
    title: "Mob Psycho 100",
    skills: "Supernatural, Action, Comedy, Psychological",
    date: "July 2016",
    summary: "Mob Psycho 100 combines stunning animation, unique storytelling, and deep character exploration. The show follows Mob, a powerful psychic trying to live a normal life, blending explosive action with heartfelt moments about self-acceptance and personal growth."
  },
  {
    title: "Samurai Champloo",
    skills: "Action, Adventure, Samurai, Historical",
    date: "May 2004",
    summary: "Samurai Champloo blends historical samurai culture with modern elements like hip-hop music, creating a fresh and unique experience. Its dynamic fight scenes, likable characters, and episodic storytelling make it a standout anime that defies conventional tropes."
  },
  {
    title: "Gurren Lagann",
    skills: "Mecha, Action, Adventure, Sci-Fi",
    date: "April 2007",
    summary: "Gurren Lagann is renowned for its over-the-top action, inspirational themes, and larger-than-life battles. It tells the story of humanity's fight against oppressive forces with a message of limitless potential, making it both an epic and motivational journey."
  },
  {
    title: "God of War (2005)",
    skills: "C++, DirectX, Game Design",
    date: "March 2005",
    summary: "God of War (2005) is an action-adventure game that redefined the hack-and-slash genre with its intense combat, epic boss battles, and Greek mythology-inspired story. Players control Kratos, a Spartan warrior on a quest for revenge against the gods. Its engaging gameplay and cinematic presentation set a new standard for action games."
  },
  {
    title: "God of War III",
    skills: "Java, Spring Boot, JPA",
    date: "March 2010",
    summary: "God of War III is the epic conclusion to Kratos’ journey through Greek mythology, offering brutal combat, breathtaking set pieces, and stunning visuals. The game’s large-scale battles against gods and titans, combined with a satisfying combat system, make it a pinnacle of action-adventure gaming on the PlayStation 3."
  },
  {
    title: "God of War (2018)",
    skills: "Python, Django, GraphQL",
    date: "April 2018",
    summary: "God of War redefines the action-adventure genre with its gripping story, cinematic presentation, and brutal combat. Set in Norse mythology, the game follows Kratos and his son Atreus on a deeply personal journey. Its combination of stunning visuals, innovative gameplay, and emotional depth makes it a must-play PlayStation classic."
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
                  <th id='date-col'>Date</th>
                  <th className='hide-overlay-col'>Skills</th>
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
                    <td className='td-middle hide-overlay-col'>{project.skills}</td>
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