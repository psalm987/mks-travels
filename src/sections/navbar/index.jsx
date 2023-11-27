import { useState } from "react";
import Container from "../../components/Container";
import CustomDrawer from "./Drawer";
import Menu from "./Menu";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <nav className={`navbar-holder`}>
      <Container className="navbar-content">
        <img src="/img/logo.svg" />
        <Menu />
        <button className="navbar-menu-hamburger" onClick={handleOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path
              fill="currentColor"
              d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
            />
          </svg>
        </button>
      </Container>
      <CustomDrawer open={open} onClose={handleClose} />
    </nav>
  );
};

export default Navbar;
