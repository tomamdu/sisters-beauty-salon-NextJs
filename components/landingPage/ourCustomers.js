import Image from 'next/image';

function OurCustomers() {
    return(
      
            <div className="page-section">
    <div className="container">
      <h1 className="text-center mb-5 wow fadeInUp">Our Customers</h1>
      <div className="coll" >
        <div className="item">
          <div className="card-doctor">
            <div className="header">
              <Image 
                    src="/img/doctors/doctor_1.jpg" 
                    alt
                    width={500}
                    height={500}
               />
              <div className="meta">
                <a href="#"><span className="mai-call" /></a>
                <a href="#"><span className="mai-logo-whatsapp" /></a>
              </div>
            </div>
            <div className="body">
              <p className="text-xl mb-0">Sara</p>
              <span className="text-sm text-grey">Fantastic, relaxing salon, made special by Dannu and Merry, professional team and the beautiful setting. I highly recommend it!</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card-doctor">
            <div className="header">
              <Image src="/img/doctors/doctor_2.jpg" alt
                   width={500}
                    height={550}
                     />
              <div className="meta">
                <a href="#"><span className="mai-call" /></a>
                <a href="#"><span className="mai-logo-whatsapp" /></a>
              </div>
            </div>
            <div className="body">
              <p className="text-xl mb-0">Betty</p>
              <span className="text-sm text-grey">A wonderfully friendly and professional salon, beautiful location and beautifully kept. Great products and product knowledge. Will definitely return.</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card-doctor">
            <div className="header">
              <Image src="/img/doctors/doctor_3.jpg" alt
                     width={500}
                     height={550}
               />
              <div className="meta">
                <a href="#"><span className="mai-call" /></a>
                <a href="#"><span className="mai-logo-whatsapp" /></a>
              </div>
            </div>
            <div className="body">
              <p className="text-xl mb-0">Samrawit</p>
              <span className="text-sm text-grey">Sisters is by far one of the best retreats around, professional in every aspect but friendly too. Michelle and her dedicated team will do their best to meet your needs and give you your ultimate treatment.Highly worth a visit !</span>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  </div>
        
    )
}

export default OurCustomers;