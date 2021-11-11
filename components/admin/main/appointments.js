import { collection, getDocs, query, where,orderBy ,limit} from "firebase/firestore";
import {db} from '../../../firebase/initFirebase';


import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function Appointments(){
    
    const [loading,setLoading] = useState(true);
    const [result, setResult] = useState([]);
    const [val, setVal] = useState()

    const appointmentRef = collection(db, "appointments"); 
    
    const [startDate, setStartDate] = useState(new Date());
     

    useEffect(() => {
 
       const getAppointments = async ()=>{
            
           const q = query(appointmentRef ,orderBy("date", "desc"), limit(100));
           const data = await getDocs(q);
            setResult(data.docs.map((doc)=>doc.data()));
            
            setLoading(false)
        }
             
    getAppointments();

      }, []);
            
            // Appointments By Day 
    const dayhandler =(val)=>{
      
       var hour = val.getHours();
        const t = moment(val.getTime() - hour * 60 * 60 * 1000)._d;
        setVal(t)
     
      console.log("t",t);

     const oneDay = new Date(t );
     
     const v =  moment(t.getTime() + 23 * 60 * 60 * 1000)._d;
     
     //dispatch(getDayAppointments(moment(val).format('YYYY-MM-DD')));
     const getAppointmentsByDay = async ()=>{

        

        const q = query(appointmentRef ,where("date", '>=', oneDay), where("date", '<', v),orderBy("date", "desc"), limit(100));
         const data = await getDocs(q);
          setResult(data.docs.map((doc)=>doc.data()));
         
         
         setLoading(false)
         console.log(oneDay);
         console.log(v);
         
     }

     getAppointmentsByDay();
        
   }
        
   

    return(
        
  <div className="appointments">        

      <div className="topAppoint">   

        <div claseName="rightAppoint">
              <div className="input-group rounded">
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" />
                <span className="input-group-text border-0" id="search-addon">
                  <i className="fas fa-search"></i>
                </span>
              </div>
        </div>        

        <div claseName="leftAppoint">
           <DatePicker
              selected={!val?startDate:val}
              onChange={(date) =>dayhandler(date)}
              
              //onSelect={handleDateSelect} //when day is clicked
              //onChange={handleDateChange} //only when value has changed
            />
        </div>    
      </div>       

  <table class="table table-hover">

    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Phone</th>
        <th scope="col">Day</th>
        <th scope="col">Service</th>
      </tr>
   </thead>
   
   <tbody>
      
      {loading? <div className="tableLoader"><Loader
        type="TailSpin"
        color="#176cff"
        height={100}
        width={100}
        timeout={3000} //3 secs
      /></div>:null}
      

      {result.map( r=><tr key={r.email}>
      <th scope="row">1</th>
      <td>{r.name}</td>
      <td>{r.phone}</td>
      <td>{moment(r.date.toDate()).format("MMM Do YY")}</td>
      <td>{r.service}</td>
      <td><button className="btn btn-outline-danger btn-sm">Delete</button></td>
    </tr>
       )} 
  </tbody>

  </table>

</div>
    )
}

export default Appointments;