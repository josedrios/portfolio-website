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
      <div style={{
        position: 'fixed',
        left: `${mousePosition.x - 150}px`,
        top: `${mousePosition.y - 150}px`,
      }} className="gradient-bubble"/>
      <div className='container' id='layout-container'>
        <header className='container' id="header-container">

        </header>
        <main className='container' id="content-container">

        </main>
      </div>
    </>
  )
}

export default App