import React from 'react'
import './about.css'
import myImage from '../../assets/my-image2.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>Bsc.(Hons) Software Engneering(UG) <br /><i>East West University</i></small>
              </article>
              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Web Development</li>
                      <li>Software Quality Assurance</li>
                    </ul>
                  </small>
              </article>
            </div>
            <p>
              I'm a <b>Software Engineering Graduate</b>, graduated from East West University, Bangladesh. 
              Worked as an Undergraduate teaching assistant for the courses Data Structure, Database, 
              Software Quality Assurance for almost 1.5 years before I completed my graduation.
              I love solving critical problems, Also am a big naruto fan. 
            </p>
          </div>
      </div>
    </section>
  )
}
export default About