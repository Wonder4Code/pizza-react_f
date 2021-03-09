import axios from 'axios'
import {PIZZA_LIST,PIZZA} from '../constants/axiosURLs'

export const getPizzaList = (thenFunc) => {
    axios.get(PIZZA_LIST)
        .then(data => thenFunc(data.data))
        .catch(() => console.log('error'))
}

export const updatePizzaItem = (id,data,thenFunc) => {
    axios.put(PIZZA(id), data)
        .then(thenFunc)
        .catch(() => console.log('error on update'))
}

export const deletePizzaItem = (id) => {
    axios.delete(PIZZA(id))
        .then(() => console.log('deleted'))
}