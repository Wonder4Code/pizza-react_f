import {ADD_TO_BASKET, UPDATE_COUNT_PLUS, UPDATE_COUNT_MINUS,DELETE_ITEM, CLEAR_BASKET} from '../../constants/basketRedux'

export const addToBasketAction = (payload: object) => {
    return {
        type: ADD_TO_BASKET,
        payload
    }
}

export const countPlusAction = (payload: string | number) => {
    return {
        type: UPDATE_COUNT_PLUS,
        payload
    }
}

export const countMinusAction = (payload: number) => {
    return {
        type: UPDATE_COUNT_MINUS,
        payload
    }
}

export const deleteItemAction = (payload: number) => {
    return {
        type: DELETE_ITEM,
        payload
    }
}

export const clearBasketAction = () => {
    return {
        type: CLEAR_BASKET
    }
}