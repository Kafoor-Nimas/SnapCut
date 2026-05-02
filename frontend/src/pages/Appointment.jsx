import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext";
import axios from "axios";

const Appointment = () => {
  const {barberId} =useParams();
  const {barbers,token,navigate,backendUrl}=useContext(AppContext);
  const [barber,setBarber]=useState(null);
  const [date,setDate]=useState("");
  const [time,setTime]=useState("");

  useEffect(()=>{
    // find barber from barbers array using barberId
    const selectedBarber=barbers.filter((barber)=>barber._id === barberId);
    setBarber(selectedBarber)
  },[barberId,barber]);

  const bookAppointment = async ()=>{
    try {
      const response = await axios.post(backendUrl+"/api/appointment/book",{date,time,barberId})

      if(res)
    } catch (error) {
      
    }
  }
  return (
    <div className="flex flex-col sm:flex-row gap-8 p-6">
      {/* Left side barber info */}
      <div className="flex flex-col gap-3">
        <img src={barber.image} alt="barber" className="w-24 "/>
        <h1>{barber.name}</h1>
        <p>{barber.services}</p>
        <p>{barber.fees}</p>

      </div>

      {/* Righ side Date picker,Time slots,Book button */}


    </div>
  )
}

export default Appointment