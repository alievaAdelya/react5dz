import React from 'react'
import Image from '../../assets/about/Rectangle 2.svg'
import Scrool from '../../assets/about/скролл.svg'

const About = () => {
  return (
    <section className='aboutCompany'>
            <div className='aboutCompany__block'>                        
                <div className='aboutCompany__info'>
                    <img className='aboutCompany__image' src={Image}/> 
                    <div className='about__information'>
                        <h2 className='aboutCompany__title'>О компании</h2>
                        <p className='aboutCompany__one'>Мы диджитал агентство занимаемся полным циклом продвижения компаний в интернете.</p>
                        <p className='aboutCompany__two'>Разработка сайтов – Сделаем уникальный дизайн согласно вашему фирменному стилю. Напишем чистый код, без использования конструкторов.</p>
                        <p className='aboutCompany__three'>Продвижение – поможем вам быстро добиться желаемого результата, обеспечим постоянный приток новых заявок.</p>
                        
                    </div>
                    <img className='aboutCompany__img' src={Scrool}/>
                </div>
            </div>
        </section>
  )
}

export default About