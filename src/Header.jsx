import * as React from 'react';
import Title from './Title';
import Navbar from './Navbar';
import LinkSection from './LinkSection';

function Header({handleScroll, handleMailTo}) {
    return(
        <header id="header-container">
            <Title/>
            <Navbar handleScroll={handleScroll}/>
            <LinkSection handleMailTo={handleMailTo}/>
        </header>
    )
}

export default Header