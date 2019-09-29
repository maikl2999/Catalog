import React from 'react';

class Header extends React.Component{
    render() {
        return (
          <nav className="navbar navbar-expand-md navbar-dark sticky-top">
            <div className="container">
              <a className="navbar-brand" href="/"><h2>Store</h2></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Products</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Brands</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Contacts</a>
                  </li>

                </ul>             
              </div>
            </div>
          </nav>
        )
      }
}

export default Header;