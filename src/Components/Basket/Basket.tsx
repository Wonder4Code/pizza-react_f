import React, {useContext} from "react";
import './style.scss'
import {v4 as uuid} from 'uuid'
import basketIcon from './images/basket.png'
import trashIcon from './images/trash.svg'
import image from '../Product/images/cheeseburger.png'
import {context} from "../../assets/Context/Context";

interface Pizza {
    id: number,
    name: string,
    doughName: string,
    sizeName: string,
    count: number,
    price: number
}

let Basket = () => {

    const {basketOrder, setBasketOrder, basketCount,totalPrice, updatePizzaCount, removeFromBasket, removeItem} = useContext<any>(context)

    return(
        <div className={'basket-wrapper'}>
            <div className={'basket'}>
                <div className={'basket__header'}>
                    <div className={'basket__title-wrapper'}>
                        <img src={basketIcon} alt="basket" className={'basket__title-icon'}/>
                        <h2 className={'basket__title'}>Корзина</h2>
                    </div>
                    <div className={'basket__remove-wrapper'} onClick={removeFromBasket}>
                        <img src={trashIcon} alt="trash" className={'basket__remove-icon'}/>
                        <h2 className={'basket__remove'}>Очистить корзину</h2>
                    </div>
                </div>
                {basketOrder.map((pizza: Pizza) => {
                    return(
                        <div className={'pizza-wrapper'} key={uuid()}>
                            <div className={'pizza-divider'}/>
                            <div className={'pizza'}>
                                <img src={image} alt="" className={'pizza__image'}/>
                                <div className={'pizza__text'}>
                                    <h1 className={'pizza__title'}>{pizza.name}</h1>
                                    <p className={'pizza__info'}>{pizza.doughName} {pizza.sizeName}</p>
                                </div>
                                <div className={'pizza__buttons-wrapper'}>
                                    <button className={'pizza__button'} onClick={() => updatePizzaCount(pizza, 'minus')}>-</button>
                                    <p className={'pizza__count'}>{pizza.count}</p>
                                    <button className={'pizza__button'} onClick={() => updatePizzaCount(pizza, 'plus')}>+</button>
                                </div>
                                <h1 className={'pizza__price'}>{pizza.price * pizza.count} ₽</h1>
                                <button className={'pizza__button pizza__button_remove'} onClick={() => removeItem(pizza.name, pizza.doughName, pizza.sizeName)}>x</button>
                            </div>
                        </div>
                    )
                })}
                <div className={'basket__footer'}>
                    <div className={'basket__info'}>
                        <p className={'basket__total'}>Всего пицц:
                            <span className={'basket__total_count'}> {basketCount} шт.</span>
                        </p>
                        <p className={'basket__total'}>Сумма заказа:
                            <span className={'basket__total_sum'}> {totalPrice} ₽</span>
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