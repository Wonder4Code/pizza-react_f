import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Provider} from 'react-redux'

import store from "../redux/store/store";
import MainPage from "../Pages/Main/MainPage";
import BasketPage from "../Pages/Basket/BasketPage";
import Header from "../Components/Header/Header";
import Admin from "../Components/Admin/Admin";
import OrderSuccess from "../Components/OrderSuccess/OrderSuccess";
import  Firebase from 'firebase'

// const firebaseConfig = {
//     apiKey: "AIzaSyCalxhcOZdCyewSLaNLAzol_wV18LLwFR0",
//     authDomain: "react-pizza-cf3bb.firebaseapp.com",
//     projectId: "react-pizza-cf3bb",
//     storageBucket: "react-pizza-cf3bb.appspot.com",
//     messagingSenderId: "145594826360",
//     appId: "1:145594826360:web:b0300de4bb48800077b78d"
// }
//
// Firebase.initializeApp(firebaseConfig)

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <>
                        <Header/>
                        <Route path={'/'} exact component={MainPage}/>
                        <Route path={'/basket'} component={BasketPage}/>
                        <Route path={'/admin'} component={Admin}/>
                        <Route path={'/order-success'} component={OrderSuccess}/>
                    </>
                </Switch>
            </Router>
        </Provider>
    )
}

export default App