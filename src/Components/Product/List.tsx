import React, {Fragment, useEffect} from 'react'
import Item from './Item'
import {getPizzaList} from '../../axios/axios'
import {ItemInterface} from '../../interfaces/interfaces'
import {useSelector, useDispatch} from 'react-redux'
import {initialMenuAction} from '../../redux/actions/menuActions'
import Firebase from "firebase";

const List = () => {

    const dispatch = useDispatch()
    const menu = useSelector((state: {menu: []}) => state.menu)
    //const data = Firebase.database()

    useEffect(() => {
        getPizzaList((value: []) => dispatch(initialMenuAction(value)))
       // data.ref('/').on('value', (el) => dispatch(initialMenuAction(el.val())))
    }, [dispatch])

    return (
        <div className={'list-wrapper'}>
            {menu.map((item: ItemInterface) => {
                return (
                    <Fragment key={item.id}>
                        <Item item={item}/>
                    </Fragment>
                )
            })}
        </div>
    )
}

export default List
