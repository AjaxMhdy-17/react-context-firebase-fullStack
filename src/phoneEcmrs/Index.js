import React from 'react'

import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import ProductList from './components/Products/ProductList'
import ProductDetail from './components/Products/ProductDetail';
import Modal from './components/Modal/Modal'
import Cart from './components/Cart/Cart'
import SignInSignUp from './Auth/SignInSignUp'
import CheckOut from './components/Cart/CheckOut';
import NotFound from './components/Products/NotFound';
import Profile from './Auth/Profile'
import Reset from './Auth/Reset';
import PrivateRoute from './Auth/PrivateRoute';

const Index = () => {



    return (
        <div className='mainBody'>
            <Router>
                <Modal />
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <ProductList />
                    </Route>
                    <Route exact path='/cart'>
                        <Cart />
                    </Route>
                    <Route exact path='/detail'>
                        <ProductDetail />
                    </Route>
                    <Route exact path='/auth'>
                        <SignInSignUp />
                    </Route>
                    <PrivateRoute exact path="/checkout">
                        <CheckOut/>
                    </PrivateRoute>
                    <Route exact path='/reset'>
                        <Reset />
                    </Route>
                    <Route exact path='/profile'>
                        <Profile />
                    </Route>

                    <Route exact path='/*'>
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Index
