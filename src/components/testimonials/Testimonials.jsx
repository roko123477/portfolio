import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination,Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container" 
      style={{
        "--swiper-navigation-color": "#4db5ff",
        "--swiper-navigation-size": "25px"
      }}
      modules={[Pagination,Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    
     >
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR1} alt="avatar 1"/>
            </div>
            <h5 className='client_name'>Arghyadip</h5>
            <small className='client_review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero labore optio non, at consequuntur repellendus quisquam accusantium inventore, fuga adipisci facere ex exercitationem et voluptatum. Ab accusantium sapiente magni quaerat?</small>
         
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR2} alt="avatar 1"/>
            </div>
            <h5 className='client_name'>Arghyadip</h5>
            <small className='client_review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero labore optio non, at consequuntur repellendus quisquam accusantium inventore, fuga adipisci facere ex exercitationem et voluptatum. Ab accusantium sapiente magni quaerat?</small>
          
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR3} alt="avatar 1"/>
            </div>
            <h5 className='client_name'>Arghyadip</h5>
            <small className='client_review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero labore optio non, at consequuntur repellendus quisquam accusantium inventore, fuga adipisci facere ex exercitationem et voluptatum. Ab accusantium sapiente magni quaerat?</small>

        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR4} alt="avatar 1"/>
            </div>
            <h5 className='client_name'>Arghyadip</h5>
            <small className='client_review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero labore optio non, at consequuntur repellendus quisquam accusantium inventore, fuga adipisci facere ex exercitationem et voluptatum. Ab accusantium sapiente magni quaerat?</small>

        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials