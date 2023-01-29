import React,{useState} from 'react'
import {AiOutlineHome,AiOutlineUser,AiOutlineProject} from 'react-icons/ai'
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi'

import {SiLeetcode,SiAboutdotme} from 'react-icons/si'
import './nav.css'
const Nav = () => {
  const[activeNav,setActiveNav]=useState("#")
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav("#")} className={activeNav==='#'?'active':''}><AiOutlineHome /></a>

      <a href="#about" onClick={()=>setActiveNav("#about")} className={activeNav==='#about'?'active':''}><SiAboutdotme /></a>

      <a href="#experience" onClick={()=>setActiveNav("#experience")} className={activeNav==='#experience'?'active':''}><BiBook /></a>

      <a href="#portfolio" onClick={()=>setActiveNav("#portfolio")} className={activeNav==='#portfolio'?'active':''}><AiOutlineProject /></a>

      <a href="#contact" onClick={()=>setActiveNav("#contact")} className={activeNav==='#contact'?'active':''}><BiMessageSquareDetail /></a>
      <a rel="noreferrer" href="https://leetcode.com/flyRoko123/"><SiLeetcode /></a>
    </nav>
  )
}

export default Nav