import React from 'react';

const ProductDetail = (props) => {
    const { name, description, price, images } = props.product;

    const url = images[0] ? images[0].url: "https://via.placeholder.com/667x789"
    const usdPrice = (+price).toFixed(2);

     return (
            <div className="col-md-4 my-md-3">    
                <div className="card hover-shadow" name="view overlay hoverable">
                    <div className="card-header content-center" >
                        <h6 className="card-title text-center mb-0">{name}</h6>
                    </div>
                        <img src={url} className="card-img-top" alt="..." />
                    <div className="card-body py-2">
                        <p className="card-text mb-1"><small className="text-muted">{description}</small></p>
                        <p className="card-text font-weight-bold mb-1">${usdPrice}</p>
                    </div>
                </div>
            </div>
    );
}

export default ProductDetail;