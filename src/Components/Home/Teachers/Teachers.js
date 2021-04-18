import React from 'react';
import Math from '../../../images/mathTeacher.jpg';
import English from '../../../images/englishTeacher.jpg';
import scienceTeacher from '../../../images/scienceTeacher.jpg';
import TeacherDetails from '../TeacherDetails/TeacherDetails';

const teachersInfo = [
    {
        name: 'Mister John Walker',
        subject: 'Mathematics',
        degree: 'Double Masters',
        img: Math
    },
    {
        name: 'Captain America',
        subject: 'English',
        degree: 'Double Masters, PhD',
        img: English
    },
    {
        name: 'Bucky Bernes',
        subject: 'Science',
        degree: 'Winter Soldier',
        img: scienceTeacher
    }
]

const Teachers = () => {
    return (
        <div className="container mb-5">
            <div className="text-center mb-3">
                <h3 className="mb-5" style={{fontFamily: 'Goergia', fontWeight: 'bold', color: 'darkblue'}}>"MEET OUR HONORABLE TEACHERS"</h3>
            </div>
            <div className="row d-flex justify-content-center ">
                {
                    teachersInfo.map(teacher => <TeacherDetails teacher={teacher} />)
                }
            </div>
        </div>
    );
};

export default Teachers;