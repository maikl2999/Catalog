import React from 'react';
import { Link } from 'react-router-dom';
import { fetchBasket } from '../actions';
import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';

class Header extends React.Component{
componentDidMount () {
  this.props.fetchBasket();
}

    render() {
        return (
          <div className="sticky-top">
            <div className="bg-light top-header">
              <div className="container">
                <div className="d-flex flex-row-reverse"><GoogleAuth /></div>
              </div>
            </div>
          <nav className="navbar navbar-expand-md navbar-dark background-black">
            <div className="container menu">
              <Link className="navbar-brand" to="/"><h2>Store</h2></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Products</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Brands</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Contacts</Link>
                  </li>
                </ul>             
              </div>
              <Link to="/basket">
              <div className="icon-basket ml-3">
                <div className="inner-basket content-center rounded-circle"><span>{this.props.basket.length}</span></div>
              </div>
              </Link>
            </div>
          </nav>
          </div>
        )
      }
}

const mapStateToProps = (state) => {
  return { basket: state.basket };
}

export default connect(mapStateToProps, { fetchBasket })(Header);