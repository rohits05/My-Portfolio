import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <div className='experience'>
    {/* <div className='blur blur4' style={ {background: '#ABF1FF94'}}></div> */}
    <div className='achievement'>
        <div className='circle'>2+</div>
        <span>years</span>
        <span>Experience</span>
    </div>

    <div className='achievement'>
        <div className='circle'>12+</div>
        <span>completed</span>
        <span>Projects</span>
    </div>

    <div className='achievement' >
        <div className='circle'>2+</div>
        <span>companies</span>
        <span>Work</span>      
    </div>
    {/* <div className='blur blur3' style={{ background: 'var(--purple)'}}></div> */}
    </div>
    
  )
}

export default Experience