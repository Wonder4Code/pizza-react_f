import React, {useState, useEffect,useContext} from 'react'
import {v4 as uuid} from 'uuid'
import './style.scss'
import cheeseburger from './images/cheeseburger.png'
import {context} from '../../assets/Context/Context'

interface ItemInterface {
    id: number,
    title: string,
    cost: number,
    chosen: boolean
}

interface Props {
    pizza: {
        id: number,
        name: string,
        dough: ItemInterface[],
        size: ItemInterface[],
    }
}

function Item(props: Props) {

    const [name, setName] = useState(props.pizza.name)
    const [dough, setDough] = useState<ItemInterface | null>(null)
    const [size, setSize] = useState<ItemInterface | null>(null)
    const [price, setPrice] = useState(0)

    const {addToBasket} = useContext<any>(context)

    useEffect(() => {
        if(dough && size) {
            setPrice(dough.cost + size.cost)
        }
    }, [dough, size])

    let doughName = dough?.title
    let sizeName = size?.title

    const addPizza = () => {
        let myPizza = {name, doughName, sizeName, price, count: 0}
        addToBasket(myPizza)
    }
    return (
        <>
            <div className={'item'} key={props.pizza.id}>
                <img src={cheeseburger} alt="pizza" className={'item__image'}/>
                <h1 className={'item__title'}>{props.pizza.name}</h1>
                <div className={'configuration'}>
                    <div className={'configuration__dough'}>
                        {props.pizza.dough.map((item: ItemInterface) => {
                            if (!dough) {
                                if(item.chosen) {
                                    setDough(item)
                                }
                            }
                            return (
                                <span key={item.id} className={`configuration__dough-item configuration__item 
                        ${dough && item.title === dough.title ? 'configuration__item_active' : ''}`}
                                      onClick={() => setDough(item)}>{item.title}</span>
                            )
                        })}
                    </div>
                    <div className={'configuration__size'}>
                        {props.pizza.size.map((item: ItemInterface) => {
                            if (!size) {
                                if(item.chosen) {
                                    setSize(item)
                                }
                            }
                            return (
                                <span key={item.id}
                                      className={`configuration__dough-item configuration__item 
                            ${size && item.title === size.title ? 'configuration__item_active' : ''}`}
                                      onClick={() => setSize(item)}>{item.title}</span>
                            )
                        })}
                    </div>
                </div>
                <div className={'item-footer'}>
                    <h1 className={'item-footer__title'}>от {price} ₽</h1>
                    <div className={'item-footer__button'} onClick={addPizza}>
                        <span>+ Добавить</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item