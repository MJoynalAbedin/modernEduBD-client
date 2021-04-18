import React from 'react';
import Love from '../../../images/learn.jpg'

const Quality = () => {
    return (
        <section  className="p-5 mb-5 section-1">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={Love} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h2 style={{marginBottom: '-15px'}}>You Will Love To Learn!</h2>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, non! Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, facere?
                            <br/> <br/>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, reprehenderit?
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quality;
