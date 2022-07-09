import React from 'react';
import "./Home.css";
import iPhone from '../img/Iphone.jpg';

const Home = () => {
    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h3 className="fw-bolder fs-3">iPhone 13 Pro</h3>
                        <h2 className="fw-bolder fs-1">Oh. So. Pro.</h2>
                        <p className="fw-bolder fs-5">A dramatically more powerful camera system. A display so responsive, every interaction feels new again. The world’s fastest smartphone chip. Exceptional durability. And a huge leap in battery life.
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={iPhone} alt="Iphone 13 Pro" />
                </div>
            </div>
            <div className="row py-5">
                <div className="col-md-12">
                    <h2>Customer Reviews()</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;