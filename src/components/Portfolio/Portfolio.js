import React from 'react'
import img from '../../assets/portfolio/img.svg'
import Scrool from '../../assets/portfolio/скролл (1).svg'

const Portfolio = () => {
  return (
    <div className='portfolio'>
    <div className='container'>
      <h2 className='portfolio__h2'>Портфолио</h2>
      <div className='portfolio__companent'>
        <div className='portfolio__div'>
          <img className='portfolio__img' src={img}/>
          <button className='portfolio__btn'>Перейти на сайт</button>
        </div>
        <div className='portfolio__scrool'>
          <img src={Scrool}/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Portfolio