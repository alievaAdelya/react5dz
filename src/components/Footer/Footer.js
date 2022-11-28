import React from 'react'
import icon from '../../assets/Footer/digital flow.svg'
import icon1 from '../../assets/Footer/Frame 22.svg'
import icon2 from '../../assets/Footer/Frame 23.svg'
import icon3 from '../../assets/Footer/Frame 24.svg'
import icon4 from '../../assets/Footer/Frame 25.svg'
import icon5 from '../../assets/Footer/Frame 26.svg'

const Footer = () => {
  return (
    <footer className='footer'>
    <div className='container'>
        <div className='footer__components'>
          <ul className='footer__infor'>
            <li>
              <h2 className='footer__h2'>Пункт</h2>
              <p className='footer__p1'>В своём стремлении улучшить пользовательский опыт мы упускаем, что многие известные личности.</p>
              <p className='footer__p2'>Пункт</p>
              <p className='footer__p3'>Пункт</p>
            </li>
          </ul>
          <ul className='footer__information'>
            <li><img src={icon}/></li>
            <ul className='footer__icon'>
              <li><img className='footer__a' src={icon1}/></li>
              <li><img className='footer__a'src={icon2}/></li>
              <li><img className='footer__a' src={icon3}/></li>
              <li><img className='footer__a' src={icon4}/></li>
              <li><img className='footer__a' src={icon5}/></li>
            </ul>
          </ul>
        </div>
    </div>
 </footer>
  )
}

export default Footer