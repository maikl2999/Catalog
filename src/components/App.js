import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import Header from './Header';
import Footer from './Footer';
import Catalog from './catalog/Catalog';
import Basket from './Basket';
import AddToBasket from './basket/AddToBasket';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Catalog} />
                        <Route path="/basket/add/:id" exact component={AddToBasket} />
                        <Route path="/basket" exact component={Basket} />
                    </Switch>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;