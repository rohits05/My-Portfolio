import React from 'react'
import './Testimonials.css'
// import {Swiper, SwiperSlide} from 'swiper/react'
import Pf1 from '../../img/profile1.jpg'
import Pf2 from '../../img/profile2.jpg'
import Pf3 from '../../img/profile3.jpg'
import Pf4 from '../../img/profile4.jpg'
// import { Pagination } from 'swiper'
// import 'swiper/css//pagination'
// import 'swiper/css'

const Testimonials = () => {
    const clients = [{
        img: Pf1,
        review:
        "dhshb cskjcb vkjdsbv jjvkjskj jkbj <br/> jfbvkjdvjk vjkbsv jkbs jkbs jkbfsjvb dkjb c v,md aklj fjewh vklknskl kldn nbkjb kjdkjvb jvdnvjlnlk  vkjnsvj fj fdkjjbkj fdjsdj jkbsjb dvdjsdv vkfkn dksbkj vdkbdvkj jldbskjb dwpaooh fakjh fknkbfkjb fkjf lksjh. dhshb cskjcb vkjdsbv jjvkjskj jkbj <br/> jfbvkjdvjk vjkbsv jkbs jkbs jkbfsjvb dkjb c v,md aklj fjewh vklknskl kldn nbkjb kjdkjvb jvdnvjlnlk  vkjnsvj fj fdkjjbkj fdjsdj jkbsjb dvdjsdv vkfkn dksbkj vdkbdvkj jldbskjb dwpaooh fakjh fknkbfkjb fkjf lksjh",
    },{
        img: Pf2,
        review:
        "dhshb cskjcb vkjdsbv jjvkjskj jkbj <br/> jfbvkjdvjk vjkbsv jkbs jkbs jkbfsjvb dkjb c v,md aklj fjewh vklknskl kldn nbkjb kjdkjvb jvdnvjlnlk  vkjnsvj fj fdkjjbkj fdjsdj jkbsjb dvdjsdv vkfkn dksbkj vdkbdvkj jldbskjb dwpaooh fakjh fknkbfkjb fkjf lksjh.",
    },{
        img: Pf3,
        review:
        "dhshb cskjcb vkjdsbv jjvkjskj jkbj <br/> jfbvkjdvjk vjkbsv jkbs jkbs jkbfsjvb dkjb c v,md aklj fjewh vklknskl kldn nbkjb kjdkjvb jvdnvjlnlk  vkjnsvj fj fdkjjbkj fdjsdj jkbsjb dvdjsdv vkfkn dksbkj vdkbdvkj jldbskjb dwpaooh fakjh fknkbfkjb fkjf lksjh.",
    },{
        img: Pf4,
        review:
        "dhshb cskjcb vkjdsbv jjvkjskj jkbj <br/> jfbvkjdvjk vjkbsv jkbs jkbs jkbfsjvb dkjb c v,md aklj fjewh vklknskl kldn nbkjb kjdkjvb jvdnvjlnlk  vkjnsvj fj fdkjjbkj fdjsdj jkbsjb dvdjsdv vkfkn dksbkj vdkbdvkj jldbskjb dwpaooh fakjh fknkbfkjb fkjf lksjh.",
    }       
    ]
  return (
    <div className='t-wrapper'>
        <div className='t-heading'>
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
            <div className='blur t-blur1' style={{background: "var(--purple)" }}></div>
         <div className='blur t-blur2' style={{background: "skyblue"}}></div>
        </div>
        {/* Slider */}
        {/* <Swiper 
        modules={{Pagination}}
        sliderPreView = {1}
        pagination = {{clickable: true}}
        >
        {clients.map((client, index) => {
            return(
                <SwiperSlide key={index}>
                <div className='testimonials'>
                <img src={client.img} alt="" />
                    <span>{client.review}</span>
                </div>
                   
                </SwiperSlide>
            )

        })}

        </Swiper> */}
    </div>
  )
}

export default Testimonials