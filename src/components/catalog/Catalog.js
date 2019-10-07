import React from 'react';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import ProductsList from './ProductsList';
import Pagination from './Pagination';

const Catalog = () => {
    return (
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
    );
}

export default Catalog;