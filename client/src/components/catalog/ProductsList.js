import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, changeNumberOfProduct, changeShowPerPage } from '../../actions';
import ProductDetail from './ProductDetail';
import { filterPrice } from './filterPrice';

class ProductsList extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    renderGoods = () => {
        if(this.props.products.length === 0) {
            return <div>Loading...</div>
        }

        let renderProd = filterPrice(this.props.priceChack, this.props.products);
            
        if(this.props.sort.sortBy !== 'position') {
            renderProd.sort(this.props.sort.cb[this.props.sort.sortBy])
        }

        if(this.props.numberProducts !== renderProd.length) {
            this.props.changeNumberOfProduct(renderProd.length);
            this.props.changeShowPerPage()
        }

        return (
            renderProd
            .splice(this.props.page.showFrom, this.props.page.showPerPage)
            .map(product => {
                return (
                    <ProductDetail product={product} key={product.entity_id} />
                );
        }));
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
    return { 
        products: Object.values(state.products),
        priceChack: state.price,
        sort: state.sort,
        page: state.page,
        numberProducts: state.numberProducts
    };
}

export default connect(mapStateToProps, { fetchProducts, changeNumberOfProduct, changeShowPerPage })(ProductsList);