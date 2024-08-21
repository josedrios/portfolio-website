import * as React from 'react';
import './styles.scss'

//Handlers

function App() {
  return (
    <div>
      <NameHeader/>
    </div>
  )
}

const NameHeader = () => (
  <div >
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

export default App