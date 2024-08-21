import * as React from 'react';
import './styles.scss'

//Handlers

function App() {
  return (
    <div id='app-container'>
      <NameHeader/>
      <div id="body-container">
        <JobHeader/>
        <div id='info-container'>
          <InfoSection/>
          <div id='side-bar-container'>
            <Catalogue/>
            <Copyright/>
          </div>
        </div>
      </div>
    </div>
  )
}

const NameHeader = () => (
  <div id='name-header-container'>
    <h1 id='firstname' className='vertical-text'>
      <span>J</span>
      <span>O</span>
      <span>S</span>
      <span>E</span>
    </h1>
    <h1 id='lastname' className='vertical-text'>
      <span>R</span>
      <span>I</span>
      <span>0</span>
      <span>S</span>
    </h1>
  </div>
)

const JobHeader = () => (
  <div id="job-header-container">
    <h1>Web Developer & </h1>
    <h1>Software Engineer</h1>
  </div>
)
const InfoSection = () => (
  <div id="info-section-container">
    info section
  </div>
)

const Catalogue = () => (
  <div id="catalogue-container">
    catalogue
  </div>
)

const Copyright = () => (
  <div id="copyright-container">
    copyright
  </div>
)

export default App