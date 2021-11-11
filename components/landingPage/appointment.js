import React,{useState} from 'react'

//firebase
import { collection, addDoc } from "firebase/firestore"; 
import {db} from '../../firebase/initFirebase';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function Appointment(){

  const [appointmentData, setAppointmentData] = useState({name: '', email: '',service:'',date: '', phone: '', message: ''})
  const [startDate, setStartDate] = useState(new Date());


     const handleSubmit =(e) =>{
        e.preventDefault();
    // dispatch(createAppointment(appointmentData));
       const addData=  async  ()=>{

         try {
               const docRef = await addDoc(collection(db, "appointments"), {
                    ...appointmentData
                });

             console.log("Document written with ID: ", docRef.id);

             } catch (e) {
                 console.error("Error adding document: ", e);
             }
       }

       addData(appointmentData);

    setAppointmentData({name: '', email: '', phone: '', message: '',service:'',date: ''});
  }

    return(
        <div className="page-section">
    <div className="container">
      <h1 className="text-center wow fadeInUp">Make an Appointment</h1>
      <form className="main-form" onSubmit={handleSubmit}>
        <div className="row mt-5 ">
          <div className="col-12 col-sm-6 py-2 wow fadeInLeft">
            <input 
               value={appointmentData.name}
               onChange={(e) => setAppointmentData({...appointmentData,name:e.target.value})} 
               type="text" 
               className="form-control" 
               placeholder="Full name" />
          </div>
          <div className="col-12 col-sm-6 py-2 wow fadeInRight">
            <input 
               value={appointmentData.email}
               onChange={(e) => setAppointmentData({...appointmentData,email:e.target.value})}
               type="text" className="form-control" placeholder="Email address.." />
          </div>
          <div className="col-12 col-sm-6 py-2 wow fadeInRight" data-wow-delay="300ms">
            {/*<input
               value={appointmentData.date}
               onChange={(e) => setAppointmentData({...appointmentData,date:e.target.value})} 
               type="date" className="form-control" />*/}
                {/*<DatePicker
               
                  value={!appointmentData.date?dt:appointmentData.date}
                  onChange={(val) =>  setAppointmentData({...appointmentData,date:val._d})}
                 />*/}
                 <DatePicker
                 minTime={new Date(0, 0, 0, 0)}
                 minDate={moment().toDate()}              
                 selected={!appointmentData.date?startDate:appointmentData.date}
                 onChange={(date) => setAppointmentData({...appointmentData,date:date})} 
              //onSelect={handleDateSelect} //when day is clicked
              //onChange={handleDateChange} //only when value has changed
            />
          </div>
          
          <div className="col-12 col-sm-6 py-2 wow fadeInRight" data-wow-delay="300ms">
            <select 
               value={appointmentData.service}
               onChange={(e) => setAppointmentData({...appointmentData,service:e.target.value})}
               name="departement" id="departement" className="custom-select">
              <option value="general">General MakeUp</option>
              <option value="eyebrow">Eyebrow</option>
              <option value="hair">Hair</option>
              <option value="nail">Nail</option>
              
            </select>
          </div>
          <div className="col-12 col-sm-6 py-2 wow fadeInRight"  data-wow-delay="300ms">

                <PhoneInput 
                       defaultCountry="ET"
                       placeholder="Enter phone number"
                       value={appointmentData.phone}
                       onChange={(value) => setAppointmentData({...appointmentData,phone:value})}
                       />
               
          </div>
          <div className="col-12 py-2 wow fadeInUp" data-wow-delay="300ms">
            <textarea 
               value={appointmentData.message}
               onChange={(e) => setAppointmentData({...appointmentData,message:e.target.value})}
               name="message" id="message" className="form-control" rows={6} placeholder="Enter message.." defaultValue={""} />
          </div>
        </div>
        <button type="submit" style={{backgroundColor: "#cee0d3"}} className="btn mt-3 wow zoomIn">Submit Request</button>
      </form>
    </div>
  </div> 
    )
}

export default Appointment;