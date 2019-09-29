import React from 'react';
import ProductDetail from './ProductDetail';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';

class ProductsList extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    renderGoods = () => {
        return this.props.products.map(product => {
            return (
                <ProductDetail product={product} key={product.entity_id} />
            );
        })
    }

    render() {    
        return (
            <div className="row">
                {this.renderGoods()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { products: Object.values(state.products) };
}

export default connect(mapStateToProps, { fetchProducts })(ProductsList);