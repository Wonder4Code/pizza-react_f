import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'
import logo from './images/logo.png'
import {useSelector} from 'react-redux'
import {totalPrice, totalCount} from '../../functions/functions'

const Header = () => {

    const basket = useSelector((state:any) => state.basket)

    return (
        <div className={'header'}>
            <div className={'header__top'}>
                <Link to={'/'} className={'logo'} style={{textDecoration:'none'}}>
                    <img src={logo} alt="logo" className={'logo__image'}/>
                    <div className={'logo__text-wrapper'}>
                        <h1 className={'logo__title'}>react pizza</h1>
                        <span className={'logo__description'}>самая вкусная пицца во вселенной</span>
                    </div>
                </Link>
                <Link to={'/basket'} className={'button'} style={{textDecoration:'none'}}>
                        <div className={'button__price'}>
                            <span className={'button__title'}>{totalPrice(basket)} ₽</span>
                        </div>
                        <div className={'button__divider'}/>
                        <div className={'button__amount'}>
                            <span className={'button__title button__title_cart'}>{totalCount(basket)}</span>
                        </div>
                </Link>
            </div>
            <div style={{margin: 0, background:'#F7F7F7', width:'100%', height:'1px'}}/>
        </div>
    )
}

export default Header