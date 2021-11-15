import Link from 'next/link'
//import { signIn, signOut, useSession } from 'next-auth/client'

function Header() {
    return (
        <header>
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 text-sm">
                <div className="site-info">
                  <a href="#"><span className="mai-call text-primary" /> +251 92 872 5889 </a>
                  <span className="divider">|</span>
                  
                  <a href="#"><span className="mai-mail text-primary" /> sistersbeautysalon@gmail.com.com</a>
                </div>
              </div>
              <div className="col-sm-4 text-right text-sm">
                <div className="social-mini-button">
                  <a href="#"><span className="mai-logo-facebook-f" /></a>
                  <a href="#"><span className="mai-logo-instagram" /></a>
                </div>
              </div>
            </div> {/* .row */}
          </div> {/* .container */}
        </div> {/* .topbar */}
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
          <div className="container">
          <img style={{maxWidth:"6%", maxHeight:"12%"}} src="/img/logos/Sisters Beauty Salon-logos_black.png" alt />
            <a className="navbar-brand" href="#"><span className="text-primary"></span>Sisters-Beauty-Salon</a>
            <form action="#">
              <div className="input-group input-navbar">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="icon-addon1"><span className="mai-search" /></span>
                </div>
                <input type="text" className="form-control" placeholder="Enter keyword.." aria-label="Username" aria-describedby="icon-addon1" />
              </div>
            </form>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupport" aria-controls="navbarSupport" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupport">
              <ul className="navbar-nav ml-auto">
                <Link className="nav-link" href="/" >
                <li className="nav-item">
                     <a className="nav-link"> Home  </a>
                </li>
                </Link>
                
                  <Link href="/about" className="nav-link">
                   <li className="nav-item">
                       <a className="nav-link"> About</a>
                </li>
                </Link>
                <Link href="/booking" className="nav-link">
                <li className="nav-item">
                    <a className="nav-link">Booking</a>
                </li>
                </Link>
                <Link href="/galery" className="nav-link ">
                <li className="nav-item">
                     <a className="nav-link">Galery</a>
                </li>
                </Link>
                <Link href="/contact" >
                <li className="nav-item">
                  <a className="nav-link">Contact</a>
                </li>
                </Link>
                <Link href="/signin" >
                <li href="/api/auth/signin" className="nav-item">
                  <a className="btn ml-lg-3" style={{backgroundColor: "#222",color: "white"}} >signIn</a>
                </li>
                </Link>
              </ul>
            </div> {/* .navbar-collapse */}
          </div> {/* .container */}
        </nav>
      </header>
    )
}

export default Header;