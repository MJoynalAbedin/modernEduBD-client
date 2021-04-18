import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import SideBar from '../SideBar/SideBar';

const AddCourse = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const handleImageUpload = (event) => {
        // console.log(event.target.files[0])

        const imageData = new FormData();
        imageData.set('key', 'a349e346600fe991337cf0789ca7b0e1');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log(response.data.data.url)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const onSubmit = data => {

        const courseData = {
            name: data.name,
            about: data.about,
            price: '$' + data.price,
            img: imageURL
        }
        console.log(courseData);

        fetch('https://young-caverns-53727.herokuapp.com/addCourse', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(courseData)
        })
            .then(res => console.log(res));
            alert("Course Added!")
    };

    return (
        <div className="row container-fluid">
            <div className="col-md-3">
                <SideBar />
            </div>
            <div className="col-md-9 mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row bg-light rounded shadow p-3" >
                        <input className="col-lg-5 form-control m-2" placeholder="Enter Course Name" name="name"  {...register("name")} />
                        <input className="col-lg-5 form-control m-2" placeholder="Enter Course About" name="about"  {...register("about")} />
                        <input className="col-lg-5 form-control m-2" placeholder="Enter Course Price" name="price"  {...register("price")} />
                        <input className="col-lg-6 m-2" name="exampleRequired" type="file" onChange={handleImageUpload} />
                    </div>
                    <input className="float-right btn btn-primary mt-3" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddCourse;