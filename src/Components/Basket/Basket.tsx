import React from "react";
import {Link} from 'react-router-dom'
import './style.scss'

import basketIcon from './images/basket.png'
import trashIcon from './images/trash.svg'
import image from '../Product/images/cheeseburger.png'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import {useDispatch, useSelector} from 'react-redux'
import {countPlusAction, countMinusAction, deleteItemAction, clearBasketAction} from '../../redux/actions/basketActions'
import {totalPrice, totalCount} from '../../functions/functions'
import {ItemBasket} from '../../interfaces/interfaces'

const Basket = () => {
    const dispatch = useDispatch()
    const basket = useSelector((state: { basket: [] }) => state.basket)

    const updateCount = (item: ItemBasket):void => {
        if (item.count > 1) {
            dispatch(countMinusAction(item.id))
        } else {
            dispatch(deleteItemAction(item.id))
        }
    }


return (
    <div className={'basket-wrapper'}>
        <div className={'basket'}>
            <div className={'basket__header'}>
                <div className={'basket__title-wrapper'}>
                    <img src={basketIcon} alt="basket" className={'basket__title-icon'}/>
                    <h2 className={'basket__title'}>Корзина</h2>
                </div>
                <div className={'basket__remove-wrapper'} onClick={() => dispatch(clearBasketAction())}>
                    <img src={trashIcon} alt="trash" className={'basket__remove-icon'}/>
                    <h2 className={'basket__remove'}>Очистить корзину</h2>
                </div>
            </div>
            {basket.map((item: ItemBasket) => {
                return (
                    <div className={'pizza-wrapper'} key={item.id}>
                        <div className={'pizza-divider'}/>
                        <div className={'pizza'}>
                            <img src={image} alt="" className={'pizza__image'}/>
                            <div className={'pizza__text'}>
                                <h1 className={'pizza__title'}>{item.name}</h1>
                                <p className={'pizza__info'}>{item.dough} {item.size}</p>
                            </div>
                            <div className={'pizza__buttons-wrapper'}>
                                <RemoveCircleOutlineIcon
                                    className={'pizza__button'}
                                    fontSize={'large'}
                                    onClick={() => updateCount(item)}/>
                                <p className={'pizza__count'}>{item.count}</p>
                                <AddCircleOutlineIcon
                                    className={'pizza__button'}
                                    fontSize={'large'}
                                    onClick={() => dispatch(countPlusAction(item.id))}/>
                            </div>
                            <h1 className={'pizza__price'}>{item.price * item.count} ₽</h1>
                            <HighlightOffIcon
                                className={'pizza__button pizza__button_remove'}
                                fontSize={'large'}
                                onClick={() => dispatch(deleteItemAction(item.id))}/>
                        </div>
                    </div>
                )
            })}
            <div className={'basket__footer'}>
                <div className={'basket__info'}>
                    <p className={'basket__total'}>Всего пицц:
                        <span className={'basket__total_count'}> {totalCount(basket)} шт.</span>
                    </p>
                    <p className={'basket__total'}>Сумма заказа:
                        <span className={'basket__total_sum'}> {totalPrice(basket)} ₽</span>
                    </p>
                </div>
                <div className={'basket__buttons-wrapper'}>
                    <Link className={'basket__button basket__button_back'} to={'/'}>Вернуться назад</Link>
                    <button className={'basket__button basket__button_pay'}>Оплатить сейчас</button>
                </div>
            </div>
        </div>
    </div>
)
}

export default Basket