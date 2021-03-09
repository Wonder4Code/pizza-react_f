import {DELETE_ITEM, INITIAL_MENU, UPDATE_ITEM, UPDATE_ITEM_NAME} from '../../constants/menuRedux'

function getNewState(state: any, action: any) {
    return state.map((pizzaItem: any) => {
        if (pizzaItem.id === action.id) {
            let updatedItem = pizzaItem[action.key].map((subItem: any) => {
                if (subItem.id === action.payload.id) {
                    subItem = action.payload
                }
                return subItem
            })
            return {...pizzaItem, [action.key]: updatedItem}
        }
        return pizzaItem
    })
}

function updateItemName(state:any,action:any) {
    return state.map((pizzaItem:any) => {
        if(pizzaItem.id === action.id){
            pizzaItem.name = action.payload
        }
        return pizzaItem
    })
}

const menuReducer = (state: any = [], action: any) => {
    switch (action.type) {
        case (INITIAL_MENU):
            return state = action.payload
        case (UPDATE_ITEM):
            let updatedState = getNewState(state, action)
            return state = updatedState
        case (UPDATE_ITEM_NAME):
            let updatedName = updateItemName(state,action)
            return state = updatedName
        case (DELETE_ITEM):
            return state = state.filter((item:any) => item.id !== action.payload)
        default:
            return state
    }
}

export default menuReducer