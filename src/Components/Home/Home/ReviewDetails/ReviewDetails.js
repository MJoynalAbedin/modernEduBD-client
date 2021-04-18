import React from 'react';
import './ReviewDetails.css'

const ReviewDetails = ({ review }) => {
    return (
        <div className="col-md-4 mt-5 mb-5 d-flex justify-content-center">
            <div style={{ width: '18rem', backgroundColor:'white', fontFamily: 'Goergia' }} className="review-card">
                <div className="d-flex">
                    <img style={{ width: '80px', borderRadius: '100%', border: '1px solid gray' }} src={review.img} alt="" className="mr-3 mb-3 img-fluid" />
                    <h6>{review.name} <br/> <small>{review.school}</small> </h6>
                </div>
                <p style={{color: 'dimgray'}}>{review.description}</p>
            </div>
        </div>
    );
};

export default ReviewDetails;