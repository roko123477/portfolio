import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode,SiCodechef,SiCodeforces} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a rel="noreferrer" href="https://www.linkedin.com/in/rohit-koner-7a21961a0/" target="_blank"><BsLinkedin /></a>
        <a rel="noreferrer" href="http://github.com" target="_blank"><FaGithub /></a>
        <a rel="noreferrer" href="https://leetcode.com/flyRoko123/" target="_blank"><SiLeetcode /></a>
        <a rel="noreferrer" href="https://www.codechef.com/users/rohitkoner5" target="_blank"><SiCodechef /></a>
        <a rel="noreferrer" href="https://codeforces.com/profile/flyroko" target="_blank"><SiCodeforces /></a>
    </div>
  )
}

export default HeaderSocials