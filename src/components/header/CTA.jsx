import React from 'react'
import CV from '../../assets/cv.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a className='btn btn-primary' href="#contact">Let's talk</a>
    </div>
  )
}

export default CTA