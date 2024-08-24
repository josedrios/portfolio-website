import * as React from 'react';
import './styles/index.scss'

function App() {
  const [mousePosition, setMousePosition] = React.useState({
      x: 0,
      y: 0,
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
      <div style={{
        position: 'fixed',
        left: `${mousePosition.x - 200}px`,
        top: `${mousePosition.y - 200}px`,
      }} className="gradient-bubble"/>
    </>
  )
}

export default App