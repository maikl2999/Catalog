import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render() {
        return (
          <nav className="navbar navbar-expand-md navbar-dark sticky-top background-black">
            <div className="container">
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
            </div>
          </nav>
        )
      }
}

export default Header;