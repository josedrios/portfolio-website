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

  {/* 'View All Projects' Overlay State/Functions */}
  const [isOverlayVisible, setOverlayVisibility] = React.useState(false);
  const openOverlay = () => {
    setOverlayVisibility(true);
    document.body.style.overflow = 'hidden';
  }
  const closeOverlay = () => {
    document.body.style.overflow = '';
    setOverlayVisibility(false);
  }
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

  {/* Text Copy Icon Acknowledgement Animation */}
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

  {/* Mailto Function */}
  const handleMailTo = (event) => {
    event.preventDefault();
    window.location.href = 'mailto:josederios@outlook.com';
  };

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
        <Header 
          handleScroll={handleScroll} 
          handleMailTo={handleMailTo}
        />
        <Mainer 
          isOverlayVisible={isOverlayVisible} 
          openOverlay={openOverlay} 
          closeOverlay={closeOverlay}
          handleCopyText={handleCopyText}
        />
      </div>
    </>
  )
}

export default App