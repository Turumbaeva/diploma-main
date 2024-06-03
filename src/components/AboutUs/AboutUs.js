import React from 'react';
import './AboutUs.css';
import img from "../../assets/TOYOTA CAMRY — безупречное качество комфорта.jpeg"
const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="about-content">
        <div className="about-text">
          <h3>Welcome to Our DriveTime</h3>
          <p>
            At our online music store, we are passionate about music and providing musicians with the best instruments and accessories. We believe that music has the power to inspire, connect, and bring joy to people's lives.
          </p>
          <p>
            With our extensive collection of musical instruments, ranging from guitars and pianos to drums and keyboards, we aim to cater to the needs of musicians of all skill levels. Our instruments are carefully selected for their quality and craftsmanship, ensuring that you receive only the best.
          </p>
          <p>
            We understand that finding the perfect instrument is a personal journey, and our knowledgeable staff is here to assist you every step of the way. Whether you're a beginner or a seasoned professional, we are committed to helping you find the instrument that suits your style and preferences.
          </p>
        </div>
        <div className="about-image">
          <div className="image-container">
            <img src={img} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
