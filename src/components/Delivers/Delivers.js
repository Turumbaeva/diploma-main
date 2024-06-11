import React from 'react';
import './Delivers.css';

function Delivers() {
  return (
    <div className="delivery-container container">
      <h2 className="delivery-heading">Delivery Information</h2>
      <div className="delivery-details">
        <p>
          <strong className="delivery-label">Warehouse Address: Bishkek City, 123 Main St</strong> 
        </p>
        <p>
          <strong className="delivery-label">Phone:  +996 706 123 456</strong> 
        </p>
        <p>
          <strong className="delivery-label">Email: delivery@example.com</strong> 
        </p>
        <p>
          <strong className="delivery-label">Business Hours: Monday to Friday, 8:00 AM to 5:00 PM</strong> 
        </p>
        <p>
          <strong className="delivery-label">Delivery Time: Orders placed before 14:00 are dispatched on the same day.</strong> 
        </p>
      </div>
      <p className="delivery-message">
        We provide a wide range of delivery services to meet our customers' needs. Whether you need next-day delivery or an economical postal service, we guarantee reliable and safe delivery of your order.
      </p>
      <div className="delivery-options">
        <h3 className="delivery-options-heading">Delivery Options</h3>
        <ul className="delivery-options-list">
          <li>Express Delivery: Next-day delivery at competitive rates.</li>
          <li>Standard Delivery: Delivery within 2-3 business days.</li>
          <li>Economy Delivery: Most cost-effective option for lightweight and non-urgent orders.</li>
        </ul>
      </div>
      <div className="delivery-terms">
        <h3 className="delivery-terms-heading">Delivery Terms</h3>
        <ul className="delivery-terms-list">
          <li>Delivery is available within the city limits of Bishkek only.</li>
          <li>Delivery times may vary depending on weather conditions and other factors.</li>
          <li>Additional charges may apply for special delivery services.</li>
        </ul>
      </div>
      
    </div>
  );
}

export default Delivers;
