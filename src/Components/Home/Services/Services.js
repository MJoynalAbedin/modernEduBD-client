import React from 'react';
import Online from '../../../images/online.png';
import Recorded from '../../../images/liveClass.png';
import OneToOne from '../../../images/one-to-one.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        name: 'Online Class',
        description: 'Lorem ispum dorror sir amet wer fan fo aomen very good eork byut we dont know what we do.',
        img: Online
    },
    {
        name: 'Pre Recorded Course',
        description: 'Lorem ispum dorror sir amet wer fan fo aomen very good eork byut we dont know what we do.',
        img: Recorded
    },
    {
        name: 'One-to-One Tuition',
        description: 'Lorem ispum dorror sir amet wer fan fo aomen very good eork byut we dont know what we do.',
        img: OneToOne
    }
]

const Services = () => {
    return (
        <section style={{fontFamily: 'goergia', fontWeight: '700'}}>
            <div className="text-center mt-3">
                <h5>LEARN WITH US</h5>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row">
                    {
                        serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;