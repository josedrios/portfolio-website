import * as React from 'react';
import Title from './Title';
import Navbar from './Navbar';
import LinkSection from './LinkSection';

function Header() {
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

    return(
        <header id="header-container">
            <Title/>
            <Navbar handleScroll={handleScroll}/>
            <LinkSection/>
        </header>
    )
}

export default Header