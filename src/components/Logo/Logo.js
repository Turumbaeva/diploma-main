import "./Logo.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

export default function Logo(props) {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div className="Logo">
      <NavLink to="/" onClick={scrollToTop}>
      <img src={logo} alt="logo" className="logo" />
      </NavLink>
    </div>
  );
}