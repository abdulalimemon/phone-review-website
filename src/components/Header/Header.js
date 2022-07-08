import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";


const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container py-2">
                <Link className="navbar-brand fs-3 fw-bolder" to="/">Phones Review</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto text-center fs-5 text-dark fw-bolder">
                        <Link className="nav-link" to="/home" aria-current="page">HOME</Link>
                        <Link className="nav-link" to="/review">REVIEWS</Link>
                        <Link className="nav-link" to="/dashboard">DASHBOARD</Link>
                        <Link className="nav-link" to="/blog">BLOGS</Link>
                        <Link className="nav-link" to="/about">ABOUT</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;