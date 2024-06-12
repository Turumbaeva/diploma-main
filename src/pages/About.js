import AboutUs from "../components/AboutUs/AboutUs";
import Accordion from "../components/Accordion/Accordion";

export default function About() {
  return (
    <div className="About">
      <AboutUs />
      <div className="about-container container">
      <h2 className="about-heading">About Us</h2>
      <div className="accordion">
        <Accordion
  
          title="How do you determine the trade-in value of my car?"
          content="We use a combination of market data, vehicle condition, and mileage to determine the trade-in value.
"
        />
        <Accordion
          title="Can I see the maintenance records for this car?"
          content="Absolutely, I’ll get the records for you right now. We keep detailed records for all our vehicles.
"
        />
        <Accordion

          title="How many previous owners has this car had?"
          content="This car has had one previous owner who took excellent care of it."
        />
      </div>
    </div>
    </div>
  );
}