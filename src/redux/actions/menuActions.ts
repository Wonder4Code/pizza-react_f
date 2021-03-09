import {DELETE_ITEM, INITIAL_MENU, UPDATE_ITEM, UPDATE_ITEM_NAME} from '../../constants/menuRedux'

export const initialMenuAction = (payload: any) => {
    return {
        type: INITIAL_MENU,
        payload
    }
}

export const updateMenuItem = (id: number, key: any, payload: any) => {
    return {
        type: UPDATE_ITEM,
        id,
        key,
        payload
    }
}

export const updateItemName = (id: number, payload:any) => {
    return {
        type: UPDATE_ITEM_NAME,
        id,
        payload
    }
}

export const deleteItem = (id:number) => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}