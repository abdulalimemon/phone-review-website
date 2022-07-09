import React from 'react';
import "./ReviewItem.css";
import { StarIcon } from '@heroicons/react/solid';

const ReviewItem = (props) => {
    const { review } = props;
    const { name, picture, rating, details } = review;

    return (
        <div className="col">
            <div className="card">
                <div className="pt-3 pb-1">
                    <img src={picture} className="card-img-top picture" alt="People" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{details}</p>
                    <h4 className="d-flex justify-content-center align-items-center">{rating}<span className="star-icon"><StarIcon className=" w-5 h-5" /></span></h4>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;