import React from 'react';

const Toolbar = () => {
    return (
        <div className="row mt-3">
            
            <div className="col-md-4 text-center">
                Show 
                <select className="custom-select custom-select-sm w-25 mx-1" defaultValue="6">
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                </select>
                Per page
            </div>
            <div className="col-md-4 content-center">
                <p className="text-center mb-0">Products 1 to 6 of 24 total</p>
            </div>
            <div className="col-md-4 content-center">
                Sort by
                <select className="custom-select custom-select-sm w-50 ml-1" defaultValue="position">
                    <option value="position">Position</option>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                </select>
            </div>

        </div>
    );
}

export default Toolbar;