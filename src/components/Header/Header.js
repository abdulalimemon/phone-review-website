import React from 'react';
import "./Header.css";


const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container py-2">
                <a className="navbar-brand fs-3 fw-bolder" href="#">Phones Review</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto text-center fs-5 text-dark fw-bolder">
                        <a className="nav-link" href="#" aria-current="page">HOME</a>
                        <a className="nav-link" href="#">REVIEWS</a>
                        <a className="nav-link" href="#">DASHBOARD</a>
                        <a className="nav-link" href="#">BLOGS</a>
                        <a className="nav-link" href="#">ABOUT</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;