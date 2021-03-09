import React, {ChangeEvent, useState} from "react";
import './style.scss'
import {useDispatch} from "react-redux";
import {updateMenuItem} from '../../../redux/actions/menuActions'

const AdminSubItem = ({props, subItemTitle, id}: any) => {

    const [title, setTitle] = useState(props.title)
    const [cost, setCost] = useState(props.cost)
    const [enabled, setEnabled] = useState(props.enabled)

    const [editable, setEditable] = useState(false)
    const dispatch = useDispatch()

    const titleHandler = ({target}: ChangeEvent<HTMLInputElement>) => {
        setTitle(target.value)
    }

    const costHandler = ({target}: ChangeEvent<HTMLInputElement>) => {
        setCost(Number(target.value))
    }

    const enabledHandler = ({target}: ChangeEvent<HTMLInputElement>) => {
        setEnabled(target.checked)
    }

    const editItem = (value: boolean = false) => {
        setEditable(prev => !prev)

        if (value) {
            let item = {...props, title, cost, enabled}
            dispatch(updateMenuItem(id, subItemTitle, item))
        } else {
            setTitle(props.title)
            setCost(props.cost)
            setEnabled(props.enabled)
        }
    }

    return (
        <div className={'admin-subItem'}>
            <div className={'admin-subItem__edit-block'}>
                {
                    editable
                        ? <div>
                            <button className={'admin-subItem__edit-button'} onClick={() => editItem(true)}>изменить</button>
                            <button className={'admin-subItem__edit-button admin-subItem__edit-button__cancel'} onClick={() => editItem(false)}>отмена</button>
                        </div>
                        : <button className={'admin-subItem__edit-button'} onClick={() => editItem(false)}>изменить</button>
                }

            </div>
            <div className={'admin-subItem__block'}>
                <span className={'admin-subItem__title'}>Имя: </span>
                {
                    editable
                        ? <input type="text" className={'admin-subItem__input'} value={title}
                                 onChange={e => titleHandler(e)}/>
                        : <p className={'admin-subItem__value'}>{props.title}</p>
                }
            </div>
            <div className={'admin-subItem__block-enabled'}>
                <span className={'admin-subItem__title'}>Доступно: </span>
                {
                    editable
                        ? <input type="checkbox" checked={enabled} onChange={e => enabledHandler(e)}/>
                        : <p className={'admin-subItem__value'}>{enabled ? 'да' : 'нет'}</p>
                }
            </div>
            <div className={'admin-subItem__block'}>
                <span className={'admin-subItem__title'}>Цена: </span>
                {
                    editable
                        ? <input type="number" className={'admin-subItem__input'} value={cost}
                                 onChange={e => costHandler(e)}/>
                        : <p className={'admin-subItem__value'}>{props.cost}</p>
                }
            </div>
        </div>
    )
}

export default AdminSubItem