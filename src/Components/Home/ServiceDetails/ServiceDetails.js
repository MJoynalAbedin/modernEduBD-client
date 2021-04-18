import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center p-3 mt-4 mb-3 detail-box">
            <img style={{height: '50px', marginBottom: '20px'}} src={service.img} alt=""/>
            <h5>{service.name}</h5>
            <p style={{fontWeight: '400', color: 'dimgray'}}>{service.description}</p>
        </div>
    );
};

export default ServiceDetails;