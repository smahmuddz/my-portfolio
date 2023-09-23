import React from 'react'
import './certification.css'
import myImage from '../../assets/itee.jpg'
import myImage2 from '../../assets/ewu.png'
import {GiGraduateCap} from 'react-icons/gi'
const Certifications = () => {
  return (
    <section id='certifications'>
        <h5>My</h5>
      <h2>Certifications and Achievements</h2>
      <div className="container certifications__container">
          <div className="certifications__me">
            <div className="certifications__me-image">
                <img src={myImage} alt="Certifications" />
            </div>
          </div>
          <div className="certifications__content">
            <div className="certifications__cards">
              <article className='certifications__card'>
                  <GiGraduateCap className='certifications__icon'/>
                  <h5>ITEE FE Certification</h5>
                  <small>National level IT Engineers Examination, IPA Japan</small>
              </article>
            </div>
            <p>
            The Information-Technology Engineers Examination is a group of information technology examinations administered by the Information Technology Promotion Agency, Japan.
            </p>
        </div></div>
        <br/><br />

        <div className="container certifications__container">
          <div className="certifications__me">
            <div className="certifications__me-image">
                <img src={myImage2} alt="Certifications" />
            </div>
          </div>
          <div className="certifications__content">
            <div className="certifications__cards">
              <article className='certifications__card'>
                  <GiGraduateCap className='certifications__icon'/>
                  <h5> Medha Lalon Scholarship, Dean’s List Scholarship</h5>
                  <small>From East West University</small>
              </article>
            </div>
            <p>
            Dean's List Scholarship is a merit scholarship which is awarded to the students who perform well.
           </p>
        </div></div>
    </section>
  )
}
export default Certifications;