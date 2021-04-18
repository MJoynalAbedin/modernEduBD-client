import React from 'react';

const TeacherDetails = ({ teacher }) => {
    return (
        <div style={{fontFamily: 'Goergia', fontWeight: 'bold', color: 'dimgray'}} className="col-md-4 d-flex justify-content-center">
            <div class="card m-2 p-2 shadow" style={{ width: '18rem' }}>
                <img class="card-img-top" src={teacher.img} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-text">Name: {teacher.name}</h5>
                    <h6>Degrees: {teacher.degree}</h6>
                    <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, asperiores.</small>
                </div>
            </div>
        </div>
    );
};

export default TeacherDetails;