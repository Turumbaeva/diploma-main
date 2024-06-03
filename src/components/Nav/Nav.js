import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  let menuBtn = document.querySelectorAll('.NavItem a')
  let menu = document.querySelector('.Drawer')
  menuBtn.forEach(el => {
    el.addEventListener('click', function () {
      menu.classList.remove('open')
    })
  })
  return (
    <div className="Nav">
      <nav className="topbar">
        <ul>
          <li className="NavItem">
            <NavLink to="/" className="underline-one" onClick={scrollToTop}>Home</NavLink>
          </li>
          <li className="NavItem">
            <NavLink to="/about" className="underline-one" onClick={scrollToTop}>About</NavLink>
          </li>
          <li className="NavItem">
            <NavLink to="/contact" className="underline-one" onClick={scrollToTop}>Contact</NavLink>
          </li>
          <li className="NavItem">
            <NavLink to="/deliver" className="underline-one" onClick={scrollToTop}>Deliver</NavLink>
          </li>
          <li className="NavItem">
            <NavLink to="/orders" className="underline-one" onClick={scrollToTop}>Orders</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}