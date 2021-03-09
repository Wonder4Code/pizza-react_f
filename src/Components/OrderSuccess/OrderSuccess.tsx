import React from "react";
import './style.scss'

const OrderSuccess = () => {
    return(
        <div className={'order-success'}>
            <p className={'order-success__title'}>Заказ успешно оплачен!</p>
            <p className={'order-success__text'}>Наш менеджер свяжется с вами в ближайшее время</p>
        </div>
    )
}

export default OrderSuccess