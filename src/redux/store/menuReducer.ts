import {INITIAL_MENU} from '../../constants/menuRedux'

const menuReducer = (state: [] = [],action:any) => {
    switch (action.type) {
        case (INITIAL_MENU):
            return state = action.payload
        default:
            return state
    }
}

export default menuReducer