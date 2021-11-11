import Link from 'next/link'
import Cookies from 'js-cookie'



function Side(prop){
    return(
        <div className="side">
                <div className="sideUp">
                     <div className="sideUpImage"> 
                          <img src="/doctor_1.jpg"/>
                    </div>

                     <div className="sideUpItem">
                         
                        <span className="sideUpItemRole">admin</span>
                        <span>{prop.name}</span>
                        <span>{/*prop.email*/}</span>     

                    </div>
                </div>

                <lu className="sideDownList">
                   <Link  href="/admin">
                    <li  className="sidebarListItem">
                        <i class="fas fa-tachometer-alt"></i>
                        <div className="listItem">Dashbord </div>
                    </li>
                    </Link>
                     {prop.role == 'adminsisters'?
                    <Link  href="/admin/users"> 
                    <li className="sidebarListItem">
                        <i class="fas fa-users"></i>
                        <div className="listItem"> Users</div>
                    </li>
                    </Link>:null}
                
                    <Link  href="/admin/gallery"> 
                    <li className="sidebarListItem">
                        <i class="fas fa-users"></i>
                        <div className="listItem"> Gallery</div>
                    </li>
                    </Link>

                      {prop.role == 'adminsisters'?
                    <Link  href="/admin/appointments"> 
                    <li className="sidebarListItem">
                        <i class="fas fa-calendar-check"></i>
                        <div className="listItem">Appointments</div>
                    </li>
                    </Link>:null}

                     
                    <Link  href="/admin/appointments"> 
                    <li className="sidebarListItem">
                        <i class="fas fa-calendar-check"></i>
                        <div className="listItem">My Appointment</div>
                    </li>
                   </Link>
                 
                    <Link  href="/admin/appointments"> 
                    <li className="sidebarListItem">
                        <i class="fas fa-calendar-check"></i>
                        <div className="listItem">Book</div>
                    </li>
                    </Link>

                    
                    
                </lu>
                
            </div>
    )
}

export default Side;