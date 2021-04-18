import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPlus, faList, faGripHorizontal, faStar } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const SideBar = () => {

    const [signedInUser, setSignedInUser] = useContext(UserContext);

    const [adminEmail, setAdminEmail] = useState(false);
    console.log(adminEmail);

    useEffect(() => {
        fetch('https://young-caverns-53727.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: signedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAdminEmail(data))
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between p-3 py-5" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="">
                        <FontAwesomeIcon className="icons" icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                {adminEmail &&
                    <div>
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
                            <Link to="/AddAdmin" className="">
                                <FontAwesomeIcon className="icons" icon={faPlus} /> <span>Add Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/allOrders" className="">
                                <FontAwesomeIcon className="icons" icon={faList} /> <span>All Orders</span>
                            </Link>
                        </li>
                    </div>
                }
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