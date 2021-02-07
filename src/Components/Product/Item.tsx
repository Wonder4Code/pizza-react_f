import React, {useState, useEffect} from 'react'
import './style.scss'
import cheeseburger from './images/cheeseburger.png'
import {addToBasketAction, countPlusAction} from '../../redux/actions/basketActions'
import {useDispatch, useStore} from 'react-redux'
import {v4 as uuidv4} from 'uuid'

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

const Item = (props: Props) => {
    const dispatch = useDispatch()
    const store = useStore()

    const name: string = props.pizza.name
    const [dough, setDough] = useState<ItemInterface | null>(null)
    const [size, setSize] = useState<ItemInterface | null>(null)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        if (dough && size) {
            setPrice(dough.cost + size.cost)
        }
    }, [dough, size])

    const findId = (array: []): string | undefined => {
        let foundId

        array.forEach((item: any) => {
            if (item.name === name && item.dough === dough?.title && item.size === size?.title) {
                foundId = item.id
            }
        })
        return foundId
    }

    const addToBasket = () => {
        let foundId = findId(store.getState().basket)

        if (foundId) {
            dispatch(countPlusAction(foundId))
        } else {
            dispatch(addToBasketAction({id: uuidv4(),name, dough: dough?.title, size: size?.title, price, count: 1}))
        }
    }

    return (
        <>
            <div className={'item'} key={props.pizza.id}>
                <img src={cheeseburger} alt="pizza" className={'item__image'}/>
                <h1 className={'item__title'}>{props.pizza.name}</h1>
                <div className={'configuration'}>
                    <div className={'configuration__dough'}>
                        {props.pizza.dough.map((item: ItemInterface) => {
                            if (!dough && item.chosen) {
                                setDough(item)
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
                                if (item.chosen) {
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
                    <div className={'item-footer__button'} onClick={addToBasket}>
                        <span>+ Добавить</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item