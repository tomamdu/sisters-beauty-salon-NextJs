import Script from 'next/script'
import Head from 'next/head'
import Header from '../header'
import Side from '../side'
import { useRouter } from 'next/router' 
import Cookies from 'js-cookie'
import React, {
  useEffect,useState
} from 'react';


export default function Layout({ children }) {
  const router = useRouter()
  const authorization = Cookies.get('login')
  const userId = Cookies.get('userId')
  const email = Cookies.get('email')
  const name = Cookies.get('name')
  const role = Cookies.get('role')

  
  

  return (
    <>
    {authorization != "true" ? 
    useEffect(() => {
        router.push('/signin')
    }, []):
      <div className="admin">
      <Head>
            <meta charSet="utf-8" />           
            <title>Sisters Admin</title>             
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"></link>
            <Script async src="https://kit.fontawesome.com/53891a1ef0.js" crossOrigin="anonymous"></Script>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
           <link href="https://fonts.googleapis.com/css2?family=Mohave:wght@300;400&family=Open+Sans:wght@300&display=swap" rel="stylesheet"></link>
            </Head>
      <Header/>
      <Side role = {role} name = {name} email = {email}/>
      <div className="body container ">
        {children}
      </div>
      </div>
    }
    </>
  )
}