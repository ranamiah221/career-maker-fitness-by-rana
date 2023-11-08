import { Link } from "react-router-dom";


const Service = ({service}) => {
    const { _id, serviceImage, serviceName, serviceDescription, serviceProviderImage, serviceProviderName, servicePrice}= service;
   const handleDetails = id =>{
    console.log('clicked btn ',id);
   }
    return (
        <div className="card w-full bg-base-100 shadow-xl">
                 <div className="">
                   <figure>
                          <img className="rounded-lg h-[400px] w-full" src={serviceImage} alt="Shoes" />
                    </figure> 
                </div>
             <div className="card-body">
                <h2 className="text-xl font-bold">{serviceName}</h2>
              <p className="text-base font-medium text-gray-400">{serviceDescription}</p>
              <p className="text-xl font-base">Price : {servicePrice}</p>
          <div className=" flex justify-between items-center">
            <div className="flex items-center gap-4">
                <img className="rounded-full w-[100px] h-[100px]" src={serviceProviderImage} alt="" />
                <div>
                    <h2 className="text-xl font-bold text-gray-600">{serviceProviderName}</h2>
                </div>
            </div>
            <Link to={`/services/${_id}`}>
            <button className="btn btn-secondary">View Details</button> 
            </Link>
        
          </div>
        </div>
      </div>
    );
};

export default Service;