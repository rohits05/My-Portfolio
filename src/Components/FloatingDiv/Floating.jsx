import React from 'react'
import './Floating.css'

const FloatingDiv = ({image, txt1 , txt2}) => {
  return (
    <div className='floatingdiv'>
      {/* <img src={Crown} alt=""/>
      <img src={GlassImoji} alt=""/> */}
      <img src={image} alt=""/>
      <span>
        {txt1} <br/> {txt2}
      </span>
    </div>
  )
}

export default FloatingDiv