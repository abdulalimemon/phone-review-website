import React from 'react';
import img from "../img/NotFound.jpg";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-md-2">
                    
                </div>
                <div className="col-md-8">
                    <img className="img-width" src={img} alt="Page Not Found" />
                </div>
                <div className="col-md-2">
                    
                </div>
            </div>
        </div>
    );
};

export default NotFound;