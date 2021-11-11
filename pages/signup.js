import React, {
  useEffect,useState
} from 'react';

import { useRouter } from 'next/router'

import { getAuth, createUserWithEmailAndPassword,signInWithPopup, FacebookAuthProvider, GoogleAuthProvider} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore"
import { app,  } from '../firebase/initFirebase';
import {db} from '../firebase/initFirebase';
import { getAnalytics, logEvent } from "firebase/analytics";
import 'firebase/auth';


import Link from 'next/link'
import Head from 'next/head'


import 'bootstrap/dist/css/bootstrap.min.css';

import Cookies from 'js-cookie'


function SignUp(){


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('0')
  const [loading,setLoading] = useState(false);
  
  const analytics = getAnalytics();
    const auth = getAuth();
    const provider = new FacebookAuthProvider();
    const providerGoogle = new GoogleAuthProvider();
    const router = useRouter()
  
  
  const creatUser=(e)=>{
      e.preventDefault();
      setLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
    // Signed in 
      const user = userCredential.user;

      const  userId = user.uid

        return setDoc(doc(db, "users", userId), {
          name: name,
          role: role

         }).then(()=>{
           //Signin analytics
          logEvent(analytics, 'sign_up');

          // set Cookies
          Cookies.set('login', true)
          Cookies.set('name', name) 
          Cookies.set('email', user.email) 
          router.push('/admin')
        });

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    // ..
  });
      
  }
  const facebookLogin=(e)=>{
    e.preventDefault();
    
    signInWithPopup(auth, provider)
.then((result) => {
  // The signed-in user info.
  const user = result.user;
  setLoading(true)
      Cookies.set('login', true)
      Cookies.set('email', user.email)
      router.push('/admin')
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  const credential = FacebookAuthProvider.credentialFromResult(result);
  const accessToken = credential.accessToken;

  // ...
})
.catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The AuthCredential type that was used.
  const credential = FacebookAuthProvider.credentialFromError(error);

  // ...
});
    
}

const googleLogin=(e)=>{
  e.preventDefault();
  
  signInWithPopup(auth, providerGoogle)
.then((result) => {
// This gives you a Google Access Token. You can use it to access the Google API.
const credential = GoogleAuthProvider.credentialFromResult(result);
const token = credential.accessToken;
// The signed-in user info.
const user = result.user;
setLoading(true)
    Cookies.set('login', true)
    Cookies.set('email', user.email)
    console.log("try");
    router.push('/admin')

}).catch((error) => {
// Handle Errors here.
const errorCode = error.code;
const errorMessage = error.message;
// The email of the user's account used.
const email = error.email;
// The AuthCredential type that was used.
const credential = GoogleAuthProvider.credentialFromError(error);
// ...
});
  
}
  
   

      return (
          <div>
          <Head>
      <title>Sisters Beauty Salon</title>
      
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
      <script async src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script async src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"></link>
    </Head>
<div>
<div className="container">
 
  <div className="card bg-light">
    <article className="card-body mx-auto" style={{maxWidth: 400}}>
      <h4 className="card-title mt-3 text-center">Create Account</h4>
      <p className="text-center">Sisters Beauty Salon</p>
      <p>
      <button    onClick={(event) => googleLogin(event)} href className="btn btn-block btn-secondary"> <i className="fab fa-google" /> &nbsp; Login via Google</button >
          <button onClick={(event) => facebookLogin(event)} className="btn btn-block btn-primary"> <i className="fab fa-facebook-f" /> &nbsp; Login via facebook</button>
      </p>
      <p className="divider-text">
        <span className="bg-light">OR</span>
      </p>

      

      <form onSubmit={(event) => creatUser(event)}>

       <div className="form-group input-group">
          <div className="input-group-prepend">
          <span className="input-group-text"> <i className="fa fa-user" /> </span>
     </div>
           <input 
           value={name}
           onChange={(e) => setName(e.target.value)}
           name className="form-control" placeholder="Name" type="text" />
    </div> {/* form-group// */} 
      
      <div className="form-group input-group">
          <div className="input-group-prepend">
          <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
     </div>
           <input 
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           name className="form-control" placeholder="Email address" type="email" />
    </div> {/* form-group// */}

        
        
       
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-lock" /> </span>
          </div>
          <input 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control" placeholder="Password" type="password" />
        </div> {/* form-group// */}

       {/*recapch*/}     
        
         <div id="recaptcha-container"></div> 

        <div className="form-group">
        <div id="recaptcha"></div>
        {!loading?
          <button 
              type="submit" 
              className="btn btn-primary btn-block"
              
              > Sign Up</button>:
              <button 
                className="btn btn-primary btn-block disabled"

                > Loading</button>
        }        
        </div> {/* form-group// */}      
        
        <p className="text-center">Have an account?<Link href="/signin"> Sign In  </Link>  </p>                                                      
      </form>
    </article>
  </div> {/* card.// */}
</div> 
{/*container end.//*/}
<br /><br />

</div>

</div>











        )
}

export default SignUp