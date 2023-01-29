import React from 'react'
import "./about.css"
import ME from '../../assets/me22.jpg'
import {FaAward,FaIndustry} from 'react-icons/fa'

import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Img" sizes=""/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ Year working experience</small>
            </article>

            <article className="about_card">
              <FaIndustry className='about_icon'/>
              <h5>Companies Worked</h5>
              <small>1+ company</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>5+ completed Projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque omnis, nihil magnam accusamus id suscipit eius qui earum nobis fugiat aliquam laudantium, ullam cupiditate, debitis culpa quasi saepe quas atque.</p>
          <a href='#contact' className='btn btn_primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About