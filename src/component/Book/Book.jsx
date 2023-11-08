import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import swal from "sweetalert";


const Book = () => {
    const {user}= useContext(AuthContext);
    const service = useLoaderData();
    const { _id,  serviceImage, serviceName, servicePrice }=service;
    const handlePurchase= event =>{
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const providerEmail= form.providerEmail.value;
        const date= form.date.value;
        const image = form.image.value;
        const email= user?.email;
        const price= form.price.value;
        const description = form.description.value;
       const booked ={
           serviceName,
           providerEmail,
           date, 
           email,
           image, 
           price, 
           description,
           service: _id,
       }
       console.log(booked);
       fetch('http://localhost:5000/bookings', {
           method:'POST',
           headers:{
            'content-type':'application/json'
           },
           body: JSON.stringify(booked)
       })
       .then(res => res.json())
       .then(data=>{
            if(data.insertedId){
                swal("Thank you", "Service Booking Successfully", "success");
            }
       })
      
    }

    return (
       
          <div className="w-full shadow-2xl bg-base-100">
            <h1 className="text-4xl font-bold text-center text-gray-700 pt-8">Booking Now </h1>
            <form onSubmit={handlePurchase} className="card-body">

           <div className="flex gap-6 w-full">

              <div className="w-full">
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Name</span>
                </label>
                <input type="text" name="serviceName" placeholder="Service name" defaultValue={serviceName} readOnly className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Provider Email</span>
                </label>
                <input type="email" name="providerEmail" placeholder="service provider email" className="input input-bordered" required/>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Taking Date</span>
                </label>
                <input type="date" name="date" className="input input-bordered" required />
              </div>
              </div>

              <div className="w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Image</span>
                </label>
                <input type="text" name="image" placeholder="Service image" readOnly defaultValue={serviceImage}  className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User email</span>
                </label>
                <input type="email" name="email" placeholder="user email" defaultValue={user?.email} readOnly className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="text" name="price" placeholder="price" readOnly defaultValue={servicePrice} className="input input-bordered" required />
              </div>
              </div>
           </div>
                 <div className="form-control">
                <label className="label">
                  <span className="label-text">Special instruction</span>
                </label>
                <input type="text" name="description"  className="input input-bordered" required />
                  </div>
              <div className="form-control mt-6">
                <input type="submit" value={'Purchase'} className="btn btn-primary"></input>
              </div>
            </form>
          </div>
       
    
    );
};

export default Book;