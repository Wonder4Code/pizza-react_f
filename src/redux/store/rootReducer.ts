import { combineReducers } from "redux";
import basketReducer from './basketReducer'
import menuReducer from "./menuReducer";

const rootReducer = combineReducers({
    menu: menuReducer,
    basket: basketReducer
});

export default rootReducer;