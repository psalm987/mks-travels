import "./button.css";

const Button = (props) => {
  return <button {...props} className="primary-button" />;
};

export const CircleButton = (props) => {
  return <button {...props} className="circle-button" />;
};

export default Button;
