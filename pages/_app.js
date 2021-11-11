
import '../styles/globals.css'
import '../styles/signin.scss'
import '../styles/admin.css'
import '../styles/header.css'
 
// landing page

import '../styles/assets/css/maicons.css';
import '../styles/assets/css/bootstrap.css';
import '../styles/assets/vendor/owl-carousel/css/owl.carousel.css';
import '../styles/assets/vendor/animate/animate.css';
import '../styles/assets/css/theme.css';


export default function App({
  Component,
  pageProps: { ...pageProps },
}) {
  return (
    
      <Component {...pageProps} />
   
  )
}
