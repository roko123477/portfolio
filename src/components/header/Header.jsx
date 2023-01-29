import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me-1.png'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
  return (
   <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Rohit Koner</h1>
        <h5 className='text-light'>Average Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me"/>
        </div>
        <a href="#contact" className="scroll_down" >Scroll Down</a>
      </div>
   </header>
  )
}

export default Header