import React, {useState, useEffect} from 'react';
import ReviewDetails from '../Home/ReviewDetails/ReviewDetails';
import './Review.css'

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://young-caverns-53727.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })

    }, [])

    return (
        <div className="d-flex justify-content-center review-section">
            <div className="container">
            <h3 style={{fontFamily: 'Goergia', fontWeight: 'bold', color: 'darkblue'}} className="text-center mt-5">"REVIEWS OF OUR STUDENTS"</h3>
                <div className="d-flex justify-content-center">
                    <div className="row">
                    {
                        reviews.map(review => <ReviewDetails review={review}></ReviewDetails>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;