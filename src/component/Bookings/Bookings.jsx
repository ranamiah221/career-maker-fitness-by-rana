import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "../BookingRow/BookingRow";
import Swal from "sweetalert2";


const Bookings = () => {
    const {user}= useContext(AuthContext);
    const [bookings, setBookings]= useState([]);
    const url= `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[url])
    const handleBookingConfirm=id=>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'confirm'})
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    icon: "success",
                    title: "Thank You ",
                    text: "Booking confirm",
                   
                  });
                  const remaining = bookings.filter(booking=> booking._id !== id);
                  const updated = bookings.find(booking=>booking._id===id)
                  updated.status= 'confirm'
                  const newBooking =[updated, ...remaining]
                  setBookings(newBooking);
            }
        })
    }

      const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
             fetch(`http://localhost:5000/bookings/${id}`,{
                method:'DELETE',
             })
             .then(res => res.json())
             .then(data=>{
                if(data.deletedCount>0){
                    Swal.fire({
                             title: "Deleted!",
                             text: "Your file has been deleted.",
                             icon: "success"
                           });

                     const remaining = bookings.filter(booking=> booking._id !== id);
                     setBookings(remaining);      
                }
             })
            }
          });
    }
    return (
        <div>
          
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         Remove
        </th>
        <th>service</th>
        <th>date</th>
        <th>price</th>
        <th>status</th>
      </tr>
    </thead>
    <tbody>
     
     {
        bookings.map(booking=><BookingRow key={booking._id} booking={booking}
        handleDelete={handleDelete}
        handleBookingConfirm={handleBookingConfirm}
        ></BookingRow>)
     }
    </tbody>
   
    
  </table>
</div> 
        </div>
    );
};

export default Bookings;