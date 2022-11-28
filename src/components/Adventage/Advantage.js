import React from 'react'
import img from '../../assets/adventage/award 1 (12).svg'
import imgs from '../../assets/adventage/award 1 (13).svg'
import image from '../../assets/adventage/award 1 (14).svg'
import images from '../../assets/adventage/award 1 (15).svg'

const Advantage = () => {
  return (
    <div className='advantages'>
        <div className='container'>
            <h2 className='advantages__title'>Наши преимущества</h2>
            <div className='advantages__companent'>
                <div className='advantages__text1'> 
                         <div className='advantages__text'>        
                        <img src={img}/>           
                        <p className='advantages__p'>Сделаем адаптивный дизайн, под любой вид устройств</p></div>   
                         <div className='advantages__text'>       
                        <img  src={imgs}/>
                        
                        <p className='advantages__p'>Настроим все возможные способы обратной связи.
                            Заявки на почту, подключим онлайн консультанта, настроим телефонный звон с сайта, 
                            подключим Whatsapp к сайту</p>  </div>             
                </div>
                <div className='avantades__text2'> 
                         <div className='advantages__text'>
                        <img  src={image}/>
                        
                        <p className='advantages__p'>Установим на сайт счетчики аналитики и настроим возможность отслеживать результаты прямо с вашего мобильного телефона</p></div>  
                        <div className='advantages__text'>         
                        <img src={images}/>
                        
                        <p className='advantages__p'>Проведем анализ вашей сферы и конкурентов, предложим лучшие инструменты для продвижения в интернете</p></div>               
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Advantage