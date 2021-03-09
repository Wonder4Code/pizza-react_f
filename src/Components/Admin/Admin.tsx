import React, {useEffect, Fragment} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getPizzaList} from "../../axios/axios";
import {initialMenuAction} from "../../redux/actions/menuActions";
import AdminItem from "./AdminItem/AdminItem";
import {ItemInterface} from '../../interfaces/interfaces'

const Admin = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        getPizzaList((value: []) => dispatch(initialMenuAction(value)))
    }, [dispatch])

    const menu = useSelector((state: { menu: [] }) => state.menu)

    return (
        <div>
            <hr/>
            {menu.map((item: ItemInterface) => {
                return (
                    <Fragment key={item.id}>
                        <AdminItem item={item}/>
                        <hr/>
                    </Fragment>
                )
            })}
        </div>
    )
}

export default Admin