import React from 'react';
import classImg from '../../../images/class.png';
import './Header.css'

const Header = () => {
    return (
        <header className="header-1 section-1 pt-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-flex align-items-center">
                        <div>
                            <h1>This is our Modern Education Bangladesh</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores maxime est quam nesciunt nemo exercitationem. Lorem ipsum dolor sit amet.</p>
                            <button className="btn btn-success">Get Started</button>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="d-flex justify-content-center">
                            <img src={classImg} alt="" className="img-fluid w-75" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;