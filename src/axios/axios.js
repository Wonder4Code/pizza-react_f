import axios from 'axios'
import {PIZZA_LIST,PIZZA} from '../constants/axiosURLs'

export const getPizzaList = (thenFunc) => {
    axios.get(PIZZA_LIST)
        .then(data => thenFunc(data.data))
        .catch(() => console.log('error'))
}