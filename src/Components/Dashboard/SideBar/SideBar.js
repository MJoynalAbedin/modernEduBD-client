import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPlus, faList, faGripHorizontal, faStar } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between p-3 py-5" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="">
                        <FontAwesomeIcon className="icons" icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/addCourse" className="">
                        <FontAwesomeIcon className="icons" icon={faPlus} /> <span>Add Course</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/manageCourse" className="">
                        <FontAwesomeIcon className="icons" icon={faCog} /> <span>Manage Courses</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="">
                        <FontAwesomeIcon className="icons" icon={faStar} /> <span>Give a Review</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/orderList" className="">
                        <FontAwesomeIcon className="icons" icon={faList} /> <span>Order List</span> 
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;