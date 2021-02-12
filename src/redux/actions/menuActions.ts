import {INITIAL_MENU} from '../../constants/menuRedux'

export const initialMenuAction = (payload: any) => {
    return {
        type: INITIAL_MENU,
        payload
    }
}