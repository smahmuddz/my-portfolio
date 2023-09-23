import React from 'react'
import './pikachu.css'
import myImage from '../../assets/pikachu.gif'
const Pikachu = () => {
  return (
    <section id='Certifications'>
    <div className='container'>
    <img className='pikachu' src={myImage} alt="Pikachu" />
    </div>
    </section>
  )
}
export default Pikachu;