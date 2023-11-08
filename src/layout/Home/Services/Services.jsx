import { useEffect, useState } from "react";
import Service from "./Service/Service";
import { Link } from "react-router-dom";


const Services = () => {
    const [services, setServices]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-10 mb-5 text-gray-600">Our Services</h1>
            <div className="grid md:grid-cols-2 gap-5 grid-cols-1">
                {
                    services.map(service=><Service key={service._id} service={service}></Service>)
                }
            </div>
            <div className="flex justify-center">
            <Link to={'/services'}><button className="btn btn-secondary mt-5">Show all</button></Link>
            </div>
        </div>
    );
};

export default Services;