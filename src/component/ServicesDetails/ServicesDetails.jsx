import { Link, useLoaderData } from "react-router-dom";


const ServicesDetails = () => {
    const service = useLoaderData();
    const {  _id, serviceImage, serviceName, serviceDescription, serviceProviderImage, serviceProviderName, servicePrice}=service;
    
    return (
       
         <div className="w-full flex gap-6">
              
              <div className="card w-2/3 card-side bg-base-100 shadow-2xl p-8 ">
              <div className="w-1/2">
                   <img className="rounded-lg w-full h-[400px]" src={serviceImage} alt="Movie"/>
              </div>
            <div className="card-body w-1/2">
                  <h2 className="text-4xl font-bold text-amber-400">{serviceName}</h2>
                  <p className="text-base font-medium text-black">{serviceDescription} </p>
          </div>

      </div>

      <div className="card w-1/3 card-side bg-base-100 shadow-2xl p-8 ">
              <div className="w-1/2">
                   <img className="rounded-lg w-full h-[400px]" src={serviceProviderImage} alt="Movie"/>
              </div>
            <div className="card-body w-1/2">
                  <h2 className="text-4xl font-bold text-amber-400">{serviceProviderName}</h2>
                  <p className="text-base font-medium text-black"> Price :{servicePrice}</p>
                  <p className="text-base font-medium text-black">Address : West Shewrapara, Mirpur 10. </p>
                
                   <div className="card-actions justify-end">
                         <Link to={`/book/${_id}`}> <button className="btn btn-primary">Book Now</button></Link>     
                   </div> 
          </div>

      </div>
      
      
         </div>
    );
};

export default ServicesDetails;