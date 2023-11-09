import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";


const AddService = () => {
     const {user}= useContext(AuthContext);
     const handleAddService= event =>{
         event.preventDefault();
         const form = event.target;
         const url = form.url.value;
         const serviceName= form.serviceName.value;
         const name = form.name.value;
         const area = form.area.value;
         const email= user?.email;
         const price= form.price.value;
         const description = form.description.value;
         const service= {
             url, serviceName, name, area, email, price, description
         }
        fetch('http://localhost:5000/services',{
            method:'POST',
            headers:{
             'content-type':'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data=>{
             if(data.insertedId){
                 swal("Thank you", "Add new product", "success");
             }
             form.reset();
        })
      
 }
  return (
    <div className="">
       <h1 className="text-4xl font-bold text-center text-gray-700 pt-8 pb-4">Add Product </h1>
      <form onSubmit={handleAddService} className="card-body">

<div className="flex gap-6 w-full">

   <div className="w-full">
  <div className="form-control">
     <label className="label">
       <span className="label-text">url</span>
     </label>
     <input type="text" name="url" placeholder="url" className="input input-bordered" required />
   </div>

   <div className="form-control">
     <label className="label">
       <span className="label-text">Service Name</span>
     </label>
     <input type="text" name="serviceName" placeholder="service name" className="input input-bordered" required/>
   </div>

   <div className="form-control">
     <label className="label">
       <span className="label-text">name</span>
     </label>
     <input type="name" name="name" placeholder="name" className="input input-bordered" required />
   </div>
   </div>

   <div className="w-full">
   <div className="form-control">
     <label className="label">
       <span className="label-text">area</span>
     </label>
     <input type="text" name="area" placeholder="area"  className="input input-bordered" required />
   </div>
   <div className="form-control">
     <label className="label">
       <span className="label-text">User email</span>
     </label>
     <input type="email" name="email" placeholder="" defaultValue={user?.email} readOnly className="input input-bordered" required />
   </div>
   <div className="form-control">
     <label className="label">
       <span className="label-text">Price</span>
     </label>
     <input type="text" name="price" placeholder="price"  className="input input-bordered" required />
   </div>
   </div>
</div>
      <div className="form-control">
     <label className="label">
       <span className="label-text">description</span>
     </label>
     <input type="text" name="description"  className="input input-bordered" required />
       </div>
   <div className="form-control mt-6">
     <input type="submit" value={'Add Service'} className="btn btn-primary"></input>
   </div>
 </form>
    </div>
  );
};

export default AddService;
  

  