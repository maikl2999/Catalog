import React from 'react';
import { connect } from 'react-redux';
import { sortBy, changeShowPerPage } from '../../actions';

const Toolbar = (props) => {
    return (
        <div className="row mt-3">
            <div className="col-md-4 text-center">
                Show 
                <select 
                    onChange={e => props.changeShowPerPage(e.target.value)} 
                    className="custom-select custom-select-sm w-25 mx-1" 
                    defaultValue="6">
                        <option value="3">3</option>
                        <option value="6">6</option>
                        <option value="9">9</option>
                        <option value="12">12</option>
                </select>
                Per page
            </div>
            <div className="col-md-4 content-center">
                <p className="text-center mb-0">
                    Products {props.page.showFrom + 1} to {props.page.showTo + 1} of {props.numberProducts} total
                </p>
            </div>
            <div className="col-md-4 content-center">
                Sort by
                <select 
                    onChange={e => props.sortBy(e.target.value)} 
                    className="custom-select custom-select-sm w-50 ml-1" 
                    defaultValue="position">
                        <option value="position">Position</option>
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                </select>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        page: state.page,
        numberProducts: state.numberProducts
    };
}

export default connect(mapStateToProps, { sortBy, changeShowPerPage })(Toolbar);