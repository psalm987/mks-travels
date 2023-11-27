import PropType from "prop-types";
import { MENU } from "./constant";

const Menu = (props) => {
  const { drawer } = props;
  return (
    <ul className={`navbar-menu ${drawer ? "drawer" : ""}`}>
      {MENU.map(({ title, link }, index) => (
        <li key={index}>
          <a href={link}>{title}</a>
        </li>
      ))}
      <li>
        <a href="#">
          <button>Sign up</button>
        </a>
      </li>
      <li>
        <button>
          EN
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path
              fill="currentColor"
              d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"
            />
          </svg>
        </button>
      </li>
    </ul>
  );
};

export default Menu;

Menu.propTypes = {
  drawer: PropType.bool,
};
