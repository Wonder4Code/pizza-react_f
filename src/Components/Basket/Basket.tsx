import React, {useState} from "react";
import './style.scss'
import basketIcon from './images/basket.png'
import trashIcon from './images/trash.svg'
import image from '../Product/images/cheeseburger.png'
import {useDispatch, useStore, useSelector} from 'react-redux'
import {countPlusAction, countMinusAction, deleteItemAction,clearBasketAction} from '../../redux/actions/basketActions'
import {totalPrice, totalCount} from '../../functions/functions'

interface Pizza {
    id: number,
    name: string,
    doughName: string,
    sizeName: string,
    count: number,
    price: number
}

const Basket = () => {
    const dispatch = useDispatch()
    const store = useStore()
    const basket = useSelector((state: any) => state.basket)
    const [state, setState] = useState(store.getState().basket)

    const updateCount = (item: Pizza, condition: 'plus' | 'minus' | 'delete') => {
        if (condition === 'plus') {
            dispatch(countPlusAction(item.id))
        } else if (condition === 'minus') {
            if (item.count > 1) {
                dispatch(countMinusAction(item.id))
            } else {
                dispatch(deleteItemAction(item.id))
            }
        }
    }

    const deleteItem = (id:number) => {
        dispatch(deleteItemAction(id))
    }

    const clearBasket = () => {
        dispatch(clearBasketAction())
    }

    return (
        <div className={'basket-wrapper'}>
            <div className={'basket'}>
                <div className={'basket__header'}>
                    <div className={'basket__title-wrapper'}>
                        <img src={basketIcon} alt="basket" className={'basket__title-icon'}/>
                        <h2 className={'basket__title'}>Корзина</h2>
                    </div>
                    <div className={'basket__remove-wrapper'} onClick={clearBasket}>
                        <img src={trashIcon} alt="trash" className={'basket__remove-icon'}/>
                        <h2 className={'basket__remove'}>Очистить корзину</h2>
                    </div>
                </div>
                {basket.map((pizza: Pizza) => {
                    return (
                        <div className={'pizza-wrapper'} key={pizza.id}>
                            <div className={'pizza-divider'}/>
                            <div className={'pizza'}>
                                <img src={image} alt="" className={'pizza__image'}/>
                                <div className={'pizza__text'}>
                                    <h1 className={'pizza__title'}>{pizza.name}</h1>
                                    <p className={'pizza__info'}>{pizza.doughName} {pizza.sizeName}</p>
                                </div>
                                <div className={'pizza__buttons-wrapper'}>
                                    <button className={'pizza__button'} onClick={() => updateCount(pizza, 'minus')}
                                    >-
                                    </button>
                                    <p className={'pizza__count'}>{pizza.count}</p>
                                    <button className={'pizza__button'} onClick={() => updateCount(pizza, 'plus')}
                                    >+
                                    </button>
                                </div>
                                <h1 className={'pizza__price'}>{pizza.price * pizza.count} ₽</h1>
                                <button className={'pizza__button pizza__button_remove'}
                                        onClick={() => deleteItem(pizza.id)}
                                >x
                                </button>
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
                        <button className={'basket__button basket__button_back'}>Вернуться назад</button>
                        <button className={'basket__button basket__button_pay'}>Оплатить сейчас</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket