import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = ({ course }) => {
    return (
        <div class="card m-4 text-center shadow" style={{width: '18rem', fontFamily: 'Goergia'}}>
            <div class="card-body">
                <img style={{borderRadius: '5px', border:'2px solid lightgray'}} src={course.img} alt="" className="img-fluid mb-3"/>
                <h5 class="card-title text-uppercase">{course.name}</h5>
                <p style={{color: 'dimgray'}} class="card-text">With supporting text below as a natural lead-in to additional content. <br/> The Price is only {course.price}</p>
                <Link to={`/course/${course._id}`}><button className="btn btn-outline-success">Enrol Now</button></Link>
            </div>
        </div>
    );
};

export default CourseDetails;