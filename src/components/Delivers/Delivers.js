import React from 'react';
import './Delivers.css';
import Clock from "../../assets/clock-icon.png";
import Shipping from "../../assets/shipping-icon.png";
import World from "../../assets/world-icon.png";

const Delivers = () => {
  return (
    <div className="delivers-container container">
      <h2 className="delivers-heading">Fast and Reliable Delivery</h2>
      <div className="delivery-info">
        <div className="delivery-option">
          <img src={Shipping} alt="Shipping Icon" className="delivery-icon" />
          <h3 className="delivery-option-title">Free Shipping</h3>
          <p className="delivery-option-description">
            We offer free shipping on all orders, ensuring that you receive your musical instruments without any additional cost. Our dedicated shipping partners guarantee reliable and secure delivery.
          </p>
        </div>
        <div className="delivery-option">
          <img src={Clock} alt="Clock Icon" className="delivery-icon" />
          <h3 className="delivery-option-title">Quick Delivery</h3>
          <p className="delivery-option-description">
            With our efficient delivery service, your musical instruments will arrive at your doorstep in record time. We prioritize speed without compromising on the safety of your items. Track your package with our real-time delivery updates.
          </p>
        </div>
        <div className="delivery-option">
          <img src={World} alt="World Icon" className="delivery-icon" />
          <h3 className="delivery-option-title">Worldwide Shipping</h3>
          <p className="delivery-option-description">
            No matter where you are, we deliver worldwide. From local shipments to international orders, our shipping network covers the globe. Experience the convenience of ordering your favorite musical instruments from anywhere and receiving them hassle-free.
          </p>
        </div>
      </div>
      <p className="delivery-message">
        Experience a hassle-free delivery service that ensures your musical instruments reach you in perfect condition. Sit back, relax, and let us handle the rest. We take pride in providing top-notch delivery services to musicians like you.
      </p>
    </div>
  );
};

export default Delivers;
