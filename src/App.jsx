import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Qualification1 from './components/qualification1/qualification1'
//import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Qualification1 />
        {/* <Services /> */}
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default App