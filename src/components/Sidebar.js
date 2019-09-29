import React from 'react';

const Sidebar = () => {
    return (
        <div>
            <div className="my-3">
                <h3 className="text-center text-uppercase">Polo</h3>
            </div>
            <div className="border border-secondary rounded">
                <div className="bg-silver text-light px-3"><h5 className="mb-0">Price</h5></div>
                <form className="">
                    <div className="custom-control custom-checkbox mt-3 ml-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Before $20</label>
                    </div>
                    <div className="custom-control custom-checkbox mt-3 ml-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                        <label className="custom-control-label" htmlFor="customCheck2">$20 - $30</label>
                    </div>
                    <div className="custom-control custom-checkbox mt-3 ml-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck3" />
                        <label className="custom-control-label" htmlFor="customCheck3">$30 - $50</label>
                    </div>
                    <div className="custom-control custom-checkbox mt-3 ml-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck4" />
                        <label className="custom-control-label" htmlFor="customCheck4">$50 & above</label>
                    </div>		
                </form>
            </div>
        </div>
    );
}

export default Sidebar;