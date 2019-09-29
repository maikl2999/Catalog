import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import ProductsList from './ProductsList';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container mt-3">
                    <div className="row justify-content-between">
                        <div className="col-md-3">
                            <Sidebar />
                        </div>
                        <div className="col-md-9">
                            <Toolbar />
                            <ProductsList />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;