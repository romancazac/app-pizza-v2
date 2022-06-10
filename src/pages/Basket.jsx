import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EmpyCart from '../components/basket/empy/EmpyCart';
import ProductCart from '../components/basket/ProductCart'
import TitleBlock from '../components/TitleBlock'
import { clearItems, removeItem } from '../redux/slices/cartSlice';
function Basket() {

	const dispach = useDispatch();
	const { items, totalPrice } = useSelector(state => state.cart);
	const count = items.reduce((count, obj) => {
		return obj.count + count;

	}, 0);
	const onClear = () => {
		if(window.confirm('Очистить корзину?')){
			dispach(clearItems());
		}
		
	}
	
	console.log(items)
	return (
		<div className='basket__container'>
			{/* <TitleBlock className="cart__title" title='Корзина'/> */}
			<section className="cart">
				<div className="cart__container">
					{
					items.length > 0 ?	
					<div className="cart__wrapper">
						<div className="cart__header">
							<h1 className="cart__title">Корзина</h1>
							<button className="cart__clear" onClick={onClear}>Очистить корзину</button>
						</div>
						{items.map((item) =>
							<ProductCart {...item} />

						)
						}

						<div className="cart__footer footer-cart">
							<div className="footer-cart__row">
								<p className="footer-cart__total">Всего пицц:<span> {count} шт.</span></p>
								<p className="footer-cart__total-price">Сумма заказа:<span>{totalPrice} ₽</span></p>
							</div>
							<div className="footer-cart__row">
								<Link to="/" className="footer-cart__btn footer-cart__btn-prev"><span>Вернуться назад</span></Link>
								<button className="footer-cart__btn footer-cart__btn-procur">Оплатить сейчас</button>
							</div>
						</div>
					</div>
					:
					<EmpyCart/>	
				}
				</div>
			</section>
		</div>
	)
}

export default Basket