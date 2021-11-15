import Image from 'next/image';

function CometoUs() {
    return(
        <div>
            <div className="page-hero bg-image overlay-dark" style={{backgroundImage: 'url(/img/bg_image_1.jpg)'}}>
    <div className="hero-section">
      <div className="container text-center wow zoomIn">
        <span className="subhead">COME TO US, YOU WILL LEAVE BEAUTIFIED.</span>
        <h1 className="display-4">Sisters Beauty Salon</h1>
        <a href="#" style={{backgroundColor: "#cee0d3"}} className="btn ">Let&apos;s Consult</a>
      </div>
    </div>
  </div>
  <div className="bg-light">
    <div className="page-section py-3 mt-md-n5 custom-index">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 py-3 py-md-0">
            <div className="card-service wow fadeInUp">
              <div className="circle-shape bg-secondary text-white">
                <span className="mai-chatbubbles-outline" />
              </div>
              <p><span>Chat</span> with a professional</p>
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card-service wow fadeInUp">
              <div style={{backgroundColor:"#222"}} className="circle-shape  text-white">
                <span className="mai-shield-checkmark" />
              </div>
              <p>Beauty Protection</p>
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card-service wow fadeInUp">
              <div className="circle-shape bg-accent text-white">
                <span className="mai-basket" />
              </div>
              <p>Beauty Products</p>
            </div>
          </div>
        </div>
      </div>
    </div> {/* .page-section */}
    <div className="page-section pb-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 py-3 wow fadeInUp">
            <h1>Sisters Beauty Salon</h1>
            <p className="text-grey mb-4">Envelop yourself in a range of enticing treatments within the calm atmosphere of a Fantish Beauty Salon. Our complete menu of head to toe treatments is guaranteed to deliver stunning results and our holistic approach to hair and beauty means you will leave feeling good.</p>
            <a href="about.html" className="btn btn-primary">Learn More</a>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="400ms">
            <div className="img-place custom-img-1">
              <Image
                   width={500}
                   height={300}
                   src="/img/makeup.jpg" alt />
            </div>
          </div>
        </div>
      </div>
    </div> {/* .bg-light */}
  </div> {/* .bg-light */}
        </div>
    )
}

export default CometoUs;