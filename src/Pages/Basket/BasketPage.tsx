import React from 'react'
import Basket from '../../Components/Basket/Basket'
import EmptyBasket from "../../Components/EmptyBasket/EmptyBasket";
import {useSelector} from "react-redux";

const BasketPage = () => {
    const basket = useSelector((state: { basket: [] }) => state.basket)

    return (
        <>
            {
                basket.length
                    ? <Basket/>
                    : <EmptyBasket/>
            }
        </>
    )
}

export default BasketPage