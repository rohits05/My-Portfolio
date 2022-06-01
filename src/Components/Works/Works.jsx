import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebbok from '../../img/Facebook.png'

const Works = () => {
  return (
    <div className='works'>
        {/* left side*/}
        <div className='awesome'>
        <span>Work for All these</span>
        <span>Brands & Clients</span>
        <span>Q lamhe kharab karein, aa galti behisab karein.<br/>Do palki jo neend udi aa pure sarre <br/>khawab karein !
         Kya karne hai umron ke vaadyein, <br/>ye jo rehte hai rehne de aadhyein<br/>
        Do baar nhi ek baar sahi ek raat ki karle tu yaari</span>

        <button className='button s-button'>Hire me</button>
        <div className='blur s-blur1' style={ {background: '#ABF1FF94'}}></div>
        </div>

        {/* right siden*/}
        <div className='r-right'>
            <div className='e-mainCircle'>
                <div className='e-secCircle'>
                    <img src={Upwork} alt=""/>
                </div>

                <div className='e-secCircle'>
                    <img src={Fiverr} alt=""/>
                </div>

                <div className='e-secCircle'>
                    <img src={Amazon} alt=""/>
                </div>

                <div className='e-secCircle'>
                    <img src={Shopify} alt=""/>
                </div>

                <div className='e-secCircle'>
                    <img src={Facebbok} alt=""/>
                </div>
            </div>
            <div className='e-backCircle blueCircle'></div>
            <div className='e-backCircle yellowCircle'></div>
        </div>
    </div>
  )
}

export default Works