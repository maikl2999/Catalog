import React from 'react';
import { Router } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import ProductsList from './ProductsList';
import Footer from './Footer';
import Pagination from './Pagination';
import history from '../history';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Header />
                    <div className="container my-3">
                        <div className="row justify-content-between">
                            <div className="col-md-3">
                                <Sidebar />
                            </div>
                            <div className="col-md-9">
                                <Toolbar />
                                <ProductsList />
                                <Pagination />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;