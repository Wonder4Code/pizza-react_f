import React, {Fragment, useEffect, useState} from 'react'
import Item from './Item'
import {getPizzaList} from '../../axios/axios'

interface ItemInterface {
    id: number,
    title: string,
    cost: number,
    chosen: boolean
}

interface Pizza {
    id: number,
    name: string,
    dough: ItemInterface[],
    size: ItemInterface[],
}

function List() {

    const [pizzaList,setPizzaList] = useState<[]>([])

    useEffect(() => {
        getPizzaList(setPizzaList)
    }, [])

    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            {pizzaList.map((pizza: Pizza) => {
                return (
                    <Fragment key={pizza.id}>
                        <Item pizza={pizza}/>
                    </Fragment>
                )
            })}
        </div>
    )
}

export default List
