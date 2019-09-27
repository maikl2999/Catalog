import React from 'react';
import ProductDetail from './ProductDetail';

class ProductsList extends React.Component {
    
    renderGoods = () => {
        
        // delete
        const testProducts = [ { title: 'product1', id: 1 }, { title: 'product2', id: 2 }, { title: 'product3', id: 3 },{ title: 'product4', id: 4 },{ title: 'product5', id: 5 }] 
        
        return testProducts.map(({ title, id }) => {
            return (
                <ProductDetail title={title} key={id}/>
            );
        })
    
    }

    render() {    
        return (
            <div className="card-columns">
                {this.renderGoods()}
            </div>
        );
    }
}

export default ProductsList;