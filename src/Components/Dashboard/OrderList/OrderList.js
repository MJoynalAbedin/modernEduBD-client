import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';

const OrderList = () => {

    const [orders, setOrders] = useState([]);
    const [signedInUser, setSignedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://young-caverns-53727.herokuapp.com/orderList?email='+signedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                console.log(data)
            })
    }, [signedInUser.email])

    return (

        <div className="row container-fluid">
            <div className="col-md-3">
                <SideBar />
            </div>
            <div className="col-md-9">
                <div style={{ height: '100%' }} className="m-5">
                    <table class="table shadow table-class">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            orders.map(order => 
                                
                                <tr>
                                    <td>{order.name}</td>
                                    <td>1</td>
                                    <td>{order.price}</td>
                                    <td>{order.date}</td>
                                    <td>{order.status}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderList;