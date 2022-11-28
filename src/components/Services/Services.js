import React from 'react'
import{servisesData} from '../../data/servisesData'

const Services = () => {
    console.log(servisesData);
  return (
    <section className='services'>
        <div className='container'>
            <h2 className='services__title'>Что мы предлагаем</h2>
           <div className='services__row'>
           {
                servisesData.map((item) => (
                    <div className='services__card'>
                        <img src={item.icon} alt=''/>
                        <h3 className='services__card-title'>{item.text}</h3>
                    </div>
                ))
            }
            <div className='services__card'></div>
            <div className='services__card'></div>
            <div className='services__card'>
                <button type="button">Подробнее</button>
            </div>
           </div>
        </div>
    </section>
  )
}

export default Services