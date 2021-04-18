import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import SideBar from '../SideBar/SideBar';

const ManageCourse = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://young-caverns-53727.herokuapp.com/courses')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, []);

    const handleDeleteProduct = (id) => {

        // console.log(id);

        fetch(`https://young-caverns-53727.herokuapp.com/deleteCourse/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })

        alert('Deleted Successfully!')
    }

    return (

        <div className="row container-fluid">
            <div className="col-md-3">
                <SideBar />
            </div>
            <div className="col-md-9">
                <table className="table shadow table-class mt-3">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            courses.map(course =>

                                <tr>
                                    <td>{course.name}</td>
                                    <td>1</td>
                                    <td>{course.price}</td>
                                    <td><button onClick={() => handleDeleteProduct(course._id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button></td>
                                </tr>)

                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ManageCourse;