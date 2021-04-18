import React from 'react';
import Navbar from '../Navbar/Navbar';
import SideBar from './SideBar/SideBar';

const Dashboard = () => {

    return (
        <main style={{ height: '100vh' }} >
            <Navbar />
            <div className="container-fluid row">
                <div className="col-md-3">
                    <SideBar />
                </div>
                <div className="col-md-9 mt-5">
                    <div style={{ fontFamily: 'Goergia' }}>
                        <h2>Explore More With Our Dashboard!</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit temporibus ut amet, illo numquam veniam dolorem eos dolores voluptatem sequi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quo quidem dolore nihil cumque accusantium suscipit iure temporibus hic doloribus.</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;