import { useLoaderData } from "react-router-dom";


const ServicesDetails = () => {
    const service = useLoaderData();
    const { serviceImage, serviceName, serviceDescription, serviceProviderImage, serviceProviderName, servicePrice}=service;
    return (
       
         <div className="card w-full card-side bg-base-100 shadow-2xl p-8 ">
              <div className="w-1/2">
                   <img className="rounded-lg w-full h-[400px]" src={serviceProviderImage} alt="Movie"/>
              </div>
            <div className="card-body w-1/2">
                  <h2 className="text-4xl font-bold text-amber-400">{serviceProviderName}</h2>
                  <p className="text-base font-medium text-gray-500">{serviceDescription}</p>
                  <p className="text-base font-medium text-black"> Price :{servicePrice}</p>
                  <p className="text-base font-medium text-black">Address : West Shewrapara, Mirpur 10. </p>
                
                   <div className="card-actions justify-end">
                          <button className="btn btn-primary">Add</button>
                          <button className="btn btn-primary">Delete</button>
                          <button className="btn btn-primary">Update</button>
                   </div> 
          </div>

      </div>
      
    );
};

export default ServicesDetails;