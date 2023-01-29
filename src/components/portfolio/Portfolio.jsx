import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/imerxn.png'
import IMG2 from '../../assets/yelp.png'
import IMG3 from '../../assets/notes.png'
 import IMG4 from '../../assets/todo1.png'
 import IMG5 from '../../assets/calc.png'
// import IMG6 from '../../assets/portfolio6.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="image1" />
          </div>
            <h3>Imernx Admin Dashboard</h3>
            
            <div className="portfolio_item-cta">
              <a href="https://github.com/roko123477/imerxn1" className='btn'>Github</a>
              <a href="https://imernx.onrender.com/" className='btn btn-primary'>Live Demo</a>
            </div> 
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="image1" />
          </div>
            <h3>YelpCamp<sup>IN</sup></h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/roko123477/yelpCamp_In" className='btn'>Github</a>
              <a href="https://yelpcampin.onrender.com/" className='btn btn-primary'>Live Demo</a>
            </div> 
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="image1" />
          </div>
            <h3>Notify</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/roko123477/Notes-app" className='btn'>Github</a>
              <a href="https://notify-kv39.onrender.com/" className='btn btn-primary'>Live Demo</a>
            </div> 
        </article>


        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="image1" />
          </div>
            <h3>Todo App</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/roko123477/todo_list.github.io" className='btn'>Github</a>
              <a href="https://roko123477.github.io/todo_list.github.io/" className='btn btn-primary'>Live Demo</a>
            </div> 
        </article>


        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="image1" />
          </div>
            <h3>Calculator App</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/roko123477/calculator_app.github.io" className='btn'>Github</a>
              <a href="https://roko123477.github.io/calculator_app.github.io/" className='btn btn-primary'>Live Demo</a>
            </div> 
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio