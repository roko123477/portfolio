import React from 'react'
import {SlGraduation} from'react-icons/sl'
import './qualification.css'
const Qualification = () => {

  return (
    <section class="qualification__section">
        <h5 class="section__subtitle">My Educational journey</h5>
            <h2 class="section__title"><SlGraduation />Education</h2>
            

            <div class="qualification__container container">
                <div class="qualification__tabs">
                    {/* <div id="education" class="qualification__button button--flex qualification__active" data-bs-target='#education'>
                        <SlGraduation />
                        Education
                    </div> */}

                    
                </div>

                <div class="qualification__sections">
                    
                    <div class="qualification__content qualification__active" data-content id="education">
                        
                        <div class="qualification__data">
                            <div>
                                <h3 class="qualification__title">B.Tech in CSE </h3>
                                <h5 class="qualification__subtitle">KGEC</h5>
                                <div class="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i>
                                    2020 - 2024
                                </div>
                            </div>

                            <div>
                                <span class="qualification__rounder"></span>
                                <span class="qualification__line"></span>
                            </div>
                        </div>

                        
                        <div class="qualification__data">
                            <div></div>
                            <div>
                                <span class="qualification__rounder"></span>
                                <span class="qualification__line"></span>
                            </div>

                            <div>
                                <h3 class="qualification__title">Class 12th</h3>
                                <span class="qualification__subtitle">Burdwan Municipal High school</span>
                                <div class="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i>
                                    2018 - 2020
                                </div>
                            </div>
                        </div>




                    </div>

                    
                    



                    </div>
                </div>
                
        </section>
  )
}

export default Qualification