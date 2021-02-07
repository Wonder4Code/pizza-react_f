import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Provider} from 'react-redux'

import store from "../redux/store/store";
import MainPage from "../Pages/Main/MainPage";
import BasketPage from "../Pages/Basket/BasketPage";
import Header from "../Components/Header/Header";

const App = () => {
    return (
        <Provider store={store}>
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
        </Provider>
    )
}

export default App