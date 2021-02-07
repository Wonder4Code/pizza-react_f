import React, {useState, useEffect} from 'react'
import './style.scss'
import cheeseburger from './images/cheeseburger.png'
import {addToBasketAction, countPlusAction} from '../../redux/actions/basketActions'
import {useDispatch, useStore} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import {ItemInterface, SubItemInterface} from '../../interfaces/interfaces'
import SubItem from "./SubItem";

interface Props {
    item: ItemInterface
}

const Item = (props: Props) => {
    const dispatch = useDispatch()
    const store = useStore()

    const name: string = props.item.name
    const [dough, setDough] = useState<SubItemInterface | null>(null)
    const [size, setSize] = useState<SubItemInterface | null>(null)
    const [price, setPrice] = useState<number>(0)

    useEffect(() => {
        props.item.dough.forEach((item: SubItemInterface):void => {
            if(item.chosen) {
                setDough(item)
            }
        })

        props.item.size.forEach((item:SubItemInterface):void => {
            if (item.chosen) {
                setSize(item)
            }
        })
    }, [])

    useEffect(() => {
        if (dough && size) {
            setPrice(dough.cost + size.cost)
        }
    }, [dough, size])

    const findId = (array: []): string | undefined => {
        let foundId: string | undefined

        array.forEach((item: any) => {
            if (item.name === name && item.dough === dough?.title && item.size === size?.title) {
                foundId = item.id
            }
        })
        return foundId
    }

    const addToBasket = ():void => {
        let foundId: string | undefined = findId(store.getState().basket)

        if (foundId) {
            dispatch(countPlusAction(foundId))
        } else {
            dispatch(addToBasketAction({id: uuidv4(),name, dough: dough?.title, size: size?.title, price, count: 1}))
        }
    }

    return (
        <>
            <div className={'item'} key={props.item.id}>
                <img src={cheeseburger} alt="pizza" className={'item__image'}/>
                <h1 className={'item__title'}>{props.item.name}</h1>
                <div className={'configuration'}>
                    <div className={'configuration__dough'}>
                        {props.item.dough.map((subItem: SubItemInterface) => {
                            return (
                                <SubItem subItem={subItem} state={dough} setState={setDough} key={subItem.id}/>
                            )
                        })}
                    </div>
                    <div className={'configuration__size'}>
                        {props.item.size.map((subItem: SubItemInterface) => {
                            return (
                                <SubItem subItem={subItem} state={size} setState={setSize} key={subItem.id}/>
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