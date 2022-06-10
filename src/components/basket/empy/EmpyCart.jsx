import React from 'react'
import { Link } from 'react-router-dom'
import TitleBlock from '../../TitleBlock'
import './empy.scss'
import img from '../../../img/empy.png'
const EmpyCart = () => {
   return (
      <div className='empy'>
         <TitleBlock title='Корзина пустая' />
         <p className="empy__text">Вероятней всего, вы не заказывали ещё пиццу.
            Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            <img src={img} alt="" />
         <Link to="/" className='empy__link'> Вернуться назад</Link>
      </div >
   )
}

export default EmpyCart