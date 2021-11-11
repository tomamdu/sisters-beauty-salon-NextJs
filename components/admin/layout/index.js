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
    { 
    useEffect(() => {
        authorization != "true" ?
        router.push('/signin'):
      <div className="admin">
      <Header/>
      <Side role = {role} name = {name} email = {email}/>
      <div className="body container ">
        {children}
      </div>
      </div>
    }, [])
    }
    </>
  )
}