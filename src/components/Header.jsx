import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../img/logo.png'
import Search from './search/Search';

function Header() {
   const {items, totalPrice} = useSelector( state => state.cart);
   const count = items.reduce((count, obj) => {
         return obj.count + count;

      }, 0);

   console.log(count )
   return (
      <header className="header">
         <div className="header__container">
            <div className="header__row">
               <Link to="/" className="header__logo"><img src={logo} alt="logo" /></Link>
               <Search/>
               <Link to="basket">
                  <div className="header__right">
                     <span className="header__sum">{totalPrice} ₽</span>
                     <span className="header__cant">{count}</span>
                  </div>
               </Link>

            </div>
         </div>
      </header>
   )
}
export default Header;