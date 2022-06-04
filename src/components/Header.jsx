import { Link } from 'react-router-dom';
import logo from '../img/logo.png'
import Search from './search/Search';
function Header() {
   return (
      <header className="header">
         <div className="header__container">
            <div className="header__row">
               <Link to="/" className="header__logo"><img src={logo} alt="logo" /></Link>
               <Search/>
               <Link to="basket">
                  <div className="header__right">
                     <span className="header__sum">520 ₽</span>
                     <span className="header__cant">3</span>
                  </div>
               </Link>

            </div>
         </div>
      </header>
   )
}
export default Header;