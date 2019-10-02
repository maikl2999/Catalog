import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div id="footer">
            <div className="container-fluid footer-bg">
                <div className="container pt-4">
                    <div className="row">
                    <div className="col-md-7">
                        <h5>Arnold Palmer</h5>
                        <p>Arnold Palmer, the "Signature" and the "Umbrella" Logo ® are registered trademarks owned by Arnold Palmer Enterprises, Inc.. This website is the only official website of Arnold Palmer Apparel and is Ⓒ Copyright 'Arnold Palmer Apparel'. Commercial reproduction, distribution, or transmission of any part of this website or any information contained therein by any means whatsoever without the prior written permission of Arnold Palmer Apparel is not permited.</p>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-2">
                        <h5>Categories</h5>
                        <ul>
                            <li><Link to="/">Golf shirts</Link></li>
                            <li><Link to="/">Golf shorts & pants</Link></li>
                            <li><Link to="/">Midlayers</Link></li>
                            <li><Link to="/">Belts</Link></li>
                            <li><Link to="/">Gift cards</Link></li>
                        </ul>

                    </div>
                    <div className="col-md-2">
                        <h5>About us</h5>
                        <ul>
                            <li><Link to="/">Gallery</Link></li>
                            <li><Link to="/">Blog</Link></li>
                            <li><Link to="/">Contacts</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid footer-bottom-bg">
                <div className="container py-2">Copyright © 2019 React project</div>
            </div>
        </div>
    );
}

export default Footer;