import Head from 'next/head'

import React, {
  useEffect,useState
} from 'react';

import { app,  } from '../firebase/initFirebase';

import Header from '../components/landingPage/header'
import CometoUs from '../components/landingPage/cometoUs'
import OurCustomers from '../components/landingPage/OurCustomers';
import Mobile from '../components/landingPage/mobile';
import Footer from '../components/landingPage/footer';

import { getAnalytics, logEvent } from "firebase/analytics";
import Appointment from '../components/landingPage/appointment';
export default function Home() {

;
   //analytics
  useEffect(() => {
    const analytics = getAnalytics()
    logEvent(analytics, 'website_visit');
  }, [])

  return (
    <> 
       <Head>
       <title>Sisters Beauty Salon in addis ababa,Ethiopia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <meta name="description" content="Sisters beauty salon is an establishment that offers the best variety of cosmetic treatments and cosmetic services for women in Addis Ababa,Ethiopia.sisters Beauty salon offer a variety of services including professional hair cutting and styling, manicures and pedicures, and often cosmetics, makeup and makeovers."/>     
        

      <script type="text/javascript" src="/js/jquery-3.5.1.min.js"></script>
      <script type="text/javascript" src="/js/bootstrap.bundle.min.js"></script>
      <script type="text/javascript" src="/vendor/owl-carousel/js/owl.carousel.min.js"></script>
      <script type="text/javascript" src="/vendor/wow/wow.min.js"></script>
      <script type="text/javascript" src="/js/theme.js"></script>
        

      </Head> 
      
      <div classname="{styles.container}">
       {/* Back to top button */}
     <div className="back-to-top" />

      <Header/>
      <CometoUs />
      <OurCustomers/>
      <Appointment/>
      <Mobile/>
     <Footer/>
  </div>

    </>
  )
}
