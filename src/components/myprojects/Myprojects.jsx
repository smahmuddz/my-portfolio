import React from 'react'
import './myprojects.css'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>RecomMuse</h3>
            <small className='text-light'>HTML | CSS | JS | php | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/smahmuddz/RecomMuse" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>  
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>To-Do List App</h3>
            <small className='text-light'>NextJS</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/smahmuddz/Todo-List-NextJs" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://todolist-one-flax.vercel.app" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>    
        </article>
        
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="#" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="#" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
        </article>
        
      </div>
    </section>
  )
}

export default Myprojects