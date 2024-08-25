import * as React from 'react';
import './styles/main.scss'

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
            <h3>01 About Me</h3>
            <h3>02 Projects</h3>
            <h3>04 Undecided</h3>
            <h3>03 Contact</h3>
          </nav>
          <div>Potential Link Div</div>
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