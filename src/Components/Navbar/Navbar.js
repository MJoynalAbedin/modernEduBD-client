import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Navbar.css'

const Navbar = () => {

    const [signedInUser, setSignedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-of-nav">
            <div className="container-fluid">
                <a className="navbar-brand logo" to="/">Smart Edu BD</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link ml-3 active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-3 text-white" to="#">Academic</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-3 text-white" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-3 text-white btn btn-outline-light" to="/login">{signedInUser.name ? signedInUser.name : 'Login'}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;