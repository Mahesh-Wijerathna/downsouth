import { Link } from 'react-router-dom';
import './Home.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from "./Home.css";


const Home = () => {
  const carouselImages = [
    'images/image6.jpg',
    'images/image2.jpg',
    'images/image3.jpeg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const incrementSlide = () => {
    setCurrentSlide((currentSlide + 1) % carouselImages.length);
  };

  useEffect(() => {
    const interval = setInterval(incrementSlide, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleMouseEnter = (type) => {
    // Handle mouse enter event for each image type
    console.log(`Mouse enter: ${type}`);
  };

  const handleMouseLeave = () => {
    // Handle mouse leave event for both images
    console.log('Mouse leave');
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='logo-image'> 
        <img src="/images/logo.png" style={{ width: '70px', height: '70px' }} />
      </div>
        <nav>
          <ul className="nav-list">
            <li><a href="/projects">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <div>
              <Link className="btn" to="/login">Login</Link>
            </div>
          </ul>
        </nav>
      </header>

      <div className="carousel">
        <Carousel
          showStatus={false}
          showThumbs={false}
          selectedItem={currentSlide}
          infiniteLoop={true}
          autoPlay={false}
        >
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
              
            </div>
          ))}
        </Carousel>
      </div>
      <div className="image-text">
                <p>Welcome to </p>
                <p>Discover Best Medical Center Near By You</p>
                <div>
        <p className='logo-text'>Healthy Roam</p>
        </div>       
              </div>
       

      <div className="image-container1">
        <div
          className="image-card"
          onMouseEnter={() => handleMouseEnter('tourist')}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/images/signup.png" alt="Patient" />
          <div className='image-text-on'>
    <p>Sign up as a Tourist</p>
  </div>
          <div className="overlay-text">
            
            <Link className="btn" to="/register">Sign Up</Link>
          </div>
        </div>

        <div
          className="image-card"
          onMouseEnter={() => handleMouseEnter('medical')}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/images/register.png" alt="Medical" />

<div className='image-text-on'>
<p>Sign up as a Medical Center</p>
</div>

          <div className="overlay-text">
           
            <Link className="btn" to="/medical">Register</Link>
          </div>
        </div>
      </div>


            <div className='btnsrch'>
      <Link className="btn " to="/search">
            Search By Location
          </Link>
          </div>
          

<div className='square'>

</div>

<p className='square-text'>50+ </p>
<p className='square-text-1'>Medical Service Providers</p>

<div className='line'>
</div>

<p className='square-text-2'>
  Join With Us
  </p>
  <p className='square-text-2'>
  This is the best way to find a medical center
  </p>
  <div className='square-text-3'>
  <p>
  Tourists venturing through the enchanting landscapes of the South can now
  <br/>
  seamlessly navigate their health needs. With our user-friendly platform, 
  <br/>
  finding nearby medical centers and arranging appointments is hassle-free,
  <br/> 
  leaving you more time to explore and enjoy your travels
 
  </p> 

  </div>

  <div>
  
  <img src="/images/doctor.jpg" alt="Description of the image" className="right-image" />
</div>




          <div className="footer">
      <div className={styles.rectangleParent1}>
      <div className={styles.groupChild12} />
      <div className={styles.privacyPolicy}>
        Privacy Policy | Terms of Use | Contact Us
      </div>
      <div className={styles.turningDreamsIntoContainer}>
              </div>
      <b className={styles.dreamhome1}>Healthy Rome</b>
      <div className={styles.followUs}>Follow us</div>
      
      <img
        className={styles.iconFacebookIcon}
        alt=""
        src="/images/fb.png"
      />
      
      <img
        className={styles.iconInstagram}
        alt=""
        src="/images/in.png"
      />
      <img
        className={styles.iconLinkedinOriginal}
        alt=""
        src="/images/twitter.png"
      />
      <div className={styles.dreamhomeRealtyAllContainer}>
        <p
          className={styles.dreamhomeWhereYour}
        >{`© 2024 Healthy Rome. All rights reserved. `}</p>
      </div>
    </div>
    </div>


    </div>
  );
};

export default Home;
