import React from 'react';
import ProductDetail from './ProductDetail';

class ProductsList extends React.Component {
    
    renderGoods = () => {
        
        // delete
        const testProducts = [ 'product', 'product', 'product', 'product',] 
        
        return testProducts.map(prod => {
            return (
                <ProductDetail title={prod} />
            );
        })
    
    }

    render() {    
        return (
            <div>
                Products List
                {this.renderGoods()}
            </div>
        );
    }
}

export default ProductsList;