import React from 'react'
import './footer.css'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>Sabbir Mahmud Afridi</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Skills</a></li>
            <li><a href="#myprojects">My Projects</a></li>
            <li><a href="#certifications">My Achievements</a></li>
        </ul>
        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/smahmuddz/"><BsLinkedin/></a>
          <a href="https://github.com/smahmuddz"><BsGithub/></a>
          <a href="https://instagram.com/runtim3terror"><BsInstagram/></a>
        </div>
        <div className="footer__copyright">
            <small>&copy; Sabbir Mahmud Afridi.</small>
        </div>
    </footer>
  )
}

export default Footer