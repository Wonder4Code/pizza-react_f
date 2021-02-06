import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MainPage from "../Pages/Main/MainPage";
import BasketPage from "../Pages/Basket/BasketPage";
import Header from "../Components/Header/Header";
import {context} from '../assets/Context/Context'
import {getPizzaList} from '../axios/axios'

interface Pizza {
    id: string,
    name: string,
    price: number,
    count: number,
    doughName: string,
    sizeName: string
}

const App = () => {

    const [basketOrder, setBasketOrder] = useState<object[]>([])
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const [basketCount, setBasketCount] = useState<number>(0)

    getPizzaList()

    const addToBasket =  (pizza: Pizza) => {
        if (!findPizza(pizza) || !basketOrder.length) {
            addNewPizza(pizza)
        } else {
            updatePizzaCount(pizza, 'plus')
        }
    }

    const removeFromBasket = () => {
        setBasketOrder([])
        setTotalPrice(0)
        setBasketCount(0)
    }

    const removeItem = (name: string, dough: string, size: string) => {
        let foundItem = findMyPizza(name, dough,size)
        setBasketOrder(basketOrder.filter(item => item !== foundItem))
        setTotalPrice(prevState => prevState - foundItem.price * foundItem.count)
        setBasketCount(prevState => prevState - foundItem.count)
    }

    const findMyPizza = (name:string, dough:string, size:string) => {
        let pizza = {price:0, count: 0}
        basketOrder.forEach((item: any) => {
            if(item.name === name) {
                if(item.doughName === dough) {
                    if(item.sizeName === size) {
                        pizza = item
                    }
                }
            }
        })
        return pizza
    }

    const addNewPizza = (pizza: Pizza) => {
        let newPizza = {...pizza, count: 1}
        setBasketOrder(prevState => [...prevState, newPizza])
        setTotalPrice(prevState => prevState + pizza.price)
        setBasketCount(prevState => prevState + 1)
    }

    const updatePizzaCount = (pizza: Pizza, operation: string) => {
        setBasketOrder(prevState => prevState.map((itemPrev: any): object => {
            if (itemPrev.name === pizza.name && itemPrev.price === pizza.price) {
               if(operation === 'plus') {
                   itemPrev = {...itemPrev, count: itemPrev.count + 1}
                   setTotalPrice(prevState => prevState + pizza.price)
                   setBasketCount(prevState => prevState + 1)
               } else {
                   if(itemPrev.count === 1) {
                       removeItem(pizza.name, pizza.doughName, pizza.sizeName)
                   } else {
                       itemPrev = {...itemPrev, count: itemPrev.count - 1}
                       setTotalPrice(prevState => prevState - pizza.price)
                       setBasketCount(prevState => prevState - 1)
                   }

               }
            }
            return itemPrev
        }))
    }

    const findPizza = (pizza: Pizza) => {
        let status = false
        basketOrder.forEach((item: any) => {
            if(item.name === pizza.name && item.price === pizza.price){
                return status = true
            }
        })
        return status
    }
    console.log(basketOrder)

    return (
        <context.Provider
            value={{totalPrice,
                basketCount,
                basketOrder,
                setTotalPrice,
                setBasketCount,
                addToBasket,
                updatePizzaCount,
                removeFromBasket,
                removeItem
            }}>
            <Router>
                <Switch>
                    <>
                        <Header/>
                        <Route path={'/'} exact>
                            <MainPage/>
                        </Route>
                        <Route path={'/basket'}>
                            <BasketPage/>
                        </Route>
                    </>
                </Switch>
            </Router>
        </context.Provider>
    )
}

export default App