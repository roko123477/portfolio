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
          <p>I'm a Pre-final year undergraduate student pursuing B.Tech in CSE from<b> KALYANI GOVERNMENT ENGINNERING COLLEGE(KGEC).</b> I'm a passionate Software Engineer with a knack of learning something new everyday.</p>
          <p>Always Eager to expand my skill-set and learn as I move forward. I enjoy reading aricles and solving calculus problems during my free time.</p>
          <a href='#contact' className='btn btn_primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About