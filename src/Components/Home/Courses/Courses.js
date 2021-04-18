import React, { useEffect, useState } from 'react';
import CourseDetails from '../CourseDetails/CourseDetails';

const Courses = () => {


    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://young-caverns-53727.herokuapp.com/courses')
            .then(res => res.json())
            .then(data => {
                setCourses(data)
            })

    }, [])


    return (
        <div className="container-fluid mb-5">
            <div className="text-center mb-3">
                <h3 style={{fontFamily: 'Goergia', fontWeight: 'bold', color: 'darkblue'}}>HERE ARE OUR COURSES</h3>
            </div>
            <div className="row d-flex justify-content-center ">
                {
                    courses.map(course => <CourseDetails course={course} />)
                }
            </div>
        </div>
    );
};

export default Courses;