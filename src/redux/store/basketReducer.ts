import {ADD_TO_BASKET, UPDATE_COUNT_PLUS, UPDATE_COUNT_MINUS, DELETE_ITEM,CLEAR_BASKET} from '../../constants/basketRedux'

const basketReducer = (state: object[] = [], action: { type: string, payload: any }) => {
    switch (action.type) {
        case (ADD_TO_BASKET):
            return state = [...state,action.payload]
        case (UPDATE_COUNT_PLUS):
            return state = state.map((item:any): [] => {
                if(item.id === action.payload) {
                    item = {...item, count: item.count + 1}
                }
                return item
            })
        case (UPDATE_COUNT_MINUS):
            return state = state.map((item:any): [] => {
                if(item.id === action.payload) {
                    item = {...item, count: item.count - 1}
                }
                return item
            })
        case (DELETE_ITEM):
            return state = state.filter((item:any) => item.id !== action.payload)
        case (CLEAR_BASKET):
            return state = []
        default:
            return state
    }
}

export default basketReducer