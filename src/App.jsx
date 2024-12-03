import * as React from 'react';
import './styles/main.scss';

import Header from './Header';
import Mainer from './Mainer';

function App() {

  {/* Cursor Tracking State/Function */}
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

  return (
    <>
      {/* Gradient Bubble Cursor */}
      <div 
        style={{
          position: 'fixed',
          left: `${mousePosition.x - 200}px`,
          top: `${mousePosition.y - 200}px`,
        }} 
        className="gradient-bubble"
      />
      
      <div id='layout-container'>
        <Header/>
        <Mainer/>
      </div>
    </>
  )
}

export default App