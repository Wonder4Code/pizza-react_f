import React, {ChangeEvent, useState} from "react";
import './style.scss'
import AdminSubItem from "../AdminSubItem/AdminSubItem";
import {updatePizzaItem, deletePizzaItem} from '../../../axios/axios'
import {deleteItem, updateItemName} from '../../../redux/actions/menuActions'
import {useDispatch} from "react-redux";
import {ItemInterface, SubItemInterface} from '../../../interfaces/interfaces'

interface Props {
    item: ItemInterface
}

const AdminItem = ({item}: Props) => {
    const dispatch = useDispatch()
    const [name, setName] = useState(item.name)
    const [edit, setEdit] = useState(false)
    const nameHandler = ({target}:ChangeEvent<HTMLInputElement>) => {
        setName(target.value)
    }

    const updateItem = () => {
        updatePizzaItem(item._id, {...item, name}, () => console.log('updated'))
    }

    const editName = (value: boolean = false) => {
        setEdit(prev => !prev)

        if (value) {
            dispatch(updateItemName(item.id, name))
        } else {
            setName(item.name)
        }
    }

    const deleteItemFunc = (value:number) => {
        dispatch(deleteItem(value))
        deletePizzaItem(value)
    }

    return (
        <div className={'admin-item'}>
            <div className={'admin-item__image-wrapper'}>
                <img src={require(`../../Product/images/${item.image}.png`).default}
                     alt="pizza" style={{width: 200}} className={'admin-item__image'}/>
            </div>
            <div className={'admin-item__item-wrapper'}>
                <div>
                    <div className={'admin-item__edit-block'}>
                        {
                            edit
                                ? <div>
                                    <button className={'admin-item__edit-button'} onClick={() => editName(true)}>edit
                                    </button>
                                    <button className={'admin-item__edit-button admin-item__edit-button__cancel'}
                                            onClick={() => editName(false)}>cancel
                                    </button>
                                </div>
                                : <button className={'admin-item__edit-button'}
                                          onClick={() => editName(false)}>change</button>
                        }
                        <div className={'admin-item__name-block'}>
                            <span className={'admin-item__name'}>Название пиццы: </span>
                            {
                                edit
                                    ? <input type="text" value={name} onChange={e => nameHandler(e)}
                                             className={'admin-item__input'}/>
                                    : <p className={'admin-item__name-title'}>{name}</p>
                            }
                        </div>
                    </div>
                </div>
                <div className={'admin-item__block'}>
                    <p className={'admin-item__title'}>Размер</p>
                    <div className={'admin-item__subItem-wrapper'}>
                        {item.size.map((size: SubItemInterface) => {
                            return (
                                <AdminSubItem key={size.id} props={size} subItemTitle={'size'} id={item.id}/>
                            )
                        })}
                    </div>
                </div>
                <div className={'admin-item__block'}>
                    <p className={'admin-item__title'}>Тесто</p>
                    <div className={'admin-item__subItem-wrapper'}>
                        {item.dough.map((dough: SubItemInterface) => {
                            return (
                                <AdminSubItem key={dough.id} props={dough} subItemTitle={'dough'} id={item.id}/>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className={'admin-item__controls-wrapper'}>
                <button className={'admin-item__control-button'} onClick={updateItem}>update</button>
                <button className={'admin-item__control-button'} onClick={() => deleteItemFunc(item.id)}>delete</button>
            </div>
        </div>

    )
}

export default AdminItem