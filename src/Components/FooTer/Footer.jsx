import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png'
import Insta from  '@iconscout/react-unicons/icons/uil-instagram'
import Fb from  '@iconscout/react-unicons/icons/uil-facebook'
import Github from  '@iconscout/react-unicons/icons/uil-github'


const Footer = () => {
  return (
    <div className='footer'>
        <img src={wave} style={{width: '100%'}} alt=''/>
        <div className='footer-content'>
            <span>carpediem212045@gmail.com</span>
            <div className='f-icon'>
                <Insta color='white' size='3rem' />
                <Fb color='white' size='3rem' />
                <Github color='white' size='3rem' />
            </div>
        </div>
    </div>
  )
}

export default Footer