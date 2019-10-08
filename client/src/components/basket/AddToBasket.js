import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../../history';
import Modal from '../Modal';
import Catalog from '../catalog/Catalog';
import { fetchBasket } from '../../actions';

class AddToBasket extends React.Component {
    
    componentDidMount() {
        if(this.props.product) {
            let newValue = this.props.product;

            if(!localStorage.getItem("basket")){       
                localStorage.setItem("basket", JSON.stringify([newValue]));
            } else {
                let values = JSON.parse(localStorage.getItem("basket"));
                values.push(newValue);
                localStorage.setItem("basket", JSON.stringify(values));
            }
            this.props.fetchBasket();
        }
    }

    renderAction() {
        return (
            <React.Fragment>
                <Link to="/" className="btn btn-secondary">Continue shopping</Link>
                <Link to="/basket" className="btn btn-primary">Go to the basket</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if(!this.props.product) {
            return <p>{`Product name: Loading...`}</p>
        }

        return (
            <React.Fragment>
                    {`Product name: ${this.props.product.name}`}<br/>
                    {`Price: $${(+this.props.product.price).toFixed(2)}`}
            </React.Fragment>
        );

    }

    render() {
        return (
            <React.Fragment>
                <Catalog />
                <Modal 
                    title="Congratulations, you added to the basket:"
                    content={this.renderContent()}
                    action={this.renderAction()}
                    onDismiss={() => history.push('/')}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        product: state.products[ownProps.match.params.id - 1]
    }
}

export default connect(mapStateToProps, { fetchBasket })(AddToBasket);