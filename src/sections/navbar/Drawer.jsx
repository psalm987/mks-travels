import Drawer from "react-modern-drawer";
import Menu from "./Menu";
import PropTypes from "prop-types";

const CustomDrawer = (props) => {
  const { open, onClose } = props;
  return (
    <Drawer
      open={open}
      onClose={onClose}
      direction="right"
      size={400}
      enableOverlay={true}
    >
      <button onClick={onClose} className="drawer-close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            fill="currentColor"
            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
          />
        </svg>
      </button>
      <Menu drawer />
    </Drawer>
  );
};

export default CustomDrawer;

CustomDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
