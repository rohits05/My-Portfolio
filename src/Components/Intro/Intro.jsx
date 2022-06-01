import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
// import Floating from '../FloatingDiv/Floating';
import FloatingDiv from '../FloatingDiv/Floating';
import Crown from '../../img/crown.png'
import GlassImoji from '../../img/glassesimoji.png'
import ThumbUp from '../../img/thumbup.png'
// import {motion} from 'framer-motion'



const Intro = () => {

    // const transition = {duration: 2, type: 'spring'}
  return (
    <div className='intro'>
     <div className='i-left'>
         <div className='i-name'>
             <span>Hy! I Am</span>
             <span>Rohit Shaw</span>
             <span>FrontEnd Developer with intermediate level of experience in web designing and development, producting the Quality work</span>
         </div>

         <button className='button i-button'>Hire me</button>

         <div className='i-icons'>
             <img src={Github} alt="" />
             <img src={LinkedIn} alt="" />
             <img src={Instagram} alt="" />
         </div>
     </div>
     <div className='i-right'>
         <img src={Vector1} alt="" />
         <img src={Vector2} alt="" />
         <img src={Boy} alt="" />
         <img
         
       

          src= {GlassImoji} alt=""/>
         <div style={ {top: '-4%', left: '69%' }}>
             <FloatingDiv image={Crown} txt1='Web' txt2='Developer'
             />
         </div>

         <div style={{top: '18rem', left: '6rem'}}>
             <FloatingDiv image={ThumbUp} txt1='Design' txt2='Award'
             />
         </div>

         {/* blur divs */}
         <div className='blur' style={{background: "rgb(236 210 255)"}}></div>

         <div className='blur' style={{background: "#C1F5FF", top: '17rem', width: '21rem',
         height: '11rem', left: '-9rem'}}></div>
         
     </div>
     </div>
  )
}

export default Intro