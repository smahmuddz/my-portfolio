import React from 'react'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/smahmuddz/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/smahmuddz" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://instagram.com/runtim3terror" target="_blank" rel='noreferrer'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials