import React from 'react';
import { connect } from 'react-redux';
import { fetchBasket } from '../actions';


class Basket extends React.Component{
    onClick = () => {
        localStorage.removeItem("basket");
        this.props.fetchBasket();
    }

    renderTableHead() {
        return (
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
        );
    }

    renderTableBody(){
        let sum = 0;

        const tableBody = this.props.basket.map((product, i) => {
            sum += +(product.price);
            return (
                <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>${(+product.price).toFixed(2)}</td>
                </tr>);
        })

        tableBody.push(
            <tr className="table-dark" key={this.props.basket.length + 1}>
                <th scope="row"></th>
                <td>Total price</td>
                <td></td>
                <td>${sum.toFixed(2)}</td>
            </tr>
        )

        return tableBody;
    }

    renderTable() {
        if(this.props.basket.length === 0) {
            return <div className="content-center mt-3"><h3>You have no selected items yet</h3></div>
        }

        return (
            <div>
                <div className="content-center mt-3"><h3>Your selected items:</h3></div>
                <table className="table">
                    {this.renderTableHead()}
                    <tbody>
                        {this.renderTableBody()}
                    </tbody>
                </table>
                <div className="row">            
                    <div className="col mb-5 d-flex flex-row">
                        <button onClick={this.onClick} className="btn btn-secondary">Clear basket</button>
                    </div>
                    <div className="col mb-5 d-flex flex-row-reverse">
                        <button className="btn btn-warning">PayPal Checkout</button>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="content-main container">
                {this.renderTable()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { basket: state.basket };
}

export default connect(mapStateToProps, { fetchBasket })(Basket);