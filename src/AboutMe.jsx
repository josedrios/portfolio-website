import * as React from 'react'
import Info from './info.json'

function AboutMe() {
    return (
        <div className='content-item' id='about-me-section'>
            <h1 id='about-me' className='content-item-header'>About Me</h1>
            <p className='content-item-body'>{Info.aboutme}</p>
        </div>
    )
}
export default AboutMe