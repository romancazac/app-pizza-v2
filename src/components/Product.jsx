
import React from 'react'
import pz from '../img/pz.png'
function Product({ name, price, imageUrl, types, sizes, id }) {

   const [pizzaCount, setPizzaCount] = React.useState(0);
   const [activeType, setActiveType] = React.useState(0);
   const [activeSizes, setActiveSizes] = React.useState(0);

   const typesNames = ['тонкое', 'традиционное'];

   const onClickAdd = () => {
      setPizzaCount(pizzaCount + 1)
   }
  

   return (
      <div className="product__column">
         <img src={imageUrl} alt="" className="product__img" />
         <h3 className="product__name">{name}</h3>
         <div className="product__footer">
            <div className="product__lables lables">
               <ul>
                  {
                     types.map((item, index) => 
                     <button
                     key={item} 
                     onClick={() => setActiveType(index)} 
                     className={activeType === index ? 'lables__btn _active' : 'lables__btn ' }>{typesNames[item]}</button>
                     
                     )
                  }

               </ul>
               <ul>
                  {
                     sizes.map((item, index) =>
                        <button
                        key={item}  
                        onClick={() => setActiveSizes(index)} 
                        className={activeSizes === index ? 'lables__btn _active' : 'lables__btn'}>{item}см.</button>
                     )
                  }
               </ul>
            </div>
            <div className="product__price">
               <span className="product__nr">от {price} ₽</span>
               <button className="product__add" onClick={onClickAdd}><span>Добавить <div className="product__count">{pizzaCount}</div></span></button>
            </div>
         </div>
      </div>
   )
}

export default Product