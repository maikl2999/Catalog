import React from 'react';

const ProductDetail = (props) => {
    return (
        <div className="">
        <div className="card" >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">This is a widlead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        </div>
    );
}

export default ProductDetail;