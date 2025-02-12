import * as React from 'react';
import './styles/main.scss';

import Header from './Header';
import Mainer from './Mainer';
import ProjectOverlay from './ProjectOverlay';

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

  const [isOverlayVisible, setOverlayVisibility] = React.useState(false);

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
        className="gradient-bubble hide-on-touch"
      />
      
      <div id='layout-container'>
        <Header/>
        <Mainer openOverlay={openOverlay} />
        <ProjectOverlay isOverlayVisible={isOverlayVisible} closeOverlay={closeOverlay}/>
        <div 
          id='non-contactable-layer' 
          className={`${isOverlayVisible ? 'on' : ''}`} 
          onClick={() => closeOverlay()}
        />
      </div>
    </>
  )
}

export default App