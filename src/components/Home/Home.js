import React from 'react';
import "./Home.css";
import iPhone from '../img/Iphone.jpg';
import ReviewItem from '../ReviewItem/ReviewItem';
import useReviewData from '../../hooks/useReviewData';
import { Link } from 'react-router-dom';

const Home = () => {
    const [reviews, setReviews] = useReviewData();

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
                    <h2>Customer Reviews(3)</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
                        {
                            reviews.slice(0, 3).map(review => <ReviewItem key={review.id} review={review}></ReviewItem>)
                        }
                    </div>
                    <button className="btn btn-primary py-2 px-4"><Link className="text-white text-decoration-none" to="/review">See All Review</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Home;