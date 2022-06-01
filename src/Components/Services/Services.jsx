import React from 'react'
import './Services.css'
import HearEmoji from '../../img/heartemoji.png'
import glass from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
// import Resume from './resume.pdf'

const Services = () => {
  return (
    <div className='services'>
        {/* left side */}
        <div className='awesome'>
        <span>My Awesome</span>
        <span>Services</span>
        <span>Q lamhe kharab karein, aa galti behisab karein.<br/>Do palki jo neend udi aa pure sarre khawab karein !</span>
        {/* <a href={Resume} download> </a> */}
        <button className='button s-button'>Download Cv</button>
        <div className='blur s-blur1' style={ {background: '#ABF1FF94'}}></div>
        </div>

        {/* right side */}
        <div className='cards'>
            {/* First Card */}
            <div style={{ left: '38rem'}}>
                <Card
                emoji = {HearEmoji}
                heading = {'Design'}
                details = {'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
                />
            </div>

            {/* Second Card */}
            <div style={{ top: '8rem', left: '9rem'}}>
            <Card
                emoji = {glass}
                heading = {'Developer'}
                details = {'Html, Css, JavaScript, React'}
                />
            </div>

            {/* Third Card */}
            <div style={{ top: '19rem', left: '27rem'}}>
            <Card
                emoji = {Humble}
                heading = {'UI/UX'}
                details = {'lorem ispum js kdbsh hgyv gdvgw kuuhoi opowd oijdeoidw iuewgwcbk hcbhcb nfdj.'}
                />
            </div>
            <div className='blur s-blur2' style={{ background: 'var(--purple)'}}></div>
        </div>

    </div>
  )
}

export default Services