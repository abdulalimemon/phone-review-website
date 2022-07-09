import React from 'react';
import useReviewData from '../../hooks/useReviewData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [reviews, setReviews] = useReviewData();
    return (
        <div className="container">
            <h2 className="pt-5 pb-3">What Our Customer Say!</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 py-5"> 
                {
                    reviews.map(review => <ReviewItem key={review.id} review={review}></ReviewItem>)
                }
            </div>
        </div >
    );
};

export default Review;