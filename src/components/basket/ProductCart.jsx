import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { removeItem, addItem, minusItem } from '../../redux/slices/cartSlice';


const ProductCart = ({imageUrl,name, price, id, count,type,size}) => {
   const dispach = useDispatch();
   // const {count}= useSelector(state => state.cart)
   const onDeleteProduct = () => {
		dispach(removeItem(id));
	}
   const onPlus = () => {
      dispach(addItem({id}));
   }
   const onMinus = () => {
      dispach(minusItem(id));
   }
   return (
      <div className="cart__row">
         <div className="cart__column product">
            <img src={imageUrl} alt="pizza" className="cart__img" />
            <div className="cart__info">
               <h3 className="product__name">{name}</h3>
               <h4 className="product__subname">{type}, {size} см.</h4>
            </div>
         </div>
         <div className="cart__column">
            <button className="cart__cant" onClick={onMinus}>-</button>
            <button className="cart__cant-cant">{count}</button>
            <button className="cart__cant" onClick={onPlus}>+</button>
         </div>
         <div className="cart__column">
            <span className="cart__sum">{price * count} ₽ </span>
         </div>
         <div className="cart__column">
            <button className="cart__delete cart__cant" onClick={onDeleteProduct}></button>
         </div>
      </div>
   )
}

export default ProductCart