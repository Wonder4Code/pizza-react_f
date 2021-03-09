import React from "react";
import './style.scss'
import emptyCart from './images/emptyCart.png'
import {Link} from 'react-router-dom'

const EmptyBasket = () => {

    return(
        <div className={'empty-basket-wrapper'}>
            <div className={'empty-basket'}>
                <p className={'empty-basket__title'}>Корзина пустая 😕</p>
                <p className={'empty-basket__text'}>Вероятней всего, вы не заказывали ещё пиццу.<br/>
                    Для того, чтобы заказать пиццу - перейдите на главную страницу.</p>
                <img src={emptyCart} alt="empty cart" className={'empty-basket__image'}/>
                <Link to={'/'} className={'empty-basket__button'}>
                    Вернуться назад
                </Link>
            </div>
        </div>
    )
}

export default EmptyBasket