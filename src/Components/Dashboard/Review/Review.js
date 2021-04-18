import React, { useContext } from 'react';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';


const Review = () => {

    const { register, handleSubmit } = useForm();
    const [signedInUser, setSignInUser] = useContext(UserContext);

    const img = signedInUser.img;

    const onSubmit = data => {

        const reviewData = {
            name: data.name,
            school: data.school,
            description: data.description,
            img: img
        }

        console.log(reviewData);

        fetch('https://young-caverns-53727.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviewData)
        })
        .then(res => console.log(res));


        alert("Review Added!")

    };


    return (
        <div className="row container-fluid">
            <div className="col-md-3">
                <SideBar />
            </div>
            <div className="col-md-9 mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row bg-light rounded shadow p-3" >
                        <input className="col-lg-5 form-control m-2" placeholder="Enter Your Name" name="name"  {...register("name")} />
                        <input className="col-lg-5 form-control m-2" placeholder="Enter Your School Name" name="school"  {...register("school")} />
                        <textarea class="form-control form-control m-2" placeholder="Rate Your Experience With Us!" name="description"  {...register("description")} />
                    </div>
                    <input className="float-right btn btn-outline-warning mt-3" value="Post Review" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Review;