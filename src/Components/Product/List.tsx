import React, {Fragment} from 'react'
import Item from './Item'
import {pizzasArray} from './itemConfig'

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
    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            {pizzasArray.map((pizza: Pizza) => {
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
