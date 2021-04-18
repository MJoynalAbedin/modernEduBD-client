import React, { } from 'react';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";


const AddAdmin = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        const eventData = {email: data.email}

        console.log(eventData);

        fetch('https://young-caverns-53727.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log(res));


        alert("Admin Added!")

    }


    return (
        <div className="row container-fluid">
            <div className="col-md-3">
                <SideBar />
            </div>
            <div className="col-md-9 mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row bg-light rounded shadow p-3" >
                        <input className="col-lg-5 form-control m-2" placeholder="Enter The Email" name="email"  {...register("email")} />
                    </div>
                    <input className="float-right btn btn-outline-warning mt-3" value="Add Admin" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;