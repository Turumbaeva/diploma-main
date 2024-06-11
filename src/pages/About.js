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
  
          title="Our Story"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
        />
        <Accordion
          title="Our Mission"
          content="Vestibulum quis quam vel quam bibendum fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh."
        />
        <Accordion

          title="Our Values"
          content="Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo."
        />
      </div>
    </div>
    </div>
  );
}