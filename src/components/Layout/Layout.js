import Nav from "../Nav/Nav";
import "./Layout.css"
import Logo from "../Logo/Logo";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import { useState } from "react";
import Drawer from "../Drawer/Drawer";
import NavToggle from "../NavToggle/NavToggle";
import Footer from "../Footer/Footer";
import Search from "../Search/Search";

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <div className="Layout">
      <header>
        <div className="spacer">
          <NavToggle callback={toggleDrawer} />
          <Logo />
          <Nav />
          <Drawer open={drawerOpen} toggle={toggleDrawer} />
          <Search />
          <div>
            <Auth />
            <CartLink />
          </div>
        </div>
      </header >
      <main>
        {props.children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div >
  );
}