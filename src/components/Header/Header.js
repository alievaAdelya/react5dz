import React, { useState } from 'react'
import Logo from '../../assets/Header/logo.svg'
import Burger from '../../assets/Header/burger.svg'
import email from '../../assets/burger/email.svg'
import telegram from '../../assets/burger/telegram.svg'
import vk from '../../assets/burger/vk.svg'
import instagram from '../../assets/burger/instagram.svg'
import phone from '../../assets/burger/phone.svg'


const Header = () => {
  const[show, ShowState] = useState(false)

      return (
  <section className='wrapper'>  
      
      {show && <div className='header__burger'>
        <div className='container'>
            <span className='header__cross' onClick={() => ShowState(!show)}>X</span>
            <ul className='header__ul'>
              <li className='header__ul-item'>Главная</li>
              <li className='header__ul-item'>О компании</li>
              <li className='header__ul-item'>Портфолио</li>
              <li className='header__ul-item'>Что мы предлагаем</li>
              <li className='header__ul-item'>Специальное предложение </li>
            </ul>
            <button className='header__button' type='button'>Оставить заявку</button>
            <ul className='burger'>
              <li><img src={telegram}/></li>
              <li><img src={vk}/></li>
              <li><img src={email}/></li>
              <li><img src={instagram}/></li>
              <li><img src={phone}/></li>
            </ul>
        </div>
        </div>
      }

    <header className='header'>         
        <div className='container'>
          <div className='item'>
          <img src={Logo} alt=''/>
          <img src={Burger} onClick={() => ShowState(!show)}/>
          </div>
          
          <div className='web'>
            <h2 className='web__title'>web applications</h2>
            <p className='web__p'>Повседневная практика.</p>
            <button className='web__btn' type='button'><a className='web__a' href='#'>Спец предложение</a></button>
          </div>
        </div>
    </header>
  </section>  
  )
}

export default Header