import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Navbar from '../../Navbar/Navbar';
import Payment from '../../Payment/Payment'

const Checkout = () => {

    const [courses, setCourses] = useState([]);
    const { _id } = useParams();

    // console.log(product)

    useEffect(() => {
        fetch('https://young-caverns-53727.herokuapp.com/courses')
            .then(response => response.json())
            .then(data => setCourses(data))
    }, []);

    const checkedCourse = courses.find(product => product?._id === _id);

    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const [paymentData, setPaymentData] = useState([]);

    const handleAddOrder = () => {

        const date = new Date();
        const status = 'pending';
        const newOrder = { ...paymentData, ...signedInUser, ...checkedCourse, date, status };

        console.log(newOrder);

        fetch('https://young-caverns-53727.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

        alert('Order Placed Successfullly!')

    }

    

    return (
        <div className="">
            <Navbar />
            <div style={{ height: '80vh', fontFamily: 'Goergia' }} className="d-flex align-items-center justify-content-center">
                <div className="">
                    <div style={{display: paymentData.paymentMethod ? 'block' : 'none'}}>
                        <h3 className='name-site shadow-sm border rounded p-1 text-center'>Checkout</h3>
                        <table style={{ borderRadius: '10px', width: '100%' }} className="table shadow table-class">
                            <thead>
                                <tr>
                                    <th scope="col">Course</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{checkedCourse?.name}</td>
                                    <td>1</td>
                                    <td>{checkedCourse?.price}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button onClick={handleAddOrder} className="btn btn-outline-success float-right">Place Order!</button>
                    </div>
                    <div style={{display: paymentData.paymentMethod ? 'none' : 'block'}}>
                        <h5>Please Pay First And Place The Order!</h5>
                        <Payment setPaymentData={setPaymentData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;