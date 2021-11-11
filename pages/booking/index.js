import Head from 'next/head'



import Header from '../../components/landingPage/header'

import Footer from '../../components/landingPage/footer';
import Appointment from '../../components/landingPage/appointment';

export default function Booking() {

;

  return (
    <> 
       <Head>
      <title>Sisters Beauty Salon Booking</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      <meta name="description" content="Sisters beauty salon is an establishment that offers a variety of cosmetic treatments and cosmetic services for women in Addis Ababa,Ethiopia. Beauty salons  offer a variety of services including professional hair cutting and styling, manicures and pedicures, and often cosmetics, makeup and makeovers."/>     
      <script type="text/javascript" async src="/js/jquery-3.5.1.min.js"></script>
      <script type="text/javascript" async src="/js/bootstrap.bundle.min.js"></script>
      <script type="text/javascript" async src="/vendor/owl-carousel/js/owl.carousel.min.js"></script>
      <script type="text/javascript" async src="/vendor/wow/wow.min.js"></script>
      <script type="text/javascript" async src="/js/theme.js"></script>

      </Head> 

      <Header/>
      <Appointment/>
     <Footer/>
  

    </>
  )
}
