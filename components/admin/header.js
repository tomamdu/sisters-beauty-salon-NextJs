import React, {
    useEffect,useState
  } from 'react';
import { getAuth, signOut } from "firebase/auth";

import { app,  } from '../../firebase/initFirebase';

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router' 
import Cookies from 'js-cookie'

function Header(){

    const router = useRouter()
    const authorization = Cookies.get('login')
    const email = Cookies.get('email')

      

      const  logOut=()=>{

        const auth = getAuth();
        signOut(auth).then(() => {
       // Sign-out successful.
           Cookies.remove('userId')
           Cookies.remove('name')
           Cookies.remove('role')
           Cookies.remove('email')
           Cookies.remove('login')
           router.push('/signin')
       }).catch((error) => {
        // An error happened.
          });

        
    }

    

    
    

    return(
        <>
           <Head>
          
            <meta charSet="utf-8" />           
            <title>Sisters Admin</title>             
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"></link>
            <script src="https://kit.fontawesome.com/53891a1ef0.js" crossorigin="anonymous"></script>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Mohave:wght@300;400&family=Open+Sans:wght@300&display=swap" rel="stylesheet"></link>



            </Head>
        <div className="admin_header" >
                <div className="left">
                    <div className="leftItem">
                        <div className="leftItemImg">
                        <Image src="/logos_black.png"  width={80} height={80} />
                        </div>
                    </div>

                    <div className="leftItem">Sisters Beauty Salon </div>
                </div>
                <div className="right">
                    <Link href="/signin"> 
                    <div className="rightItem">Notification</div>
                    </Link>
                    <button 
                           onClick={() => logOut()}
                           
                    > 
                    <div className="rightItem">LogOut</div>
                    </button>
                </div>
            </div>
            </> 
    )
}

export default Header;