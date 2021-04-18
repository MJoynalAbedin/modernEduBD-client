import React from 'react';
import './Contact.css';


const Contact = () => {
    return (
        <section className="mt-3">
            <div className="container">
                <div className="text-center text-dark d-flex justify-content-center">
                    <h4 style={{ fontFamily: 'Goergia', color: 'red' }} className="m-3 shadow-sm w-25 rounded">SUBSCRIPTION</h4>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" placeholder="Enter Your First Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" placeholder="Enter Your Last Name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Your Email Address" />
                        </div>
                        <div className="form-group text-center">
                            <button type="button" className="btn btn-outline-danger"> Subscribe </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;