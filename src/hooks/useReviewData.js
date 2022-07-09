import { useEffect, useState } from "react";


const useReviewData = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("reviewInfo.json")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return [reviews, setReviews]
};

export default useReviewData;