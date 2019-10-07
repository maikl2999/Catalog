import React from 'react';
import { connect } from 'react-redux';
import { changePrice, changeCurrentPage } from '../../actions';

class Sidebar extends React.Component {
    onChange = (e) => {
        this.props.changePrice(e.target.id, e.target.checked);
        this.props.changeCurrentPage(1);
    }

    render () {
        return (
            <div>
                <div className="my-3">
                    <h4 className="text-center text-uppercase">Men's Polo Shirts</h4>
                </div>
                <div className="border border-secondary rounded">
                    <div className="background-light-black text-light px-3"><h5 className="mb-0">Price</h5></div>
                    <form className="">
                        <div className="custom-control custom-checkbox mt-3 ml-3">
                            <input onChange={(e) => this.onChange(e)} type="checkbox" className="custom-control-input" id="price_0_20" />
                            <label className="custom-control-label" htmlFor="price_0_20">Before $20</label>
                        </div>
                        <div className="custom-control custom-checkbox mt-3 ml-3">
                            <input onChange={(e) => this.onChange(e)} type="checkbox" className="custom-control-input" id="price_20_30" />
                            <label className="custom-control-label" htmlFor="price_20_30">$20 - $30</label>
                        </div>
                        <div className="custom-control custom-checkbox mt-3 ml-3">
                            <input onChange={(e) => this.onChange(e)} type="checkbox" className="custom-control-input" id="price_30_50" />
                            <label className="custom-control-label" htmlFor="price_30_50">$30 - $50</label>
                        </div>
                        <div className="custom-control custom-checkbox mt-3 ml-3">
                            <input onChange={(e) => this.onChange(e)} type="checkbox" className="custom-control-input" id="price_50_100" />
                            <label className="custom-control-label" htmlFor="price_50_100">$50 & above</label>
                        </div>		
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(null, { changePrice, changeCurrentPage })(Sidebar);